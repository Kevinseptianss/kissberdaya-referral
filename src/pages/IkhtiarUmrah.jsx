import { useState } from "react";
import background from "../assets/background.jpg";
import image from "../assets/banner1.jpg";
import Terimakasih from "../components/Terimakasih";
import Title from "../components/Title";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const IkhtiarUmrah = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isCopied, setIsCopied] = useState(false); // State to track if URL is copied

  const tanggalOptions = ["2023-10-01", "2023-10-02", "2023-10-03"];
  const jamOptions = ["09:00", "12:00", "15:00"];

  return (
    <div className="relative min-h-screen overflow-y-auto">
      {/* Centered "JADWAL TRAINING" Heading with Link */}
      <div className="text-center py-4">
        <Link
          to="/"
          className="text-white text-4xl font-bold"
        >
          JADWAL TRAINING
        </Link>
      </div>

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
      <div className="relative z-10 flex items-center justify-center flex-col py-8">
        <Title image={image} />
        {/* Conditional Rendering based on form submission */}
        {!isSubmitted ? (
          <Form
            setIsSubmitted={setIsSubmitted}
            setPhone={setPhone}
            tanggalOptions={tanggalOptions}
            jamOptions={jamOptions}
            setName={setName}
          />
        ) : (
          <Terimakasih
            setIsCopied={setIsCopied}
            phone={phone}
            isCopied={isCopied}
            name={name}
          />
        )}
      </div>
    </div>
  );
};

export default IkhtiarUmrah;
