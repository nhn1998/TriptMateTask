import img from '../images/content.png'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
const CreateContent = () => {
    return (
        <div>
            <div className="lg:mx-28 my-10 mt-28">
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className="flex">
                        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Results</h5>
                            <p className="font-normal text-[#818488]">Here is what our AI came up with.</p>
                            <p className="text-black bg-gray-200 p-3">Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.Agitate: You have no idea how much sales tax to charge your customers in each state.Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!</p>
                            <p className="text-black mt-3 bg-gray-200 p-3">Pain: e-commerce business owners are struggling to keep up with the ever changing sales tax laws. Agitate: Sales tax is a complicated, confusing</p>
                        </a>
                        <img src={img} alt="" className='absolute lg:ml-36  mt-20' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <h1 className='text-4xl font-semibold'>Create content efficiently <br /> and quickly with great AI <br /> writing tools</h1>
                            <p className='mt-2 text-base'>150k+ users. No Credit Card Required. Pro designs and writing <br /> at no cost. Start for free. Ai Writer Tool | Generate text for ecom,<br /> social media, website, sales, blogs etc.</p>
                            <div className=" my-[40px]">
                                <button type="button" className=" focus:outline-none text-white bg-gradient-to-bl from-[#2B59FF] to-[#BB2BFF] focus:ring-4 focus:ring-gray-200 font-medium rounded text-sm px-5 py-2.5  mb-2">Start 14 Days Free Trial</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 my-20 lg:mx-28'>
                <div className='flex'>
                    <div>
                        <h1 className='text-4xl font-semibold'>Write what you want to <br /> convey through clear, & <br /> authentic writing</h1>
                        <p className='mt-2 text-base'>AI-Writer is the most accurate content generation platform <br /> and writing tool that helps you transform your text into a <br /> completely personalized.</p>
                        <div className=" my-[40px]">
                            <button type="button" className=" focus:outline-none text-white bg-gradient-to-bl from-[#2B59FF] to-[#BB2BFF] focus:ring-4 focus:ring-gray-200 font-medium rounded text-sm px-5 py-2.5  mb-2">Start 14 Days Free Trial</button>
                        </div>
                    </div>
                </div>

                                    
                    <a href="#" className="grid grid-cols-2 lg:ml-20 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <div className='text-gray-500'>
                        <p>Blog Outline</p>
                        <p>Blog Intro</p>
                        <p>Blog Conclusion</p>
                        <p>AIDA</p>
                        <p>PAS</p>
                        <p>Content Rewriter</p>
                        <hr className="w-24 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-24 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-20 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-20 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-24 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-24 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-20 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-20 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-24 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                        <hr className="w-24 mt-3  bg-gray-700 border-2 dark:bg-gray-700"/>
                    </div>
                        <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Results</h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">Here is what our AI came up with.</p>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" className='mt-2'/>
                        <img src={img2} alt="" className='mt-2'/>
                        </div>
                    </a>

            </div>
        </div>
    );
};

export default CreateContent;