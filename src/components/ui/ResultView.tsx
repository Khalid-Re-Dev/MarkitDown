import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, RefreshCw, FileText } from 'lucide-react';

interface ResultViewProps {
  markdown: string;
  originalFileName: string;
  onReset: () => void;
}

export function ResultView({ markdown, originalFileName, onReset }: ResultViewProps) {
  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    const baseName = originalFileName.includes('.') 
      ? originalFileName.substring(0, originalFileName.lastIndexOf('.'))
      : originalFileName;
      
    a.download = `${baseName}-converted.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex w-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-500">
        <CheckCircle size={40} />
      </div>
      
      <h3 className="mb-2 text-xl font-semibold text-slate-800">
        Conversion Successful!
      </h3>
      <p className="mb-8 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
        <FileText size={16} />
        {originalFileName}
      </p>
      
      <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
        <button
          onClick={onReset}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
        >
          <RefreshCw size={18} />
          Convert Another File
        </button>
        <button
          onClick={handleDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
        >
          <Download size={18} />
          Download
        </button>
      </div>
    </motion.div>
  );
}
