import accountImage from '../../assets/accounts.png';
import creativeImage from '../../assets/creative.png';
import marketingImage from '../../assets/marketing.png';
import engineeringImage from '../../assets/chip.png';

const Category = () => {
    return (
        <div className='w-11/12 mx-auto mb-10 md:mb-20'>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-dark1">Job Category List</h2>
            <p className="text-sm lg:text-base text-center text-dark3 mt-3 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 text-center lg:text-left lg:flex justify-between gap-10 mt-12">

                <div>
                    <div className='mb-5'><img className='mx-auto lg:mx-0' src={accountImage} alt="" /></div>
                    <h3 className='text-dark2 text-xl font-extrabold mb-1'>Account & Finance</h3>
                    <p className='text-dark3 font-medium'>300 Jobs Available</p>
                </div>

                <div>
                    <div className='mb-5'><img className='mx-auto lg:mx-0' src={creativeImage} alt="" /></div>
                    <h3 className='text-dark2 text-xl font-extrabold mb-1'>Creative Design</h3>
                    <p className='text-dark3 font-medium'>100+ Jobs Available</p>
                </div>

                <div>
                    <div className='mb-5'><img className='mx-auto lg:mx-0' src={marketingImage} alt="" /></div>
                    <h3 className='text-dark2 text-xl font-extrabold mb-1'>Marketing & Sales</h3>
                    <p className='text-dark3 font-medium'>150 Jobs Available</p>
                </div>

                <div>
                    <div className='mb-5'><img className='mx-auto lg:mx-0' src={engineeringImage} alt="" /></div>
                    <h3 className='text-dark2 text-xl font-extrabold mb-1'>Engineering Job</h3>
                    <p className='text-dark3 font-medium'>224 Jobs Available</p>
                </div>

            </div>
        </div>
    );
};

export default Category;