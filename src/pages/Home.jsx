import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()

    const  GoToPlaces = () => {
        navigate('/places')
    }
  return (
    <div className="relative h-1/2 bg-cover bg-center bg-[url('/images/home.jpg')] flex justify-center text-center text-white">
      <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold text-yellow-300 mb-4">
          Explore the world
        </h1>
        <p className="text-xl font-medium mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          autem eum non, tempora facilis sunt accusamus ipsa ex iste aperiam
          beatae asperiores omnis ea fugiat voluptate soluta cumque blanditiis?
        </p>
        <button
        onClick={GoToPlaces}
         className="px-6 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">
            Start Your journey
        </button>
      </div>
    </div>
  );
};
export default Home;
