import React, { useState } from "react";
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
import { CSS } from "@dnd-kit/utilities";

const initialParcel = [
    {
        id: "P-108",
        village: "Shirgaon",
        readiness: "85%",
        load: "1.9 T",
        alert: "Rain Risk"
    },
    {
        id: "P-114",
        village: "Ambewadi",
        readiness: "75%",
        load: "2.1 T",
        alert: "Rain Risk"
    },
    {
        id: "P-121",
        village: "Shahuwadi",
        readiness: "90%",
        load: "1.8 T",
        alert: "Normal"
    },
    {
        id: "P-126",
        village: "Kale",
        readiness: "80%",
        load: "1.6 T",
        alert: "Normal"
    },
    {
        id: "P-135",
        village: "Padal",
        readiness: "70%",
        load: "1.7 T",
        alert: "Normal"
    },
    {
        id: "plant",
        village: "Kolhapur Plant",
        readiness: "-",
        load: "-",
        alert: "Normal"
    }
];

const getAlertBadge = (alert) => {
    const base = "px-[8px] py-[2px] text-xs rounded-full font-medium inline-block";
    switch (alert) {
        case "Rain Risk":
            return (
                <span className={`${base} bg-[#FFFAEB] border border-[#FEDF89] text-[#B54708]`}>
                    {alert}
                </span>
            );
        case "Normal":
            return (
                <span className={`${base} bg-[#FAFAFA] border border-[#E9EAEB] text-[#000]`}>
                    {alert}
                </span>
            );
        default:
            return <span className="text-gray-400">-</span>;
    }
};

// 🎯 Sortable Row Component
const SortableRow = ({ parcel }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: parcel.id
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <tr ref={setNodeRef} style={style} {...attributes} {...listeners}
            className="bg-white text-sm border-b border-[#E9EAEB] cursor-move">
            <td className="h-[72px] px-4 py-2">
                <img src="/images/DashIcon.svg" alt="Drag" className="w-[10px] h-[10px]" />
            </td>
            <td className="h-[72px] px-4 py-2 text-[#535862]">{parcel.id}</td>
            <td className="h-[72px] px-4 py-2 text-[#535862] flex items-center gap-2">
                {parcel.village === "Kolhapur Plant" && (
                    <img src="/images/Factory.svg" alt="Plant" className="w-[20px] h-[20px]" />
                )}
                {parcel.village}
            </td>
            <td className="h-[72px] px-4 py-2 font-semibold text-[#181D27]">{parcel.readiness}</td>
            <td className="h-[72px] px-4 py-2 text-[#181D27]">{parcel.load}</td>
            <td className="h-[72px] px-4 py-2 text-[#535862]">
                <div className="flex items-center justify-center h-full whitespace-nowrap">
                    {getAlertBadge(parcel.alert)}
                </div>
            </td>
        </tr>
    );
};

const ReorderPickupTableWeather = () => {
    const [parcel, setParcel] = useState(initialParcel);
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = parcel.findIndex((p) => p.id === active.id);
            const newIndex = parcel.findIndex((p) => p.id === over.id);
            const updated = arrayMove(parcel, oldIndex, newIndex);
            setParcel(updated);
        }
    };

    return (
        <div className="h-full rounded-xl shadow border border-[#E9EAEB]">
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
                            <th className="px-4 py-2">Alert</th>
                        </tr>
                    </thead>
                    <SortableContext
                        items={parcel.map((p) => p.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <tbody>
                            {parcel.map((parcel) => (
                                <SortableRow key={parcel.id} parcel={parcel} />
                            ))}
                        </tbody>
                    </SortableContext>
                </table>
            </DndContext>
        </div>
    );
};

export default ReorderPickupTableWeather;
