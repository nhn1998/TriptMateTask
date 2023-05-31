const Payment = () => {
    return (
        <div style={{fontFamily:'Outfit'}}>
            <div className="lg:mx-28 mx-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

                <div className="w-full p-4 bg-[#282A37] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-4 text-xl font-medium text-white dark:text-gray-400">Starter Plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-5xl text-white font-semibold">$</span>
                        <span className="text-5xl text-white font-extrabold tracking-tight">29</span>
                        <span className="ml-1 text-xl font-normal text-white dark:text-gray-400">/month</span>
                    </div>
                    <p className="mt-2 text-gray-300 text-base">This package is suitable for teams <br /> 1-15 people.</p>
                    <h1 className="text-xl mt-12 mb-5 font-semibold">What is included:</h1>
                    <p className="mt-2 mb-24 text-gray-300 text-lg">10 GB Dedicated Hosting Free <br /> Best for Developers, Freelancers <br /> 1 Year Support </p>
                    
                    <button className=" w-full h-14 focus:outline-none text-white border border-black hover:bg-gradient-to-bl from-[#2B59FF] to-[#BB2BFF] focus:ring-4 focus:ring-gray-200 font-semibold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2">Get Started</button>

                </div>
                <div className="w-full  p-4 bg-[#282A37] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-4 text-xl font-medium text-white dark:text-gray-400">Basic Plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-5xl text-white font-semibold">$</span>
                        <span className="text-5xl text-white font-extrabold tracking-tight">79</span>
                        <span className="ml-1 text-xl font-normal text-white dark:text-gray-400">/month</span>
                    </div>
                    <p className="mt-2 text-gray-300 text-base">This package is suitable for teams <br /> 1-50 people.</p>
                    <h1 className="text-xl mt-12 mb-5 font-semibold">What is included:</h1>
                    <p className="mt-2 text-gray-300 text-lg">15 GB Dedicated Hosting Free <br /> Best for Developers, Freelancers <br /> 5 Year Support <br /> Free Custom Domain <br /> Basic Statistics </p>
                    
                    <button className=" w-full mt-10 h-14 focus:outline-none text-white border border-black hover:bg-gradient-to-bl from-[#2B59FF] to-[#BB2BFF] focus:ring-4 focus:ring-gray-200 rounded-lg  px-5 py-2.5 mr-2 mb-2 text-lg font-semibold">Get Started</button>

                </div>
                <div className="w-full  p-4 bg-[#282A37] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-4 text-xl font-medium text-white dark:text-gray-400">Premium Plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-5xl text-white font-semibold">$</span>
                        <span className="text-5xl text-white font-extrabold tracking-tight">129</span>
                        <span className="ml-1 text-xl font-normal text-white dark:text-gray-400">/month</span>
                    </div>
                    <p className="mt-2 text-gray-300 text-base">This package is suitable for teams <br /> 1-100 people.</p>
                    <h1 className="text-xl mt-12 mb-5 font-semibold">What is included:</h1>
                    <p className="mt-2 mb-10 text-gray-300 text-lg">120 GB Dedicated Hosting Free <br /> Best for Developers, Freelancers <br /> Unlimited Support <br /> Free Custom Domain <br/>Full Statistics</p>
                    
                    <button className=" w-full h-14 focus:outline-none text-white border border-black hover:bg-gradient-to-bl from-[#2B59FF] to-[#BB2BFF] focus:ring-4 focus:ring-gray-200 font-semibold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2">Get Started</button>

                </div>

            </div>
        </div>
    );
};

export default Payment;