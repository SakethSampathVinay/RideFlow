import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
      <div className="p-8">
        <h1 className="text-8xl font-bold text-gray-800">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-700">
          Oops! Page Not Found.
        </h2>
        <p className="mt-4 text-gray-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
