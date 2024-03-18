import React from "react";

export default function PrimaryButton({ children }) {
  return (
    <div className="font-[Prompt] px-[25px] py-[15px] rounded-xl primary-btn hover:shadow-md">
      {children}
    </div>
  );
}
