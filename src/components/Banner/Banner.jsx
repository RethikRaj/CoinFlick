import BannerImage from '../../assets/images/banner2.jpeg'

function Banner(){
    return (
        <div className='relative w-full'>
            <img src={BannerImage} alt='Banner' className='w-full'/>

            <div className='absolute top-25 w-full flex flex-col justify-center items-center gap-4'>
                <h1 className='text-4xl font-bold text-white text-center'>CoinFlick: Track the Crypto Market with Precision</h1>
                <h2 className='text-md font-bold text-white text-center'>Real-Time Insights. Smarter Crypto Moves.</h2>
            </div>

        </div>
    )
}

export default Banner;