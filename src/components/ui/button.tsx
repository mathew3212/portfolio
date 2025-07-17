import React from "react";

export const Button = ({ children, className }: any) => {
  return (
    <button className={`transition px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  );
};
