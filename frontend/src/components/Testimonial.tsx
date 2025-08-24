import React from "react";
import { dummyTestimonialData } from "../assets/assets";

// A quote icon adds a great visual touch to testimonials
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    // Main section container with a light background and padding
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Testimonials
          </h2>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            What Our Customers Say
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from our satisfied clients about their seamless rental
            experiences.
          </p>
        </div>

        {/* Responsive Grid for Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyTestimonialData.map((testimonial) => (
            // Individual Testimonial Card
            <div
              key={testimonial._id}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col"
            >
              {/* Quotation Mark Icon */}
              <div className="text-blue-500 mb-4">
                <FaQuoteLeft size={28} />
              </div>

              {/* Testimonial Text */}
              {/* flex-grow ensures the footer with the author's name aligns to the bottom */}
              <blockquote className="text-gray-700 italic flex-grow">
                "{testimonial.text}"
              </blockquote>

              {/* Author Information */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  // Styles for a circular avatar
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
