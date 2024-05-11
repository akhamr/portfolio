"use client";
import { IconCheck, IconTrash } from "@/components/ui/icons";
import { useCallback, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const colorList = [
  "rgba(255, 187, 0, 0.6)",
  "rgba(0, 255, 187, 0.6)",
  "rgba(187, 0, 255, 0.6)",
];

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
        width="100%"
        height="100%"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 5,
        }}
        strokeWidth={5}
        strokeColor={color}
      />
      <div className="absolute -left-4 top-4 z-10 rounded-full bg-accent p-2 md:left-[unset] md:right-4 md:top-[unset]">
        <div className="flex flex-col space-y-2">
          {colorList.map((data, key) => (
            <button
              onClick={() => setColor(data)}
              className="size-7 rounded-full"
              key={key}
              style={{ backgroundColor: data }}
              aria-label="Change brush color"
            >
              {data === color && <IconCheck className="mx-auto size-5" />}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="size-7 rounded-full bg-border"
            aria-label="Clear doodle"
          >
            <IconTrash className="mx-auto size-4" />
          </button>
        </div>
      </div>
    </>
  );
}
