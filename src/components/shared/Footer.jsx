import useTheme from "../../hooks/useTheme";

const Footer = () => {
    const {theme} = useTheme()
    return (
        <div className={` py-6 ${theme === 'light' ? 'bg-[#DC2C5C] text-white' : 'bg-[#030508]'}`}>

        <div className={`grid grid-cols-4 mx-auto w-5/6 mt-5`}>
            <div className="footer-1">
                <h5 className="text-2xl"> HELP </h5>
                <ul className="text-sm gap-2 flex flex-col mt-3">
                    <li><a href="/search">Search</a></li>
                    <li><a href="/search">Help</a></li>
                    <li><a href="/pages/contact">Information</a></li>
                    <li><a href="/pages/about">Privacy Policy</a></li>
                    <li><a href="/pages/shipping-details">Shipping Details</a></li>
                </ul>
            </div>

            <div className="footer-2">
                <h5 className="text-2xl"> INFORMATION </h5>
                <ul className="text-sm gap-2 flex flex-col mt-3">
                    <li><a href="/pages/contact">Contact us</a></li>
                    <li><a href="/pages/about">About us</a></li>
                    <li><a href="/pages/faqs">Careers</a></li>
                    <li><a href="/pages/wishlist">Refunds &amp; Returns</a></li>
                    <li><a href="/pages/shipping-details">Deliveries</a></li>
                </ul>
            </div>



            <div className="footer-3">
                <h5 className="text-2xl"> SUPPORT </h5>
                <ul className="text-sm gap-2 flex flex-col mt-3">
                    <li><a href="/search">Search Terms</a></li>
                    <li><a href="/search">Advanced Search</a></li>
                    <li><a href="/pages/contact">Store Location</a></li>
                    <li><a href="/pages/wishlist">Orders &amp; Returns</a></li>
                </ul>
            </div>


            <div className="footer-4">
                <h5 className="text-2xl"> TOP SELLING </h5>
                <ul className="text-sm gap-2 flex flex-col mt-3">
                    <li><a href="/products/blue-sneakers">Blue Sneakers</a></li>
                    <li><a href="/products/cotton-active-top">Cotton Active Top</a></li>
                    <li><a href="/products/exercise-mat">Exercise Mat</a></li>
                    <li><a href="/products/pink-yoga-mat">Pink Yoga Mat</a></li>
                    <li><a href="/products/slim-cotton-top">Slim Cotton Top</a></li>
                </ul>
            </div>
        </div>
        </div>

    );
};

export default Footer;