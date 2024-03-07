'use client';

import { CarCardProps, CarProps } from '@/types';
import { CustomButton } from '.';
import { useState } from 'react';
import Image from 'next/image';
import { calculateCarRent } from '@/utils';

const CarCard = ({
  model,
  make,
  mpg,
  transmission,
  year,
  drive,
  cityMPG,
}: CarCardProps) => {
  const rentalPrice = calculateCarRent(cityMPG, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>

        <p className="flex mt-6 text-[32px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">
            $
          </span>
          {rentalPrice}
          <span className="self-end text-[14px] font-medium">
            /day
          </span>
        </p>
      </div>

      {mpg}
      {transmission}
      {year}
      {drive}
      {cityMPG}
    </div>
  );
};

export default CarCard;
