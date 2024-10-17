"use client";

import React from "react";

export function useWindowSize() {
    const Window = typeof window !== "undefined" ? window : undefined;
    const [windowSize, setWindowSize] = React.useState(
        Window
            ? { width: Window.innerWidth, height: Window.innerHeight }
            : undefined
    );

    React.useEffect(() => {
        function handleResize() {
            setWindowSize(
                Window
                    ? { width: Window.innerWidth, height: Window.innerHeight }
                    : undefined
            );
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [Window]);

    return windowSize;
}
