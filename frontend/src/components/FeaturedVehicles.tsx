import { dummyCarData } from "../assets/assets";
import { HiUserGroup, HiCog } from "react-icons/hi";
import { BsFuelPumpFill } from "react-icons/bs";

const FeaturedVehicles = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Our Fleet
          </h2>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Featured Vehicles
          </h1>
          {/* Small improvement: Added margin-top for consistent spacing */}
          <p className="mt-4 text-gray-600">
            Explore our selection of premium vehicles available for your next
            adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyCarData.slice(0, 3).map((car) => (
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
                  <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-700">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered "Explore All" button container */}
        <div className="mt-16 text-center">
          <button className="border-2 border-gray-800 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-gray-800 hover:text-white">
            Explore All Cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVehicles;
