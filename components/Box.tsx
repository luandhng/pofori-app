"use client";

import { useState } from "react";

interface BoxModel {
  name: string;
}

const Box = ({ name }: BoxModel) => {
  const [checkIn, setCheckIn] = useState(false);

  return (
    <div
      onClick={() => setCheckIn((prev) => !prev)}
      className={`flex ${
        checkIn ? `bg-blue-700` : `bg-neutral-900`
      } cursor-pointer select-none justify-center items-center border border-neutral-800 font-medium text-7xl text-center`}
    >
      {name}
    </div>
  );
};

export default Box;
