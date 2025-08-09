import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperclip, FaSpinner } from "react-icons/fa";
import { FiUser, FiMail, FiPhone, FiType } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { createContactSubmission } from "@/lib/contentful";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachment, setAttachment] = useState<File | null>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setError(null);
    if (!isOpen) {
      setSubmitSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData(formRef.current!);
      const submissionData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        projectType: formData.get('projectType') as string,
        details: formData.get('details') as string,
        ...(attachment && { attachment })
      };

      await createContactSubmission(submissionData);
      setSubmitSuccess(true);
      formRef.current?.reset();
      setAttachment(null);
    } catch (error) {
      console.error("Submission error:", error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={togglePopup}
        className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold">Contact Me</span>
        <ArrowIcon className="size-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div 
            className="relative bg-gray-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-white hover:text-white transition-colors z-10"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="p-8">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="text-emerald-400 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-serif mb-2 text-white">Thank You!</h3>
                  <p className="text-gray-300">Your message has been sent successfully.</p>
                  <button
                    onClick={togglePopup}
                    className="mt-6 bg-emerald-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-emerald-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-serif mb-2 text-white">
                    Let's work together <span className="text-sky-400">.</span>
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Or reach out our Email: <a href="mailto:softovate.io@gmail.com" className="text-sky-400 hover:underline">softovate.io@gmail.com</a>
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder=" "
                      />
                      <label className="absolute left-3 -top-2 bg-gray-800 px-1 text-sm text-gray-400 pointer-events-none">
                        First Name
                      </label>
                      <FiUser className="absolute left-3 top-3.5 text-gray-400" />
                    </div>

                    <div className="relative">
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder=" "
                      />
                      <label className="absolute left-3 -top-2 bg-gray-800 px-1 text-sm text-gray-400 pointer-events-none">
                        Email
                      </label>
                      <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                    </div>

                    <div className="relative">
                      <input
                        name="phone"
                        type="tel"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder=" "
                      />
                      <label className="absolute left-3 -top-2 bg-gray-800 px-1 text-sm text-gray-400 pointer-events-none">
                        Phone (Optional)
                      </label>
                      <FiPhone className="absolute left-3 top-3.5 text-gray-400" />
                    </div>

                    <div className="relative">
                      <input
                        name="projectType"
                        type="text"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder=" "
                      />
                      <label className="absolute left-3 -top-2 bg-gray-800 px-1 text-sm text-gray-400 pointer-events-none">
                        Project Type
                      </label>
                      <FiType className="absolute left-3 top-3.5 text-gray-400" />
                    </div>

                    <div className="relative">
                      <textarea
                        name="details"
                        required
                        rows={4}
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder=" "
                      ></textarea>
                      <label className="absolute left-3 -top-2 bg-gray-800 px-1 text-sm text-gray-400 pointer-events-none">
                        Project Details
                      </label>
                      <FiMessageSquare className="absolute left-3 top-3.5 text-gray-400" />
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaPaperclip />
                        <span>{attachment ? attachment.name : 'Attach file (optional)'}</span>
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={(e) => setAttachment(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full mt-6 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-sky-500 hover:bg-sky-400 text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupButton;