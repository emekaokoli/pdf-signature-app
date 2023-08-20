import { AlertSeverity } from '@/@types/base.type';
import { AnnouncementIcon } from "@/assets";
import { AlertProps } from '@/components/ui/type';
import React from "react";

export type ALertIcon = Record<
  AlertSeverity,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>> & { title?: string | undefined }
>;
const alertIconMapper: ALertIcon = {
  error: AnnouncementIcon,
  info: AnnouncementIcon,
  success: AnnouncementIcon,
  warning: AnnouncementIcon,
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { severity, message, children, ...rest } = props;
  const IconMapper = alertIconMapper[severity || "error"];
  const getAlertColour = () => {
    switch (severity) {
      case "error":
        return {
          bgcolor: "bg-error-50",
          color: "text-error-150",
          border: "border-error-150",
        };
      case "success":
        return {
          bgcolor: "bg-success-50",
          border: "border-success-150",
          color: "text-success-150",
        };
      case "warning":
        return {
          bgcolor: "bg-warning-50",
          border: "border-warning-150",
          color: "text-warning-150",
        };

      default:
        return {
          bgcolor: "bg-error-50",
          border: "border-error-150",
          color: "text-neutral-white",
        };
    }
  };
  return (
    <div
      className={` px-4 py-3 rounded-md flex gap-1 min-w-[200px] border bg-neutral-white text-neutral-white justify-end items-center ${
        getAlertColour().bgcolor
      } ${getAlertColour().border}`}
      role="alert"
      ref={ref}
      {...rest}
    >
      <div className="alert-icon">
        <IconMapper fill={getAlertColour().color} />
      </div>
      <div className={`alert-message flex-1 ${getAlertColour().color}`}>
        {children ? children : message}
      </div>
    </div>
  );
});

Alert.displayName = "Alert";
Alert.defaultProps = {
  severity: "success",
};
