import CreateContent from "./CreateContent";
import FooterBanner from "./FooterBanner";
import Mixland from "./Mixland";
import Payment from "./Payment";
import Review from "./Review";
import Tools from "./Tools";
import Trusted from "./Trusted";

const Hero = () => {
    return (
        <div className="text-white mt-[138px]" style={{fontFamily:'Outfit'}}>
            <h1 className="text-5xl text-center font-normal drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Write better <br /> Content for your <br /><span className="text-transparent bg-clip-text bg-gradient-to-l font-semibold from-[#FFC947] to-[#FC6739]"> Facebook Ads</span></h1>
            <hr className="lg:mx-[533px] my-8 border-2 border-[#FC6739] mt-0"/>
            <p className="text-center mt-7">Artificial intelligence writting tool helps you create blogs, <br /> social media websites and much more.</p>
            <div className="flex justify-center items-center my-[50px]">
            <button type="button" className=" focus:outline-none text-white bg-gradient-to-bl from-[#2B59FF] to-[#BB2BFF] focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Start 14 Days Free Trial</button>
            </div>
            <hr className="h-px my-28 bg-gray-700 border-0 dark:bg-gray-700"/>
            <Trusted></Trusted>
            <CreateContent></CreateContent>
            <Tools></Tools>
            <Mixland></Mixland>
            <Review></Review>
            <Payment></Payment>
            <FooterBanner></FooterBanner>
        </div>
    );
};

export default Hero;