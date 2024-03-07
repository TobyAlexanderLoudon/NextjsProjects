'use client';

import { CustomFilterProps } from '@/types';

const CustomFilter = ({
  title,
}: CustomFilterProps) => {
  return (
    <h1>{title}</h1>
  );
};

export default CustomFilter;
