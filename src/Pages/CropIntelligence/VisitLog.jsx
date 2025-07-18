import React from "react";

const VisitLog = () => {
  return (
    <div className="space-y-2 mt-[10px]">
      <p className="text-[#717680] font-bold text-sm ml-2 mb-2">
        Field Officer Visit Log
      </p>

      <div className="rounded-2xl border border-[#ECECED] px-5 py-4 space-y-4">
        {/* Last Visit By */}
        <div>
          <p className="text-xs text-[#717680] mb-1">Last Visit By</p>
          <p className="text-[18px] font-semibold text-[#414651]">
            Amol Sargar – 22 June
          </p>
        </div>

        {/* Visit Outcome */}
        <div>
          <p className="text-xs text-[#717680] mb-1">Visit Outcome</p>
          <p className="text-[18px] font-semibold text-[#414651]">
            Marked as Ready, Advised Drying Delay
          </p>
        </div>

        {/* Bottom Row */}
      </div>
        <div className="space-y-2">
          <p className="text-[#717680] font-bold text-sm ml-2 mb-2">
            Notes & Special Instructions
          </p>
          <div className="w-full rounded-2xl border border-[#ECECED] px-5 py-4">
            <p className="text-[18px] font-semibold text-[#414651] leading-6 break-words whitespace-normal">
              Field access blocked by harvest vehicle — advise reschedule.
            </p>
          </div>
        </div>
    </div>
  );
};

export default VisitLog;
