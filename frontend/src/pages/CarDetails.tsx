import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyCarData } from "../assets/assets";
import { HiArrowLeft, HiUserGroup, HiCog } from "react-icons/hi";
import { BsFuelPumpFill } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const CarDetails = () => {
  const { id } = useParams();
  const { addBooking, navigate } = useAuth();

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const car = dummyCarData.find((car) => car._id == id);

  const totalAmount =
    car && typeof car.pricePerDay === "number" && pickupDate && returnDate
      ? car.pricePerDay *
        ((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) /
          (1000 * 60 * 60 * 24))
      : 0;

  const handleBooking = () => {
    if (!pickupDate || !returnDate) {
      alert("Please select both a pickup and a return date.");
      return;
    }
    if (new Date(returnDate) < new Date(pickupDate)) {
      alert("Return date cannot be before the pickup date.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      car: car,
      pickupDate: pickupDate,
      returnDate: returnDate,
      status: "confirmed",
      totalAmount: totalAmount,
    };

    addBooking(newBooking);

    toast.success(`Booking for ${car?.brand} ${car?.model} is confirmed!`);
    navigate("/bookings");
  };

  if (!car) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-gray-800">Car Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the car you're looking for.
        </p>
        <Link
          to="/cars"
          className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to All Cars
        </Link>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          to="/cars"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to All Cars
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {car.brand}
            </h1>
            <p className="mt-1 text-xl text-gray-500">{car.model}</p>
            <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
              <div className="flex items-center gap-2">
                <HiUserGroup className="text-blue-600" size={20} />
                <span>{car.seating_capacity} Seats</span>
              </div>
              <div className="flex items-center gap-2">
                <BsFuelPumpFill className="text-blue-600" size={18} />
                <span>{car.fuel_type}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCog className="text-blue-600" size={20} />
                <span>{car.transmission}</span>
              </div>
            </div>
            <p className="mt-8 text-gray-600 leading-relaxed">
              {car.description}
            </p>
            <div className="mt-10 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <p className="text-3xl font-bold text-gray-900">
                ${car.pricePerDay}
                <span className="text-base font-normal text-gray-500">
                  /day
                </span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <label
                    htmlFor="pickupDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    min={today}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="returnDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Return Date
                  </label>
                  <input
                    type="date"
                    id="returnDate"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={pickupDate || today}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button
                onClick={handleBooking}
                className="cursor-pointer mt-6 w-full bg-blue-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Book Now
              </button>
              <p className="mt-4 text-xs text-gray-500 text-center">
                No credit card required to reserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
