import { useState, useEffect } from "react";
import background from "./assets/background.jpg";

function App() {
  const [formData, setFormData] = useState({
    nama: "",
    profesi: "",
    kota: "",
    usia: "",
    phone: "",
    sumber: "admin", // Default value
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [isCopied, setIsCopied] = useState(false); // State to track if URL is copied

  // Function to get URL parameters
  const getUrlParameter = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const sumberParam = getUrlParameter("id");
    if (sumberParam) {
      setFormData((prevData) => ({ ...prevData, sumber: sumberParam }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert formData to URL-encoded format
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxzTOFTSNvDjOJI8TZJKChNhqxuXBzLv0jgauf7dtBBAV3iPaeOcP-O9oD1kfXVFSiSnQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedData,
        }
      );

      if (response.ok) {
        console.log("Data saved to Google Sheets!");
        setIsSubmitted(true); // Set form as submitted
      } else {
        console.error("Failed to save data to Google Sheets.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Get the current domain dynamically
  const currentDomain = window.location.hostname;

  // Function to copy the URL to clipboard
  const copyToClipboard = () => {
    const url = `https://${currentDomain}/form?id=${formData.phone}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsCopied(true); // Set copied state to true
        setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

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
        <div className="flex flex-col items-center justify-center p-8">
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">
            MALAM INI!
            <br />
            GRATIS Umrah & Haji 2026
          </h1>

          {/* Subheading */}
          <h4 className="text-white text-xl md:text-2xl text-center mb-6">
            💰 Cukup menabung cerdas Rp10.000/hari
          </h4>

          {/* Highlighted Section */}
          <div className="bg-yellow-500 p-4 rounded-lg shadow-lg mb-6">
            <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
              � WAJIB HADIR!
              <br />
              ZOOMINAR PROGRAM PERCEPATAN
              <br />
              UMRAH & HAJI 2025-2026
            </h1>
          </div>

          {/* Why Section */}
          <div className="text-white text-lg md:text-xl text-center mb-6">
            <p className="font-bold mb-4">*Kenapa Harus Percepatan?*</p>
            <ul className="list-disc list-inside space-y-2">
              <li>❗ Biaya Haji naik setiap tahun</li>
              <li>❗ Masa tunggu 20-40 tahun</li>
              <li>❗ Wacana pembatasan usia Haji</li>
            </ul>
          </div>

          {/* Solution Section */}
          <div className="text-white text-lg md:text-xl text-center mb-6">
            <p className="font-bold mb-4">
              💡 *Solusinya?* Hadir & Pahami caranya‼
            </p>
          </div>

          {/* Event Details */}
          <div className="text-white text-lg md:text-xl text-center mb-6">
            <p className="font-bold mb-2">📅 *MALAM INI*</p>
            <p className="mb-2">⏰ *20.00 - 21.15 WIB*</p>
            < p className="mb-4">
              📌 *Topik:* Cara Baru Agar Bisa Ke Baitullah dgn Menabung
              10rb/hari
            </p>
            <a
              href="https://us06web.zoom.us/j/86046374648?pwd=9VqYKlFpOgDg1GHwyT5t05wWDclPSa.1"
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 *Link Zoom*
            </a>
            <p className="mt-2">Meeting ID: 860 4637 4648</p>
            <p>Passcode: 396104</p>
          </div>

          {/* Quote Section */}
          <div className="text-white text-lg md:text-xl text-center mb-6">
            <p className="italic mb-4">
              Jika belum mampu berangkat Umrah, pastikan orang lain Umrah
              karena kamu. Insya Allah, Baitullah akan merindukan namamu...
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-white text-2xl md:text-3xl font-bold text-center">
            <p>🕋 *Bismillah Ke BAITULLAH 2025!*</p>
            <p>🇮🇩 *Lets Go INDONESIA BERDAYA!*</p>
          </div>
        </div>

        {/* Conditional Rendering based on form submission */}
        {!isSubmitted ? (
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-8">
            <h1 className="text-2xl font-bold text-center mb-6">
              Formulir Registrasi
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama */}
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              {/* Profesi */}
              <div>
                <label
                  htmlFor="profesi"
                  className="block text-sm font-medium text-gray-700"
                >
                  Profesi
                </label>
                <input
                  type="text"
                  id="profesi"
                  name="profesi"
                  value={formData.profesi}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan profesi"
                  required
                />
              </div>

              {/* Kota */}
              <div>
                <label
                  htmlFor="kota"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kota
                </label>
                <input
                  type="text"
                  id="kota"
                  name="kota"
                  value={formData.kota}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan kota"
                  required
                />
              </div>

              {/* Usia */}
              <div>
                <label
                  htmlFor="usia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Usia
                </label>
                <input
                  type="number"
                  id="usia"
                  name="usia"
                  value={formData.usia}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan usia"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nomor telepon"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-8 text-center">
            <h1 className="text-2xl font-bold text-center mb-6">
              Terima kasih telah mendaftar!
            </h1>
            <p className="text-lg mb-4">
              Silakan bagikan link ini:{" "}
              <a
                href={`https://${currentDomain}/form?id=${formData.phone}`}
                className="text-blue-500 underline"
              >
                https://{currentDomain}/form?id={formData.phone}
              </a>
            </p>
            <button
              onClick={copyToClipboard}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {isCopied ? "Tersalin!" : "Bagikan Link"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;