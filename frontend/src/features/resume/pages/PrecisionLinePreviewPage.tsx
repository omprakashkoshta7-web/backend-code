import React, { useState } from 'react';
import { Download, Eye, Edit3 } from 'lucide-react';
import PrecisionLineResume from '../components/PrecisionLineResume';
import toast from 'react-hot-toast';

interface ResumeData {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  website?: string;
  summary?: string;
  experience?: any[];
  education?: any[];
  skills?: string[];
  certifications?: any[];
}

export default function PrecisionLinePreviewPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    toast.success('Download feature coming soon!');
  };

  const handleEdit = () => {
    setIsEditing(true);
    toast.success('Redirecting to editor...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Precision Line Template</h1>
              <p className="text-sm text-slate-400 mt-1">Professional & Clean Resume Design</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                Fullscreen
              </button>
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-lg transition-colors"
              >
                <Edit3 className="w-4 h-4" />
                Use Template
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      {!isFullscreen ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="transform scale-[0.8] origin-top" style={{ transformOrigin: 'top' }}>
              <PrecisionLineResume preview={true} />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-80px)] bg-white overflow-auto">
          <PrecisionLineResume preview={true} />
        </div>
      )}
    </div>
  );
}
