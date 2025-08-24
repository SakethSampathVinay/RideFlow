import car_image1 from "../assets/car_image1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Luxury Cars on Rent
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Experience the best luxury cars at unbeatable prices. Your dream
              drive is just a click away.
            </p>
            <Link to="/cars">
              <button className="mt-8 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore Cars
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={car_image1}
              alt="Hero Car"
              className="w-full h-auto object-cover drop-shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
