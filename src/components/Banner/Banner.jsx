import BannerImage from '../../assets/images/banner2.jpeg';

function Banner() {
    return (
        <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
            <img 
                src={BannerImage} 
                alt="Banner" 
                className="w-full h-full object-cover" 
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 px-4 text-center">
                <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
                    CoinFlick: Track the Crypto Market with Precision
                </h1>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white drop-shadow-md">
                    Real-Time Insights. Smarter Crypto Moves.
                </h2>
            </div>
        </div>
    );
}

export default Banner;
