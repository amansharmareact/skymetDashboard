import { BsCopy } from "react-icons/bs";
import CropReadinessCard from "./CropReadinessCard";

const HarvestStatusCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 space-y-4 text-sm text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs text-gray-500">Last Sync Status</p>
          <p className="text-[13px] font-medium">Location: Shirgaon</p>
        </div>
        <button className="text-gray-400 hover:text-black">✕</button>
      </div>

      {/* Map Image */}
      <div className="flex justify-between items-center">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/mapimage.jpg"
            alt="Map"
            className="w-full h-32 object-cover"
          />
        </div>

        {/* Field Info */}
        <div className="text-xs w-[280px] p-4 rounded-2xl border border-[#ECECED] space-y-3">
          {/* Tag Label */}
          <div className="text-[#717680] font-medium">
            Field/Village Type Tag
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            <span className="text-[#067647] bg-[#ECFDF3] border border-[#ABEFC6] px-3 py-0.5 rounded-md text-sm font-medium">
              Field
            </span>
            <span className="text-[#B93815] bg-[#FEF6EE] border border-[#F9DBAF] px-3 py-0.5 rounded-md text-sm font-medium">
              Village
            </span>
            <span className="text-[#5925DC] bg-[#F4F3FF] border border-[#D9D6FE] px-3 py-0.5 rounded-md text-sm font-medium">
              Cluster
            </span>
          </div>

          {/* Parcel ID */}
          <div className="flex items-center justify-start space-x-2 text-[#717680] font-medium">
            <span>Parcel ID / Village Name</span>
            <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
          </div>
          <div className="text-[#101828] text-lg font-bold leading-tight">
            #Field-128 — Shirgaon
          </div>

          {/* Coordinates */}
          <div className="flex items-center justify-start space-x-2 text-[#717680] font-medium">
            <span>Coordinates</span>
            <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
          </div>
          <div className="text-[#101828] text-lg font-bold leading-tight">
            Lat: 16.69° N Long: 74.23° E
          </div>
        </div>
      </div>
      <div className="text-[#717680] font-bold text-sm ml-2">
        Crop + Harvest Summary:
      </div>
      {/* Crop Harvest Summary */}
      <CropReadinessCard />

      {/* Weather Forecast */}
      <div>
        <p className="text-sm font-medium mb-2">Weather Forecast</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-xs text-gray-500">Thu, 26 June</p>
            <p className="text-yellow-500 text-sm">Sunny</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Fri, 27 June</p>
            <p className="text-orange-500 text-sm">Mod. Rain</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Sat, 28 June</p>
            <p className="text-gray-600 text-sm">Cloudy</p>
          </div>
        </div>
      </div>

      {/* Logistics */}
      <div>
        <p className="text-sm font-medium mb-2">Logistics & Field Activity</p>
        <div className="text-xs space-y-1">
          <p>
            27 June 2025 — Truck-04{" "}
            <span className="text-yellow-600">Pending</span>
          </p>
          <p>Pickup Type: Manual</p>
          <p>
            Expected Load: <b>8.2 Tons (Est.)</b>
          </p>
          <p>Route Distance: 12.5 km from plant</p>
          <p>Travel Time: ~35 mins</p>
        </div>
      </div>

      {/* Past Collection Attempts */}
      <div>
        <p className="text-sm font-medium mb-2">Past Collection Attempts</p>
        <div className="text-xs space-y-1">
          <p>
            25 June — Cancelled (<span className="text-yellow-600">⚠ Rain</span>
            )
          </p>
          <p>3/5 Completed in last 14 days</p>
          <p>
            Skipped Reason: <b>Rainfall, Access Blocked</b>
          </p>
        </div>
      </div>

      {/* Visit Log */}
      <div>
        <p className="text-sm font-medium mb-2">Field Officer Visit Log</p>
        <div className="text-xs space-y-1">
          <p>Last Visit: Amol Sargar — 22 June</p>
          <p>Status: Marked as Ready, Advised Drying Delay</p>
          <p>
            Next Planned Visit: <b>28 June</b> — Not Confirmed
          </p>
          <p>Assigned Officer: Amol Sargar (Zone 3)</p>
        </div>
      </div>

      {/* Notes */}
      <div className="text-xs text-red-600">
        Field access blocked by harvest vehicle — advise reschedule.
      </div>
    </div>
  );
};

export default HarvestStatusCard;
