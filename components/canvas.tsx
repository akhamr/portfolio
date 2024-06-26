"use client";
import { IconCheck, IconTrash } from "@/components/ui/icons";
import { useCallback, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const colorList = [
  "rgba(255, 187, 0, 0.6)",
  "rgba(0, 255, 187, 0.6)",
  "rgba(187, 0, 255, 0.6)",
];

// ! framer-motion fixed bug.

export default function Canvas() {
  const [color, setColor] = useState("rgba(255, 187, 0, 0.6)");
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
        style={{
          position: "fixed",
          top: "58px",
          zIndex: 10,
        }}
        strokeWidth={5}
        strokeColor={color}
      />
      <div className="absolute -left-4 top-0 z-20 rounded-full bg-accent p-2 md:left-[unset] md:right-6 md:top-[unset]">
        <div className="flex flex-col space-y-2">
          {colorList.map((data, key) => (
            <button
              onClick={() => setColor(data)}
              className="size-7 rounded-full"
              key={key}
              style={{ backgroundColor: data }}
              aria-label="Change brush color"
            >
              {data === color && <IconCheck className="m-auto size-5" />}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="size-7 rounded-full bg-border"
            aria-label="Clear doodle"
          >
            <IconTrash className="m-auto size-4" />
          </button>
        </div>
      </div>
    </>
  );
}
