import React from "react";

export default function PageHead({ heading }) {
  return (
    <div className="flex justify-center mb-10">
      <h2 className="text-zinc-600 text-6xl font-bold font-serif">{heading}</h2>
    </div>
  );
}
