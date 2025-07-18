import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddFieldNoteModal = ({ isNotesOpen }) => {
  const [noteType, setNoteType] = useState("Visit Note");
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      {/* Trigger Button */}
      {/* Modal */}
      {isNotesOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative">
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-gray-500 hover:text-black">
              <IoClose size={22} />
            </button>

            {/* Header */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-[#181D27]">
                <img src="/images/Notes.svg" alt="Notes" /> Add Field Note
              </h2>
              <p className="text-sm text-[#535862] mt-1">
                Log your latest visit updates
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-[#414651] mb-1 font-medium">
                  Officer Name
                </label>
                <input
                  type="text"
                  placeholder="Jayesh Patil (autofill or manual)"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-[#414651] mb-1 font-medium">
                  Visit Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  defaultValue="2025-01-10"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 text-sm">
                <div className="">
                  <label className="block text-[#414651] mb-1 font-medium">
                    Parcel / Village
                  </label>
                  <input
                    type="text"
                    placeholder="#P-109 – Shirgaon (auto or Manual)"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-[#414651] mb-1 font-medium">
                  Note Type:
                </label>
                <div className="flex gap-4">
                  {["Visit Note", "Reschedule Note", "Risk Flag"].map(
                    (type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 text-[#414651] w-full"
                      >
                        <input
                          type="radio"
                          name="noteType"
                          value={type}
                          checked={noteType === type}
                          onChange={() => setNoteType(type)}
                        />
                        {type}
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-2">
              <label className="flex items-center text-[#414651] mb-1 font-medium text-sm">
                <span>Note Description</span>
                <span>
                  <img
                    src="/images/HelpIcon.svg"
                    alt="HelpIcon"
                    className="ml-1"
                  />
                </span>
              </label>
              <textarea
                rows={4}
                placeholder="e.g. Joined Stripe's Customer Success team..."
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            {/* File Upload */}
            <div className="my-4 border border-[#E9EAEB] rounded-xl p-4 text-center">
              <label className="cursor-pointer text-green-600 font-medium">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src="/images/FileUpload.svg"
                    alt="FileUpload"
                    width="40px"
                    height="40px"
                  />
                  <div className="w-full">
                    <span className="text-[#3F621A]">Click to upload</span>{" "}
                    <span className="text-[#535862]">or drag and drop</span>
                  </div>
                  <span className="text-xs text-[#535862]">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>
            </div>

            {file && (
              <div className="bg-green-50 text-green-800 px-4 py-2 rounded-md text-sm flex justify-between items-center">
                <span>
                  {file.name} - {(file.size / 1024).toFixed(0)} KB - ✅ Complete
                </span>
              </div>
            )}

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                <div className="text-[#414651]">Time Stamp:</div>{" "}
                <div className="text-[#414651] font-bold text-sm">
                  21/08/2025 14:23
                </div>
              </p>
              <button className="bg-[#4F7A21] w-[469px] h-[40px] font-bold text-sm text-white px-6 py-2 rounded-md">
                Add Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFieldNoteModal;
