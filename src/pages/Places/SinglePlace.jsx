import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data";

const SinglePlace = () => {
  const { id } = useParams();
  const place = data.find((item) => item.id === id);

  if (!place) return <h2 className="text-center text-red-500">Place not found</h2>;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      {/* Image */}
      <div className="relative">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <h1 className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-2xl font-bold px-4 py-2 rounded-md">
          {place.title}
        </h1>
      </div>

      {/* Location and Dates */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600 text-lg">
          📍 <span className="font-semibold">{place.location}</span>
        </p>
        <p className="text-gray-500 text-sm">
          📅 {place.startDate} - {place.endDate}
        </p>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700 leading-relaxed">{place.description}</p>

      {/* Google Maps Button */}
      <div className="mt-6">
        <a
          href={place.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 cursor-pointer transition"
        >
          View on Google Maps 🌍
        </a>
      </div>
    </div>
  );
};

export default SinglePlace;
