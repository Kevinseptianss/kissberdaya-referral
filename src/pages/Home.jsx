import { Link } from "react-router-dom"; // Import Link from react-router-dom
import background from "../assets/background.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const Home = () => {
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {/* Banner 1 - Link to /ikhtiarumrah */}
          <div className="flex items-center justify-center">
            <Link to="/ikhtiarumrah">
              <img
                src={banner1}
                alt="Banner 1"
                className="w-full aspect-[0.748] object-fill rounded-lg"
              />
            </Link>
          </div>

          {/* Banner 2 - Link to /taawun */}
          <div className="flex items-center justify-center">
            <Link to="/taawun">
              <img
                src={banner2}
                alt="Banner 2"
                className="w-full aspect-[0.748] object-fill rounded-lg"
              />
            </Link>
          </div>

          {/* Banner 3 - Link to /ikhtiarpro */}
          <div className="flex items-center justify-center">
            <Link to="/ikhtiarpro">
              <img
                src={banner3}
                alt="Banner 3"
                className="w-full aspect-[0.748] object-fill rounded-lg"
              />
            </Link>
          </div>

          {/* Banner 4 - Link to /syiarikhtiarumrah */}
          <div className="flex items-center justify-center">
            <Link to="/syiarikhtiarumrah">
              <img
                src={banner4}
                alt="Banner 4"
                className="w-full aspect-[0.748] object-fill rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;