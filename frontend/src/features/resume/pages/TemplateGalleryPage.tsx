import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import TemplateGallery from '../components/TemplateGallery';

export default function TemplateGalleryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-white">Resume Templates</h1>
                <p className="text-sm text-slate-400 mt-1">Choose from our collection of professional templates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TemplateGallery
          apiMode={true}
          onSelect={(templateId) => {
            // Handle template selection - navigate to builder or show more details
            console.log('Selected template:', templateId);
          }}
        />
      </div>
    </div>
  );
}
