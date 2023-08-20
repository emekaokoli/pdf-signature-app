import { Snackbar } from "@/@types/base.type";
import React from "react";

export const SnackNoticeBar = (props: Snackbar) => {
  const { open, anchorOrigin, children, autoHideDuration, onClose } = props;
  const getVerticalOrigin = () => {
    switch (anchorOrigin?.vertical) {
      case "top":
        return "top-6";
      case "bottom":
        return "bottom-6";

      default:
        return "top-6";
    }
  };
  React.useEffect(() => {
    if (autoHideDuration) {
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, autoHideDuration);
    }
  }, [autoHideDuration]);

  const getHorizontalPosition = () => {
    switch (anchorOrigin?.horizontal) {
      case "center":
        return "left-2/4 -translate-x-1/2";
      case "left":
        return "left-10 right-auto";
      case "right":
        return "right-10 left-auto";

      default:
        return "left-6 right-auto";
    }
  };

  return (
    <>
      {open && (
        <div
          role="presentation"
          className={`fixed flex z-[1600] justify-end shadow-md bg-neutral-white items-center ${getVerticalOrigin()} ${getHorizontalPosition()}`}
        >
          {children ? (
            children
          ) : (
            <div className="card-root" role="alert">
              help ths e ssee
            </div>
          )}
        </div>
      )}
    </>
  );
};

SnackNoticeBar.defaultProps = {
  anchorOrigin: {
    vertical: "top",
    horizontal: "center",
  },
};