"use client";

import { useState } from 'react';
import { FileText, FileImage, FileAudio, FileSpreadsheet } from 'lucide-react';
import { FileDropzone } from '@/components/ui/FileDropzone';
import { ResultView } from '@/components/ui/ResultView';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [conversionResult, setConversionResult] = useState<{markdown: string, fileName: string} | null>(null);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Convert Any Document to <span className="text-indigo-600">Clean Markdown</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 sm:text-xl">
          Seamlessly transform PDFs, Word documents, Excel spreadsheets, Images, and Audio files into beautifully formatted Markdown using our intelligent backend.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-transform hover:scale-105">
            <FileText size={16} className="text-indigo-500" /> PDF & Word
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-transform hover:scale-105">
            <FileSpreadsheet size={16} className="text-green-500" /> Excel
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-transform hover:scale-105">
            <FileImage size={16} className="text-blue-500" /> Images
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-transform hover:scale-105">
            <FileAudio size={16} className="text-purple-500" /> Audio
          </div>
        </div>
      </div>
      
      <div className="mt-16 w-full max-w-4xl relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {!conversionResult ? (
            <div key="dropzone" className="absolute w-full">
              <FileDropzone 
                onConversionSuccess={(markdown, fileName) => setConversionResult({ markdown, fileName })} 
              />
            </div>
          ) : (
            <div key="result" className="absolute w-full">
              <ResultView 
                markdown={conversionResult.markdown} 
                originalFileName={conversionResult.fileName}
                onReset={() => setConversionResult(null)}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
