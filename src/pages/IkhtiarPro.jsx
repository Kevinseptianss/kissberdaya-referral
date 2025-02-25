import { useState } from "react";
import background from "../assets/background.jpg";
import image from "../assets/banner3.jpg";
import Terimakasih from "../components/Terimakasih";
import Title from "../components/Title";
import Form from "../components/Form";

const IkhtiarUmrah = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [phone, setPhone] = useState("");
  const [isCopied, setIsCopied] = useState(false); // State to track if URL is copied

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
      <div className="relative z-10 flex items-center justify-center flex-col py-8">
        
        <Title image={image} />
        {/* Conditional Rendering based on form submission */}
        {!isSubmitted ? (
          <Form setIsSubmitted={setIsSubmitted} setPhone={setPhone}/>
        ) : (
          <Terimakasih setIsCopied={setIsCopied} phone={phone} isCopied={isCopied} />
        )}
      </div>
    </div>
  );
};

export default IkhtiarUmrah;
