import gmail_logo from "../assets/gmail_logo.svg";
import facebook_logo from "../assets/facebook_logo.svg";
import instagram_logo from "../assets/instagram_logo.svg";
import twitter_logo from "../assets/twitter_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <img
              src="https://res.cloudinary.com/dgtfgihga/image/upload/v1756018783/Screenshot_2025-08-24_122836_pg4krw.png"
              alt="RideFlow Logo"
              className="h-10 object-contain"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Premium car rental service with a wide selection of luxury and
              everyday vehicles for all your driving needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={gmail_logo} alt="Gmail" className="h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={facebook_logo} alt="Facebook" className="h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={instagram_logo} alt="Instagram" className="h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={twitter_logo} alt="Twitter" className="h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Browse Cars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  List Your Car
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Insurance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <p>1234 Luxury Drive</p>
              <p>San Francisco, CA 94107</p>
              <p>+1 234 567 890</p>
              <p>info@rideflow.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 RideFlow. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
