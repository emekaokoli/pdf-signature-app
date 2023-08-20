import { Userprofile } from '@/modules/interface/user-module';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

export type ReactChildren = {
  children: React.ReactNode;
};

export const columns: ColumnDef<Userprofile>[] = [
  {
    accessorKey: 'first_name',
    header: 'First Name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'created_at',
    header: 'Date created',
  },
  {
    accessorKey: 'avatar',
    header: 'Avatar',
  },
  {
    accessorKey: 'bvn',
    header: 'BVN',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'dob',
    header: 'Date of Birth',
  },
  {
    accessorKey: 'drivers_license_no',
    header: "Driver's License No",
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'identity_number',
    header: 'Identity Number',
  },
  {
    accessorKey: 'identity_type',
    header: 'Identity Type',
  },
  {
    accessorKey: 'initials',
    header: 'Initials',
  },
  {
    accessorKey: 'ip_address',
    header: 'IP Address',
  },
  {
    accessorKey: 'is_business',
    header: 'Is Business',
  },
  {
    accessorKey: 'is_online',
    header: 'Is Online',
  },
  {
    accessorKey: 'national_verification',
    header: 'National Verification',
  },
  {
    accessorKey: 'nin',
    header: 'NIN',
  },
  // ... Add more columns as needed
];
