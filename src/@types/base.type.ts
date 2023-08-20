import React from 'react';

export type Children = {
  children: React.ReactNode;
};

export type BaseApiSuccess = {
  success: boolean;
  message: string;
};

export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

export interface Snackbar extends Partial<Children> {
  open: boolean;
  onClose?: () => void;
  autoHideDuration?: number;
  message?: string | React.ReactNode;
  action?: React.ReactNode;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right' | 'center';
  };
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: AlertSeverity;
}