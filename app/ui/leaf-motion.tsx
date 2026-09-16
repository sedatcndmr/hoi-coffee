"use client";

import { useState } from "react";

export default function LeafMotion() {
  const [paused, setPaused] = useState(false);

  return <>
    <div className="falling-leaves" aria-hidden="true">
      {["left", "right"].map(side => (
        <div className={`leaf-lane leaf-lane-${side}`} key={side}>
          {[0, 1, 2].map(index => (
            <span className={`falling-leaf falling-leaf-${index}`} key={index}>
              <svg viewBox="0 0 32 40" fill="none" focusable="false">
                <path d="M7 35C-2 17 7 5 26 3c5 17-2 29-19 32Z" fill="currentColor" fillOpacity=".16" stroke="currentColor" strokeWidth="1.1"/>
                <path d="M5 39Q11 19 26 3M12 24l-5-9M16 17l9-2" stroke="currentColor" strokeWidth=".8"/>
              </svg>
            </span>
          ))}
        </div>
      ))}
    </div>
    <button type="button" className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
      Yaprak hareketini durdur
    </button>
  </>;
}
