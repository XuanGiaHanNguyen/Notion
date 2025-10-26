import React, { useState } from "react";
import { X, Linkedin, Globe, Mail } from "lucide-react";

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-neutral-50 shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-2xl w-[720px] p-6 relative border border-neutral-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 transition bg-neutral-200 p-1 rounded-full hover:bg-neutral-300"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-3">
          <div className="flex items-start mb-4">
            <div className="text-2xl font-semibold text-neutral-900">
              Contact Info
            </div>
          </div>

          <div className="flex flex-row gap-6">
            {/* Left side - Image */}
            <div className="w-1/2">
              <div className="w-full h-64 bg-neutral-300 rounded-lg"></div>
            </div>

            {/* Right side - Contact Items */}
            <div className="w-1/2 space-y-6">
              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-neutral-200 rounded">
                  <Linkedin size={20} className="text-neutral-700" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-neutral-900 mb-1">
                    Your Profile
                  </div>
                  <a
                    href="https://linkedin.com/in/xuangiahannnguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    linkedin.com/in/xuangiahannnguyen
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-neutral-200 rounded">
                  <Globe size={20} className="text-neutral-700" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-neutral-900 mb-1">
                    Website
                  </div>
                  <a
                    href="https://github.com/XuanGiaHanNguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    github.com/XuanGiaHanNguyen
                  </a>
                  <span className="text-sm text-neutral-500 ml-1">(Personal)</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-neutral-200 rounded">
                  <Mail size={20} className="text-neutral-700" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-neutral-900 mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:XuanGiaHanNguyen@gmail.com"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    XuanGiaHanNguyen@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo wrapper
export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
      >
        Show Contact Info
      </button>
      
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}