import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate()
  const GoToPlaces = () =>{
    navigate('/places')
  }


  const slides = [
    {
      id: 1,
      title: "Conquer the Trails",
      description:
        "Embark on thrilling adventures with our powerful motorbikes, built to conquer rugged terrains. From rocky trails to sandy dunes, experience unmatched performance, agility, and comfort as you embrace the thrill of the open trail.",
      image: "/images/motorbike.jpg",
    },
    {
      id: 2,
      title: "Dominate the Roads",
      description: "Experience the thrill of off-road driving with our powerful cars, built for extreme terrains. Tackle rocky paths, muddy tracks, and steep inclines with ease, enjoying superior performance and unmatched durability on every adventure.",
      image: "/images/car.jpeg",
    },
    {
      id: 3,
      title: "Hike to New Heights",
      description:
        "Prepare for your next hiking adventure with our premium equipment. Designed for durability and comfort, our gear ensures you're ready to conquer any trail and embrace the beauty of the great outdoors.",
      image: "/images/mlongonot.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen flex items-start  justify-center bg-yellow-50 overflow-hidden">
      {/* left text section */}
      <div className="flex-1 flex justify-start items-start mt-20  px-10 py-10 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl font-bold space-x-2 text-yellow-400 mb-2 ">A <span className="text-yellow-800">dventure</span></h1>
            <h1 className="text-3xl md:text-2xl font-bold font-sans text-yellow-600 ">
              {slides[currentIndex].title}
            </h1>
            <p className="mt-2 text-sm  md:text-lg text-gray-600">
              {slides[currentIndex].description}
            </p>
            <button 
            onClick={GoToPlaces}
            className="px-5 py-2 bg-yellow-400 font-bold text-white hover:text-black rounded-lg mt-3 hover:bg-transparent border border-yellow-400
            ">Explore</button>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* right image section */}
      <div className="flex-1 flex items-center mt-24 justify-center overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].image}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-[700px] h-auto max-w-lg shadow-xl rounded-lg object-cover"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.2, rotate: 3 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute inset-0 border-4 border-yellow-500 rounded-lg -z-10"
            ></motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Hero;
