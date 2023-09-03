"use client";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useCallback } from "react";

interface ControlProps {
    clearCanvas: () => void;
    color: string;
    setColor: (color: string) => void;
}

const colorList = [
    "rgba(255, 213, 90, 0.7)",
    "rgba(90, 255, 213, 0.7)",
    "rgba(213, 90, 255, 0.7)",
];

export default function Canvas() {
    const [color, setColor] = useState("rgba(255, 213, 90, 0.7)");
    const canvasRef = useRef(null);
    const handleClear = useCallback(() => {
        //@ts-ignore
        canvasRef.current.clearCanvas();
    }, []);

    return (
        <>
            <ReactSketchCanvas
                ref={canvasRef}
                canvasColor="transparent"
                width="100%"
                height="100vh"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 5,
                }}
                strokeWidth={5}
                strokeColor={color}
            />
            <div className="fixed right-4 top-[10%] z-50 flex items-center rounded-full bg-neutral-100 p-2 dark:bg-stone-800 md:top-[unset]">
                <div className="flex flex-col space-y-2">
                    {colorList.map((data, key) => (
                        <button
                            onClick={() => setColor(data)}
                            className="h-7 w-7 rounded-full"
                            key={key}
                            style={{ backgroundColor: data }}
                            aria-label="Change brush color"
                        >
                            {data === color && (
                                <CheckCircleIcon className="mx-auto h-5 w-5" />
                            )}
                        </button>
                    ))}
                    <button
                        onClick={handleClear}
                        className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-stone-700"
                        aria-label="Clear doodle"
                    >
                        <TrashIcon className="mx-auto h-5 w-4" />
                    </button>
                </div>
            </div>
        </>
    );
}
