// import { IChildren } from "@/@types/baseInterface";
import React from "react";

export interface Alert {
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: "error" | "warning" | "info" | "success";
  message?: string;
}

export interface AlertProps extends Alert, React.DetailsHTMLAttributes<HTMLDivElement> {}
