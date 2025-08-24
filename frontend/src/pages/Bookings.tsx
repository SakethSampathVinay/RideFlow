import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Bookings = () => {
  const { bookings } = useAuth();

  if (!bookings || bookings.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Manage Bookings
        </h1>
        <p className="">View and manage your all car bookings</p>
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            No Bookings Found
          </h2>
          <p className="mt-2 text-gray-500">
            There are currently no active or past reservations.
          </p>
          <Link
            to="/cars"
            className="mt-6 inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Cars
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US");

  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Manage Bookings
            </h1>
            <p className="text-gray-500">
              View and manage your all car bookings
            </p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
            {bookings.length} Total Bookings
          </span>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="hidden md:grid md:grid-cols-6 gap-4 p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg font-bold text-gray-600 text-sm">
            <div className="col-span-2">Car Details</div>
            <div>Pickup Date</div>
            <div>Return Date</div>
            <div className="text-center">Status</div>
            <div className="text-center">Total Amount</div>
          </div>

          <ul className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <li
                key={booking.id}
                className="p-4 grid grid-cols-1 md:grid-cols-6 gap-4 items-center"
              >
                <div className="md:col-span-2 flex items-center gap-4">
                  <img
                    src={booking.car?.image}
                    alt={booking.car?.brand}
                    className="w-24 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-bold text-gray-900">
                      {booking.car?.brand} {booking.car?.model}
                    </h2>
                    <p className="text-sm text-gray-500">{booking.car?.year}</p>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700 md:hidden">
                    Pickup:{" "}
                  </span>
                  <span>{formatDate(booking.pickupDate)}</span>
                </div>

                <div>
                  <span className="font-bold text-gray-700 md:hidden">
                    Return:{" "}
                  </span>
                  <span>{formatDate(booking.returnDate)}</span>
                </div>

                <div className="text-left md:text-center">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyles(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="text-left md:text-center">
                    <span className="font-bold text-gray-700">
                      ${booking.totalAmount}
                    </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
