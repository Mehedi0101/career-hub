import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';


const Footer = () => {
    return (
        <footer className='py-12'>
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 lg:flex justify-between">
                <div className='lg:w-1/4 col-span-1 sm:col-span-2 text-center lg:text-left'>
                    <h2 className="text-2xl xl:text-3xl font-extrabold text-white">CareerHub</h2>
                    <p className='text-light1 text-sm xl:text-base my-3'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex gap-2 items-center text-white justify-center lg:justify-normal'>
                        <AiFillFacebook className='text-[32px]' />
                        <FaTwitterSquare className='text-[29px]' />
                        <BiLogoInstagramAlt className='text-[35px]' />
                    </div>
                </div>
                <nav className='text-light1 flex flex-col text-sm xl:text-base text-center lg:text-left'>
                    <header className="text-white font-semibold mb-2 lg:mb-3 text-base xl:text-lg">Company</header>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav className='text-light1 flex flex-col text-sm xl:text-base text-center lg:text-left'>
                    <header className="text-white font-semibold mb-2 lg:mb-3 text-base xl:text-lg">Product</header>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav className='text-light1 flex flex-col text-sm xl:text-base text-center lg:text-left'>
                    <header className="text-white font-semibold mb-2 lg:mb-3 text-base xl:text-lg">Support</header>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav className='text-light1 flex flex-col text-sm xl:text-base text-center lg:text-left'>
                    <header className="text-white font-semibold mb-2 lg:mb-3 text-base xl:text-lg">Contact</header>
                    <a className="">524 Broadway, NYC</a>
                    <a className="">+1777-978-5570</a>
                </nav>
            </div>
            <hr className='my-10 w-11/12 mx-auto border-[#7e90fe33]' />
            <div className='text-light2 text-sm flex gap-x-10 flex-wrap justify-between w-11/12 mx-auto'>
                <p>&copy;2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </footer>
    );
};

export default Footer;