import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const Home = () => {
  const bannerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    bannerRefs.current.forEach((banner) => {
      if (banner) observer.observe(banner);
    });

    return () => {
      bannerRefs.current.forEach((banner) => {
        if (banner) observer.unobserve(banner);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-y-auto">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-8">
        {/* Title */}
        <h1 className="text-white text-4xl font-bold mb-8">Jadwal Training</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {/* Banner 1 - Link to /ikhtiarumrah */}
          <div
            ref={(el) => (bannerRefs.current[0] = el)}
            className="flex items-center justify-center fade-in"
          >
            <Link to="/ikhtiarumrah" className="flex flex-col items-center">
              <img
                src={banner1}
                alt="Banner 1"
                className="w-full aspect-[0.748] object-fill rounded-lg"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4">
                <b>Klik Detail</b>
              </button>
            </Link>
          </div>

          {/* Banner 2 - Link to /taawun */}
          <div
            ref={(el) => (bannerRefs.current[1] = el)}
            className="flex items-center justify-center fade-in"
          >
            <Link to="/taawun" className="flex flex-col items-center">
              <img
                src={banner2}
                alt="Banner 2"
                className="w-full aspect-[0.748] object-fill rounded-lg"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4">
                <b>Klik Detail</b>
              </button>
            </Link>
          </div>

          {/* Banner 3 - Link to /ikhtiarpro */}
          <div
            ref={(el) => (bannerRefs.current[2] = el)}
            className="flex items-center justify-center fade-in"
          >
            <Link to="/ikhtiarpro" className="flex flex-col items-center">
              <img
                src={banner3}
                alt="Banner 3"
                className="w-full aspect-[0.748] object-fill rounded-lg"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4">
                <b>Klik Detail</b>
              </button>
            </Link>
          </div>

          {/* Banner 4 - Link to /syiarikhtiarumrah */}
          <div
            ref={(el) => (bannerRefs.current[3] = el)}
            className="flex items-center justify-center fade-in"
          >
            <Link to="/syiarikhtiarumrah" className="flex flex-col items-center">
              <img
                src={banner4}
                alt="Banner 4"
                className="w-full aspect-[0.748] object-fill rounded-lg"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4">
                <b>Klik Detail</b>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;