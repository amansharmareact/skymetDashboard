import React from "react";

const ImagePreviewModal = ({ imageUrl, onClose, onDownload }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-[600px] max-w-full overflow-hidden shadow-lg">
        {/* Close button */}
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>
        </div>

        {/* Image */}
        <div className="px-5">
          <img src={imageUrl} alt="Preview" className="w-full rounded-md" />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between p-4 border-t mt-2 gap-2 w-full">
          <button
            onClick={onClose}
            className="px-6 py-2 border w-full rounded-md font-bold border-[#D5D7DA] text-gray-700 hover:bg-gray-100"
          >
            Close
          </button>
          <button
            onClick={onDownload}
            className="px-6 py-2 w-full rounded-md bg-[#4F7A21] font-bold text-white hover:bg-green-800"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
