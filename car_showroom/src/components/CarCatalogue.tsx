import CustomButton from './CustomButton';
import { CustomFilter, SearchBar } from '.';
import { fetchCars } from '@/utils';
import CarCard from './CarCard';

const CarCatalogue = async () => {
  const cars = await fetchCars();
  const isCarsEmpty = cars.length === 0 || !Array.isArray(cars) || !cars;

  console.log(cars);

  return (
    <div id="discover" className="mt-12 padding-x padding-y max-width">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={[]} />
          <CustomFilter title="year" options={[]} />
        </div>
      </div>

      {!isCarsEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {cars.map((car) => (
              <CarCard
                model={car.model}
                make={car.make}
                mpg={car.combination_mpg}
                transmission={car.transmission}
                year={car.year}
                drive={car.drive}
                cityMPG={car.city_mpg}
              />
            ))}
          </div>
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
