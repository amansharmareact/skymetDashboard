import React from "react";

const ConfirmTripModal = ({ onClose, onSaveDraft, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center" style={{zIndex:"99999"}}>
      <div className="bg-white rounded-xl w-[430px] p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#717680] hover:text-black"
        >
          ✕
        </button>

        {/* Icon & Message */}
        <div className="flex items-start gap-3">
          <div className="min-w-[48px] min-h-[48px] rounded-full bg-[#FEF0C7] flex items-center justify-center">
            <img
              src="/images/CreateTripIcon.svg"
              alt="question"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div>
            <h3 className="text-md font-bold text-[#181D27]">
              Are you sure?
            </h3>
            <p className="text-sm font-normal text-[#535862]">
              Are you sure you want to create this trip?
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onSaveDraft}
            className="h-[44px] px-4 text-md font-bold border border-[#D5D7DA] rounded-md"
          >
            Save as Draft
          </button>
          <button
            onClick={onConfirm}
            className="h-[44px] px-5 bg-[#4F7A21] shadow-md  text-white text-md font-bold rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTripModal;
