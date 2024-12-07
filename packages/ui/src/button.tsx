"use client";

import { ReactNode } from "react";
import { colors } from "@wecando/themes";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  const test = colors.palette.blue[200];
  console.log(test);
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
      <span style={{ color: test }}>zzzz</span>
    </button>
  );
};
