import React, { useState } from "react";
import ImagePreviewModal from "./ImagePreviewModal ";
import AddFieldNoteModal from "./AddFieldNoteModal";

const FieldOfficerComments = () => {
  const [isImgOpen, setIsImgOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const handleNotesCloseModal = () => setIsNotesOpen(false);
  return (
    <div className="w-full bg-white rounded-md shadow-sm px-4 py-3 text-sm">
      <div className="text-[#717680] text-sm font-medium mb-2">
        Field Officer Comments
      </div>
      <div className="flex flex-wrap justify-between items-center">
        {/* Comment Info */}
        <div className="flex flex-wrap gap-8 text-gray-800">
          <div>
            <div className="text-[#717680] text-sm font-medium">Last Visit</div>
            <div className="text-[#181D27] text-md font-medium">
              Amol Sargar - 21 June
            </div>
          </div>
          <div>
            <div className="text-[#717680] text-sm font-medium">Notes</div>
            <div className="text-[#181D27] text-md font-medium">
              Delay due to wet field access
            </div>
          </div>
          <div>
            <div className="text-[#717680] text-sm font-medium">Next Visit</div>
            <div className="text-[#181D27] text-md font-medium">
              24 June <span className="text-gray-500">(Tentative)</span>
            </div>
          </div>
          <div>
            <div className="text-[#717680] text-sm font-medium">
              Attachments
            </div>
            <div className="flex items-center gap-1 text-[#181D27] text-md font-medium">
              <img
                src="/images/FileIcon.svg"
                alt="FileIcon"
                onClick={() => setIsImgOpen(true)}
              />
              <span>24 June (Tentative)</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-0.5 mt-4 sm:mt-0 shadow-sm text-[#414651] font-bold">
          <button
            className="px-4 py-1.5 border border-[#D5D7DA] rounded-l hover:bg-gray-100"
            onClick={() => setIsNotesOpen(true)}
          >
            Add Note
          </button>
          <button className="px-4 py-1.5 border border-[#D5D7DA] border-l-0 rounded-r hover:bg-gray-100">
            Acknowledge
          </button>
        </div>
      </div>
      {isImgOpen && (
        <ImagePreviewModal
          imageUrl={
            "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/YEGVFNBR5ZIJTPY6BWUR4R2P2E.jpg"
          }
        />
      )}
    {isNotesOpen && (
  <AddFieldNoteModal
    isNotesOpen={isNotesOpen}
    onClose={handleNotesCloseModal}
  />
)}
    </div>
  );
};

export default FieldOfficerComments;
