import img from '../images/man.png'
import img1 from '../images/man1.png'
import img2 from '../images/man2.png'
import img3 from '../images/man3.png'
import img4 from '../images/man4.png'
import img5 from '../images/man5.png'
import img6 from '../images/man6.png'
import img7 from '../images/man7.png'
import { AiOutlineTwitter } from 'react-icons/Ai';
const Review = () => {
    return (
        <div>
            <div className="lg:mx-28 mx-5 my-20">
                <h1 className="text-2xl font-semibold text-center">What our customers say</h1>
                <p className="text-center text-gray-500">Read why thousands of marketers, writers, and entrepreneurs love us so much.</p>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20'>
                    <div className='bg-white p-4 rounded'>
                        <div className='flex justify-between'>
                            
                            <div className='flex'>
                            <img src={img} alt="" className='mr-2' />
                                <div>
                                <h1 className='text-black text-xl flex justify-center items-center'>Darell Steward</h1>
                                <p className='text-sm text-black'>@darrels</p>
                                </div>
                            </div>
                            <AiOutlineTwitter className='text-blue-600'></AiOutlineTwitter>

                        </div>
                        <p className='text-black mt-2'>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. <br /><span className='text-blue-500'>#another</span></p>
                    </div>
                    <div className='bg-white h-52 p-4 rounded'>
                        <div className='flex justify-between'>
                            
                            <div className='flex'>
                            <img src={img1} alt="" className='mr-2 ' />
                                <div>
                                <h1 className='text-black text-xl flex justify-center items-center'>Leslie Alexander</h1>
                                <p className='text-sm text-black'>@lesslie</p>
                                </div>
                            </div>
                            <AiOutlineTwitter className='text-blue-600'></AiOutlineTwitter>
                        </div>
                        <p className='text-black mt-2'>Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.<br /><span className='text-blue-500'>#postcrafts</span></p>
                    </div>
                    <div className='bg-white h-48 p-4 rounded'>
                        <div className='flex justify-between'>
                            
                            <div className=' flex'>
                            <img src={img2} alt="" className='mr-2' />
                                <div>
                                <h1 className='text-black text-xl flex justify-center items-center'>Jenny Wilson</h1>
                                <p className='text-sm text-black'>@jennywilson</p>
                                </div>
                            </div>
                            <AiOutlineTwitter className='text-blue-600'></AiOutlineTwitter>
                        </div>
                        <p className='text-black mt-2'>This is a top quality product. No need to think twice before making it live on web.<br /><span className='text-blue-500'>#make_it_fast</span></p>
                    </div>
                    <div className='bg-white h-52 p-4 rounded'>
                        <div className='flex justify-between'>
                            
                            <div className=' flex'>
                            <img src={img3} alt="" className='mr-2' />
                                <div>
                                <h1 className='text-black text-xl flex justify-center items-center'>Kristin Watson</h1>
                                <p className='text-sm text-black'>@kristinwatson2</p>
                                </div>
                            </div>
                            <AiOutlineTwitter className='text-blue-600'></AiOutlineTwitter>
                        </div>
                        <p className='text-black mt-2'>Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.<br /><span className='text-blue-500'>#postcrafts</span></p>
                    </div>
                    <div className='bg-white h-48 p-4 rounded'>
                        <div className='flex justify-between'>
                            
                            <div className='flex'>
                            <img src={img4} alt="" className='mr-2' />
                                <div>
                                <h1 className='text-black text-xl flex justify-center items-center'>Guy Hawkins</h1>
                                <p className='text-sm text-black'>@jennywilson</p>
                                </div>
                            </div>
                            <AiOutlineTwitter className='text-blue-600'></AiOutlineTwitter>
                        </div>
                        <p className='text-black mt-2'>This is a top quality product. No need to think twice before making it live on web.<br /><span className='text-blue-500'>#make_it_fast</span></p>
                    </div>
                    <div className='bg-white lg:mt-[-20px] h-56 p-4 rounded'>
                        <div className='flex justify-between'>

                            <div className='flex'>
                            <img src={img5} alt="" className='mr-2' />
                                <div>
                                <h1 className='text-black text-xl flex justify-center items-center'>Marvin McKinney</h1>
                                <p className='text-sm text-black'>@jennywilson2</p>
                                </div>
                            </div>
                            <AiOutlineTwitter className='text-blue-600'></AiOutlineTwitter>
                        </div>
                        <p className='text-black mt-2'>With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.<br /><span className='text-blue-500'>#dev #Tools</span></p>
                    </div>
                    <div className='bg-white h-56 lg:mt-[-40px] p-4 rounded'>
                        <div className='flex justify-between'>
                            
                            <div className='flex'>
                            <img src={img6} alt="" className='mr-2' />
                                <div>
                                <h1 className='text-black text-xl flex justify-center items-center'>Annette Black</h1>
                                <p className='text-sm text-black'>@jennywilson</p>
                                </div>
                            </div>
                            <AiOutlineTwitter className='text-blue-600'></AiOutlineTwitter>
                        </div>
                        <p className='text-black mt-2'>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.<br /><span className='text-blue-500'>#another</span></p>
                    </div>
                    <div className='bg-white lg:mt-[-20px] h-52 p-4 rounded'>
                        <div className='flex justify-between'>
                            
                            <div className='flex'>
                            <img src={img7} alt="" className='mr-2' />
                                <div>
                                <h1 className='text-black text-xl flex justify-center items-center'>Floyd Miles</h1>
                                <p className='text-sm text-black'>@jennywilson</p>
                                </div>
                            </div>
                            <AiOutlineTwitter className='text-blue-600'></AiOutlineTwitter>
                        </div>
                        <p className='text-black mt-2'>My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.<br /><span className='text-blue-500'>#postcrafts</span></p>
                    </div>
                </div>

            </div>
            <hr className="h-px my-28 bg-gray-700 border-0 dark:bg-gray-700" />
        </div>
    );
};

export default Review;