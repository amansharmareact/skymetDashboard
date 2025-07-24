import { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";

const RouteCardPortal = ({ anchorRef, children }) => {
    const [position, setPosition] = useState(null);

    useLayoutEffect(() => {
        if (anchorRef?.current) {
            const rect = anchorRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY - 180, // add spacing
                left: rect.left + window.scrollX + rect.width / 2,
            });
        }
    }, [anchorRef]);

    if (!position) return null;

    return ReactDOM.createPortal(
        <div
            className="absolute z-[9999] w-[380px] -translate-x-1/2"
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
            }}
        >
            {children}
        </div>,
        document.body
    );
};

export default RouteCardPortal;
