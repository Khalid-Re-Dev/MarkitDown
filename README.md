<div align="center">
  <h1>⚡ MarkItDown Web</h1>
  <p><strong>Seamlessly convert documents, images, and audio into clean, structured Markdown in seconds.</strong></p>
</div>

---

## 🚀 Key Features

- **Interactive Drag-and-Drop Zone**: Intuitive interface for uploading files effortlessly.
- **Cross-Platform File Support**: Convert PDFs, Word docs, Excel sheets, PowerPoint slides, Images, and Audio files seamlessly.
- **Smooth Transitions**: Fluid animations powered by Framer Motion for a premium user experience.
- **Instant File Download**: Get your converted Markdown files immediately without waiting.

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

*Powered by **Microsoft MarkItDown***

## 🏗️ Architecture Overview

MarkItDown Web uses a **Decoupled Full-Stack Architecture**:

1. **Frontend**: A highly responsive Next.js user interface handles file selection, drag-and-drop interactions, and state management.
2. **Backend**: A robust FastAPI microservice written in Python receives the files, processes them using the Microsoft `markitdown` library, and returns the structured Markdown content.

The Next.js UI communicates with the FastAPI conversion microservice via RESTful APIs, ensuring separation of concerns and high performance.

## 💻 Local Setup

Follow these steps to run the application locally.

### Prerequisites

- Node.js
- Python 3.8+

### 1. Clone the repository

```bash
git clone https://github.com/Khalid-Re-Dev/MarkitDown.git
cd MarkitDown
```

### 2. Start the Backend (FastAPI)

Open a terminal in the project root and navigate to the `backend` directory:

```bash
cd backend
# Create and activate a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload
```
The backend API will run on `http://127.0.0.1:8000`.

### 3. Start the Frontend (Next.js)

Open a new terminal in the project root directory:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```
The Next.js application will be available at `http://localhost:3000`.

---
