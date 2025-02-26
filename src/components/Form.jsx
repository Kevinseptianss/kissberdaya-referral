/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { sendWhatsAppMessage } from "../utils/utils";

const Form = ({ setIsSubmitted, setPhone, tanggalOptions, jamOptions, setName }) => {
  const [formData, setFormData] = useState({
    nama: "",
    panggilan: "", // New field: Nickname
    email: "", // New field: Email
    profesi: "",
    kota: "",
    usia: "",
    phone: "",
    zoom: "Ya", // Default value for Zoom attendance
    kelas: "",
    tanggal: "", // New field: Date
    jam: "", // New field: Time
    lokasi: "", // New field: Location
    sumber: "admin", // Default value
  });

  const [namaRef, setNamaRef] = useState("");

  const lokasiOptions = ["Zoom", "Offline (Lokasi)"];

  // Function to get URL parameters
  const getUrlParameter = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    // Extract the first part of the path (e.g., "ikhtiarumrah")
    const pathSegment = currentPath.split("/")[1]; // Split by "/" and take the second element

    // Update the kelas field in formData
    setFormData((prevData) => ({ ...prevData, kelas: pathSegment }));

    // Handle URL parameters (e.g., "id")
    const sumberParam = getUrlParameter("id");
    const namaParam = getUrlParameter("nama");
    if (sumberParam) {
      setFormData((prevData) => ({ ...prevData, sumber: sumberParam }));
    }
    if (namaParam) {
        setNamaRef(namaParam);
    } else {
        setNamaRef("admin");
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
        "https://script.google.com/macros/s/AKfycbwF5TvnLoMX3oLodzcIy2gXVNJ8Si63OSpa98YycsHSdzQsxGfBeMQ2oEOKl2ILA9waQA/exec",
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
        const text = `
☪️ *_Assalamualaikum Wr. Wb_*
Selamat *${formData.panggilan}*
Anda sudah terdaftar sebagai peserta *${formData.kelas}*
Dengan data sebagai berikut:

Nama : *${formData.nama}*
Panggilan : *${formData.panggilan}*
No Hp : *${formData.phone}*
Email : *${formData.email}*
Profesi : *${formData.profesi}*
Kota/Kab : *${formData.kota}*

✍️Acara ini *GRATIS* dan akan dilaksanakan:
*🗓️ ${formData.tanggal}*
*🕣Pkl ${formData.jam}*
*🌏${formData.lokasi}*
_[Zoom akan dibagikan H-1 sebelum acara dimulai]_

*${formData.panggilan}* bisa mengikuti dari rumah atau dari manapun
Bisa menggunakan Laptop atau HP Android Kesayangannya,

*Monitor Zoom bisa dari HP atau Laptop/komputer*

*Simpan nomor ini agar link diatas bisa diklik*
        `;
        const phone = formData.phone ? (formData.phone.charAt(0) === '0' ? '62' + formData.phone.slice(1) : formData.phone) : '';
        await sendWhatsAppMessage(text, phone);

        const text2 = `
${namaRef} / ${formData.phone} telah berhasil mengundang :

Nama : *${formData.nama}*
No HP : *${formData.phone}*
Profesi : *${formData.profesi}*
Kota/Kab : *${formData.kota}*

Untuk mengikuti Seminar
*${formData.kelas}*

Terimakasih
        `;
        await sendWhatsAppMessage(text2, "6285109190002");
        setPhone(formData.phone);
        setName(formData.nama);
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
            Nama Lengkap
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

        {/* Nama Panggilan */}
        <div>
          <label
            htmlFor="panggilan"
            className="block text-sm font-medium text-gray-700"
          >
            Nama Panggilan
          </label>
          <input
            type="text"
            id="panggilan"
            name="panggilan"
            value={formData.panggilan}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama panggilan"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan email"
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
            Nomor Telepon
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

        {/* Tanggal */}
        <div>
          <label
            htmlFor="tanggal"
            className="block text-sm font-medium text-gray-700"
          >
            Tanggal
          </label>
          <select
            id="tanggal"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih Tanggal</option>
            {tanggalOptions.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        {/* Jam */}
        <div>
          <label
            htmlFor="jam"
            className="block text-sm font-medium text-gray-700"
          >
            Jam
          </label>
          <select
            id="jam"
            name="jam"
            value={formData.jam}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih Jam</option>
            {jamOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Lokasi */}
        <div>
          <label
            htmlFor="lokasi"
            className="block text-sm font-medium text-gray-700"
          >
            Lokasi
          </label>
          <select
            id="lokasi"
            name="lokasi"
            value={formData.lokasi}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih Lokasi</option>
            {lokasiOptions.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
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
