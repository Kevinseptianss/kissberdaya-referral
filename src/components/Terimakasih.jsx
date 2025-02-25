/* eslint-disable react/prop-types */
const Terimakasih = ({ setIsCopied, phone, isCopied }) => {
    // Function to copy the URL to clipboard
    const copyToClipboard = () => {
      const url = `https://${currentDomain}/${pageName}/form?id=${phone}`;
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
  
    // Get the current domain dynamically
    const currentDomain = window.location.hostname;
  
    // Get the current page name (e.g., "ikhtiarumrah")
    const currentPath = window.location.pathname; // e.g., "/ikhtiarumrah"
    const pageName = currentPath.split("/")[1]; // Extract "ikhtiarumrah"
  
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-8 text-center">
        <h1 className="text-2xl font-bold text-center mb-6">
          Terima kasih telah mendaftar!
        </h1>
        <p className="text-lg mb-4">
          Silakan bagikan link ini:{" "}
          <a
            href={`https://${currentDomain}/${pageName}/form?id=${phone}`}
            className="text-blue-500 underline"
          >
            https://{currentDomain}/{pageName}/form?id={phone}
          </a>
        </p>
        <button
          onClick={copyToClipboard}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {isCopied ? "Tersalin!" : "Bagikan Link"}
        </button>
      </div>
    );
  };
  
  export default Terimakasih;