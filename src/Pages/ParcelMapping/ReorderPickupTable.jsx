import React, {useState} from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

const initialParcels = [
    {
        id: "P-108",
        village: "Shirgaon",
        readiness: "85%",
        load: "1.9 T",
        status: "Completed"
    },
    {
        id: "P-114",
        village: "Ambewadi",
        readiness: "75%",
        load: "2.1 T",
        status: "Completed"
    },
    {
        id: "P-121",
        village: "Shahuwadi",
        readiness: "90%",
        load: "1.8 T",
        status: "In Progress"
    },
    {
        id: "P-126",
        village: "Kale",
        readiness: "80%",
        load: "1.6 T",
        status: "Scheduled"
    },
    {
        id: "P-135",
        village: "Padal",
        readiness: "70%",
        load: "1.7 T",
        status: "Scheduled"
    },
    {
        id: "plant",
        village: "Kolhapur Plant",
        readiness: "-",
        load: "-",
        status: "-"
    }
];

const getStatusBadge = (status) => {
    const base = "px-1 py-0.5 text-xs rounded-full font-medium inline-block";
    switch (status) {
        case "Completed":
            return (
                <span className={`${base} bg-[#ECFDF3] border border-[#ABEFC6] text-[#079455]`}>
                    ✅ {status}
                </span>
            );
        case "In Progress":
            return (
                <span className={`${base} bg-[#FEF6EE] border border-[#F7B27A] text-[#E04F16]`}>
                    🔄 {status}
                </span>
            );
        case "Scheduled":
            return (
                <span className={`${base} bg-[#FAFAFA] border border-[#E9EAEB] text-[#414651]`}>
                    ⏳ {status}
                </span>
            );
        default:
            return <span className="text-gray-400">-</span>;
    }
};

// 🎯 Sortable Row Component
const SortableRow = ({parcel}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
        id: parcel.id
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <tr ref={setNodeRef} style={style} {...attributes} {...listeners}
            className="bg-white text-sm border-b border-[#E9EAEB] cursor-move">
            <td className="px-4 py-2">
                <img src="/images/DashIcon.svg" alt="Drag" className="w-[10px] h-[10px]"/>
            </td>
            <td className="px-4 py-2 text-[#535862]">{parcel.id}</td>
            <td className="px-4 py-2 text-[#535862] flex items-center gap-2">
                {parcel.village === "Kolhapur Plant" && (
                    <img src="/images/Factory.svg" alt="Plant" className="w-[20px] h-[20px]"/>
                )}
                {parcel.village}
            </td>
            <td className="px-4 py-2 font-semibold text-[#181D27]">{parcel.readiness}</td>
            <td className="px-4 py-2 text-[#181D27]">{parcel.load}</td>
            <td className="px-4 py-2 text-[#535862]">{getStatusBadge(parcel.status)}</td>
        </tr>
    );
};

const ReorderPickupTable = () => {
    const [parcels, setParcels] = useState(initialParcels);

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const {active, over} = event;
        if (active.id !== over.id) {
            const oldIndex = parcels.findIndex((p) => p.id === active.id);
            const newIndex = parcels.findIndex((p) => p.id === over.id);
            const updated = arrayMove(parcels, oldIndex, newIndex);
            setParcels(updated);
        }
    };

    return (
        <div className="overflow-hidden rounded-xl shadow border border-[#E9EAEB]">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <table className="min-w-full text-sm text-left bg-white">
                    <thead className="bg-[#FAFAFA] text-[#717680] font-bold text-xs">
                    <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Parcel ID</th>
                        <th className="px-4 py-2">Village</th>
                        <th className="px-4 py-2">Readiness %</th>
                        <th className="px-4 py-2">Est. Tons</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                    </thead>
                    <SortableContext
                        items={parcels.map((p) => p.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <tbody>
                        {parcels.map((parcel) => (
                            <SortableRow key={parcel.id} parcel={parcel}/>
                        ))}
                        </tbody>
                    </SortableContext>
                </table>
            </DndContext>
        </div>
    );
};

export default ReorderPickupTable;
