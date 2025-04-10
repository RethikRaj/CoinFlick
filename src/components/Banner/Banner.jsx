import BannerImage from '../../assets/images/banner2.jpeg'

function Banner(){
    return (
        <div className='w-full '>
            <img src={BannerImage} alt='Banner' className='w-full h-full'/>
        </div>
    )
}

export default Banner;