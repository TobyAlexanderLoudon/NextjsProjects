import { CarProps, FilterProps } from '@/types';

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// export async function fetchCars(filters: FilterProps) {
export async function fetchCars() {
  //   const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    'X-Api-Key': 'rGHKI9kM9sZ9hubyx8coGw==p0414wva9mXlf4Sj',
  };

  // Set the required headers for the API request
  const response = await fetch(
    // `https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    `https://api.api-ninjas.com/v1/cars?limit=5&model=camry`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  return await response.json();
}
