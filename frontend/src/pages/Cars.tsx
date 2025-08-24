import { useEffect, useState } from "react";
import search_icon from "../assets/search_icon.svg";
import filter_icon from "../assets/filter_icon.svg";
import { dummyCarData } from "../assets/assets";
import { HiUserGroup, HiCog } from "react-icons/hi";
import { BsFuelPumpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState(dummyCarData);

  const handleSearch = (event: any) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredCars = dummyCarData.filter((car) => {
      return (
        car.brand.toLowerCase().includes(value.toLowerCase()) ||
        car.model.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredCars(filteredCars);
  };

  useEffect(() => {}, [filteredCars]);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Available Cars
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our full selection of premium vehicles. Find the perfect ride
            for your next adventure.
          </p>

          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  src={search_icon}
                  alt="Search"
                  className="h-5 w-5 text-gray-400"
                />
              </div>

              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                placeholder="Search for a car (e.g., BMW X5)"
                className="block w-full pl-10 pr-32 py-3 border border-gray-300 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />

              <button className="absolute inset-y-0 right-0 flex items-center bg-blue-600 text-white font-semibold px-4 m-1.5 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <img src={filter_icon} alt="Filter" className="h-5 w-5 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-56 object-cover"
                />
                {car.isAvailable && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    Available Now
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {car.brand} {car.model}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {car.year} &middot; {car.location}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 flex-grow">
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <HiUserGroup className="text-gray-400" size={20} />
                      <span>{car.seating_capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiCog className="text-gray-400" size={20} />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFuelPumpFill className="text-gray-400" size={18} />
                      <span>{car.fuel_type}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <p className="text-2xl font-bold text-gray-900">
                    ${car.pricePerDay}
                    <span className="text-sm font-normal text-gray-500">
                      /day
                    </span>
                  </p>
                  <Link to={`/cars/${car._id}`}>
                    <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-700">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
