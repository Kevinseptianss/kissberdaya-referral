/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Form = ({ setIsSubmitted, setPhone }) => {
  const [formData, setFormData] = useState({
    nama: "",
    profesi: "",
    kota: "",
    usia: "",
    phone: "",
    zoom: "Ya", // Default value for Zoom attendance
    kelas: "",
    sumber: "admin", // Default value
  });

  // Function to get URL parameters
  const getUrlParameter = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    // Extract the first part of the path (e.g., "ikhtiarumrah")
    const pathSegment = currentPath.split('/')[1]; // Split by "/" and take the second element
  
    // Update the kelas field in formData
    setFormData((prevData) => ({ ...prevData, kelas: pathSegment }));
  
    // Handle URL parameters (e.g., "id")
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
        "https://script.google.com/macros/s/AKfycbx21noLKfS8u4N6yAZD3aYtpGt-J67wEQeAQURICkZJpU0ACWS9ONdZKWY4loqelXa9vQ/exec",
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
        setPhone(formData.phone);
        setIsSubmitted(true); // Set form as submitted
      } else {
        console.error("Failed to save data to Google Sheets.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
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

        {/* Zoom Class Attendance */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apakah bersedia hadir di kelas zoom?
          </label>
          <div className="mt-2 flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="zoom"
                value="Ya"
                checked={formData.zoom === "Ya"}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Ya</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="zoom"
                value="Tidak"
                checked={formData.zoom === "Tidak"}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Tidak</span>
            </label>
          </div>
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
  );
};

export default Form;