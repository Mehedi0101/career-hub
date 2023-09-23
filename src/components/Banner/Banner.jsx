import userImage from '../../assets/user.png';
const Banner = () => {
    return (
        <div className="mt-10 md:mt-20 mb-20 w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-x-10">
            <div className='text-center md:text-left'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark1 font-extrabold'>One Step <br /> Closer To Your <br /> <span className='bg-gradient-to-r from-primary1 to-primary2 bg-clip-text text-transparent'>Dream Job</span></h1>
                <p className='my-5 text-dark3 lg:w-2/3 text-sm lg:text-base font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="px-5 py-2 lg:text-sm xl:text-base bg-gradient-to-r from-primary1 to-primary2 text-white font-extrabold rounded-lg active:scale-95 transition-transform">Get Started</button>
            </div>
            <div>
                <img className='w-3/4 md:w-full mx-auto mb-5 md:mb-0' src={userImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;