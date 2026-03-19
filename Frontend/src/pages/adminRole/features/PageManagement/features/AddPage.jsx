import React, { useEffect, useMemo, useRef, useState } from "react";

const STATUS_OPTIONS = ["Active", "Inactive"];

export default function AddPage({ onBack, onSave }) {
  const [pageName, setPageName] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const statusRef = useRef(null);

  const canSave = useMemo(() => pageName.trim() && status.trim(), [pageName, status]);

  const handleBack = () => {
    if (typeof onBack === "function") onBack();
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!canSave) return;
    if (typeof onSave === "function") {
      onSave({
        name: pageName.trim(),
        description: description.trim(),
        status: status.trim(),
      });
      return;
    }
    handleBack();
  };

  useEffect(() => {
    if (!isStatusOpen) return;
    const onDocMouseDown = (e) => {
      if (!statusRef.current) return;
      if (!statusRef.current.contains(e.target)) setIsStatusOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [isStatusOpen]);

  return (
    <div
      data-layer="Main Content"
      className="MainContent w-full self-stretch inline-flex flex-col justify-start items-start overflow-hidden"
    >
      <div data-layer="Frame 1597884178" className="Frame1597884178 w-full flex flex-col justify-start items-start gap-5">
        <button
          type="button"
          onClick={handleBack}
          data-layer="Button"
          className="Button h-10 inline-flex items-center gap-3 text-gray-500 hover:text-gray-700"
        >
          <span data-svg-wrapper data-layer="Icon" className="Icon">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.09775 12.8186L3.375 8.0958L8.09775 3.37305"
                stroke="currentColor"
                strokeWidth="1.34936"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.8205 8.0957H3.375"
                stroke="currentColor"
                strokeWidth="1.34936"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            data-layer="Back to Page Management"
            className="BackToPageManagement text-center text-base font-medium font-['Inter'] leading-6"
          >
            Back to Page Management
          </span>
        </button>

        <form
          onSubmit={handleSave}
          data-layer="Container"
          className="Container w-full px-4 sm:px-8 pt-8 pb-[1.30px] bg-white rounded-2xl outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-100 flex flex-col justify-start items-start gap-8"
        >
          <div data-layer="Heading 1" className="Heading1 w-full">
            <div data-layer="Add Page" className="AddPage text-slate-900 text-2xl font-semibold font-['Inter'] leading-9">
              Add Page
            </div>
          </div>

          <div data-layer="Container" className="Container w-full flex flex-col justify-start items-start gap-6">
            <div data-layer="Container" className="Container w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div data-layer="Container" className="Container inline-flex flex-col justify-start items-start gap-2">
                <div data-layer="Label" className="Label inline-flex items-center gap-1 text-slate-900 text-sm font-medium font-['Inter'] leading-5">
                  <span>Page Name</span>
                  <span className="text-red-500">*</span>
                </div>
                <div
                  data-layer="Text Input"
                  className="TextInput w-full h-12 px-4 py-3 rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 inline-flex justify-start items-center overflow-hidden focus-within:outline-cyan-900/30"
                >
                  <input
                    value={pageName}
                    onChange={(e) => setPageName(e.target.value)}
                    placeholder="Enter page name"
                    className="w-full bg-transparent text-base font-normal font-['Inter'] text-neutral-950 placeholder:text-neutral-950/50 outline-none"
                  />
                </div>
              </div>

              <div data-layer="Container" className="Container inline-flex flex-col justify-start items-start gap-2">
                <div data-layer="Label" className="Label inline-flex items-center gap-1 text-slate-900 text-sm font-medium font-['Inter'] leading-5">
                  <span>Status</span>
                  <span className="text-red-500">*</span>
                </div>
                <div ref={statusRef} className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setIsStatusOpen((v) => !v)}
                    className="w-full h-12 px-4 pr-10 rounded-[10px] bg-white outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 text-base font-normal font-['Inter'] text-left focus:outline-cyan-900/30"
                  >
                    <span className={status ? "text-neutral-950" : "text-neutral-950/50"}>
                      {status || "Select Status"}
                    </span>
                    <span data-svg-wrapper className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600/70">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.37629 7.37629C7.18876 7.56376 6.93445 7.66907 6.66929 7.66907C6.40412 7.66907 6.14982 7.56376 5.96229 7.37629L0.305288 1.71929C0.209778 1.62704 0.133596 1.5167 0.0811869 1.39469C0.0287779 1.27269 0.00119157 1.14147 3.77564e-05 1.00869C-0.00111606 0.87591 0.0241859 0.744231 0.0744668 0.621335C0.124748 0.498438 0.199001 0.386786 0.292893 0.292893C0.386786 0.199 0.498438 0.124747 0.621334 0.0744663C0.744231 0.0241854 0.87591 -0.00111606 1.00869 3.77571e-05C1.14147 0.00119157 1.27269 0.0287779 1.39469 0.0811869C1.5167 0.133596 1.62704 0.209778 1.71929 0.305288L6.66929 5.25529L11.6193 0.305288C11.8079 0.12313 12.0605 0.0223355 12.3227 0.0246139C12.5849 0.0268924 12.8357 0.132061 13.0211 0.317469C13.2065 0.502877 13.3117 0.75369 13.314 1.01589C13.3162 1.27808 13.2154 1.53069 13.0333 1.71929L7.37629 7.37629Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  </button>

                  {isStatusOpen && (
                    <div
                      data-layer="Frame 1597884135"
                      className="Frame1597884135 absolute top-full left-0 z-20 mt-2 w-56 max-w-full max-h-72 overflow-auto p-3 bg-white rounded-[20px] shadow-lg outline outline-1 outline-gray-100 inline-flex justify-start items-center gap-2.5"
                    >
                      <div
                        data-layer="Frame 1597884130"
                        className="Frame1597884130 flex-1 inline-flex flex-col justify-start items-start gap-3.5"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setStatus("");
                            setIsStatusOpen(false);
                          }}
                          data-layer="Select status"
                          className="SelectStatus w-full text-left text-neutral-950 text-base font-normal font-['Inter'] hover:bg-gray-50 rounded-lg px-2 py-1"
                        >
                          Select status
                        </button>
                        {STATUS_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setStatus(opt);
                              setIsStatusOpen(false);
                            }}
                            data-layer={opt}
                            className="w-full text-left text-neutral-950/50 text-base font-normal font-['Inter'] hover:text-neutral-950 hover:bg-gray-50 rounded-lg px-2 py-1"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div data-layer="Container" className="Container w-full flex flex-col justify-start items-start gap-2">
              <div data-layer="Label" className="Label w-full text-slate-900 text-sm font-medium font-['Inter'] leading-5">
                Page Description
              </div>
              <div
                data-layer="Text Area"
                className="TextArea w-full min-h-64 px-4 py-3 rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 inline-flex justify-start items-start overflow-hidden focus-within:outline-cyan-900/30"
              >
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter page description..."
                  className="w-full min-h-56 resize-y bg-transparent text-sm font-normal font-['Inter'] text-neutral-950 placeholder:text-neutral-950/50 outline-none leading-5"
                />
              </div>
              <div data-layer="Paragraph" className="Paragraph w-full text-gray-600 text-xs font-normal font-['Inter'] leading-4">
                You can use HTML tags for formatting
              </div>
            </div>

            <div data-layer="Container" className="Container w-full inline-flex flex-wrap justify-start items-center gap-4">
              <button
                type="submit"
                data-layer="Button"
                disabled={!canSave}
                className="Button w-32 h-11 bg-cyan-900 rounded-[10px] inline-flex items-center justify-center text-white text-base font-medium font-['Inter'] leading-6 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-800"
              >
                Save Page
              </button>
              <button
                type="button"
                onClick={handleBack}
                data-layer="Button"
                className="Button w-24 h-11 rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 inline-flex justify-center items-center gap-2.5 text-gray-600 text-base font-medium font-['Inter'] leading-6 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
