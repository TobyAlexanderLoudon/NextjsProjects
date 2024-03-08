import CustomButton from './CustomButton';
import { CustomFilter, SearchBar, ShowMore } from '.';
import { fetchCars } from '@/utils';
import CarCard from './CarCard';
import { HomeProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';

const CarCatalogue = async ({ searchParams }: HomeProps) => {
  const filters = {
    manufacturer: searchParams?.manufacturer || 'ford',
    model: searchParams?.model || '',
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || '',
    limit: searchParams?.limit || 10,
  };

  const cars = await fetchCars(filters);
  const isCarsEmpty = cars.length === 0 || !Array.isArray(cars) || !cars;

  return (
    <div id="discover" className="mt-12 padding-x padding-y max-width">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      {!isCarsEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {cars.map((car) => (
              <CarCard car={car} />
            ))}
          </div>

          <ShowMore
            pageNumber={searchParams.limit || 10 / 10}
            isNext={(searchParams.limit || 10) > cars.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-t1 font-bold">Oops, no results!</h2>
          <p>{cars?.message}</p>
        </div>
      )}
    </div>
  );
};

export default CarCatalogue;
