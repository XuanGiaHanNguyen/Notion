import React from "react";
import { X, Linkedin, Globe, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Contect from "../assets/Contect.png";

function ContactModal({ isOpen, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose(); // Close when clicking background
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-2xl w-[720px] p-6 relative border border-neutral-200"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-5 transition bg-neutral-200 p-1 rounded-full hover:bg-neutral-300"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="p-3">
              <div className="flex flex-row gap-6">
                {/* Left side - Image */}
                <div className="w-1/2 flex justify-center items-center">
                  <img src={Contect} alt="Hero" className="w-90" />
                </div>

                {/* Right side - Contact Items */}
                <div className="w-1/2 space-y-6">
                  <div className="text-2xl font-semibold">Contact Info</div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-neutral-300 rounded">
                      <Linkedin size={20} className="text-neutral-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">
                        LinkedIn
                      </div>
                      <a
                        href="https://www.linkedin.com/in/nxgiahan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 hover:underline"
                      >
                        linkedin.com/in/nxgiahan/
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-neutral-300 rounded">
                      <Mail size={20} className="text-neutral-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">
                        Email
                      </div>
                      <a
                        href="mailto:holliengyen@gmail.com"
                        className="text-sm text-gray-700 hover:underline"
                      >
                        holliengyen@gmail.com
                      </a>
                    </div>
                  </div>

                  <button className="border-2 w-full py-2 rounded-md text-white bg-neutral-700 hover:bg-neutral-800 transition">
                    More on me?
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
