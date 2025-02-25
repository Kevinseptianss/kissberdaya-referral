    // eslint-disable-next-line react/prop-types
    const Title = ({ image }) => {
    return (
        <>
        <div className="flex flex-col items-center justify-center p-8">
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
                WAJIB HADIR!
                <br />
                ZOOMINAR PROGRAM PERCEPATAN
                <br />
                UMRAH & HAJI 2025-2026
            </h1>
            </div>
            <img src={image} className="w-full" />
        </div>
        </>
    );
    };

    export default Title;
