"use client";

import { ReactNode } from "react";
import { colors } from "@wecando/themes";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  const colorTest = colors.palette.yellow[500];
  return (
    <button className={className}>
      {children}
      <span style={{ color: colorTest }}> colorTest</span>
    </button>
  );
};
