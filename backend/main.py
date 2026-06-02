from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import tempfile
import os
from markitdown import MarkItDown

app = FastAPI()

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/convert")
async def convert_file(file: UploadFile = File(...)):
    # Extract extension for MarkItDown to infer file type
    filename = file.filename or "unknown"
    _, ext = os.path.splitext(filename)
    
    # Create a temporary file to save the uploaded content
    try:
        fd, temp_file_path = tempfile.mkstemp(suffix=ext)
        with os.fdopen(fd, 'wb') as f:
            content = await file.read()
            f.write(content)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save uploaded file: {str(e)}")

    try:
        # Initialize MarkItDown and convert the temporary file
        md = MarkItDown()
        result = md.convert(temp_file_path)
        
        return JSONResponse(content={
            "success": True,
            "markdown": result.text_content
        })
    except Exception as e:
        # Return 500 status with exact error message if conversion fails
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # Securely delete the temporary file to prevent storage bloat
        if os.path.exists(temp_file_path):
            try:
                os.remove(temp_file_path)
            except Exception:
                pass
