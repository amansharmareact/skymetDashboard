import React from "react";

const UnsavedChangesModal = ({ onUnsavedClose, onSaveDraft, onConfirm }) => {
  return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[99999]">
        <div className="bg-white rounded-xl w-[430px] p-6 relative shadow-lg">
          <button
              onClick={onUnsavedClose}
              className="absolute top-4 right-4 text-[#717680] hover:text-black text-lg"
          >
            ✕
          </button>

          <div className="flex items-start gap-3">
            <div className="min-w-[48px] min-h-[48px] rounded-full bg-[#FEF0C7] flex items-center justify-center">
              <img
                  src="/images/FileSaveIcon.svg"
                  alt="question"
                  className="w-[24px] h-[24px]"
              />
            </div>
            <div>
              <h3 className="text-md font-bold text-[#181D27]">
                Unsaved changes
              </h3>
              <p className="text-sm text-[#535862]">
                Do you want to save or discard changes?
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
                onClick={onSaveDraft}
                className="h-[44px] px-5 text-md font-bold border border-[#D5D7DA] rounded-md"
            >
              Discard
            </button>
            <button
                onClick={onConfirm}
                className="h-[44px] px-4 bg-[#4F7A21] text-white font-bold rounded-md"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
  );
};

export default UnsavedChangesModal;
