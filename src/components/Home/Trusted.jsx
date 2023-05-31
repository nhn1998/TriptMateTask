import img1 from '../images/Logo8.png'
import img2 from '../images/Logo (1).png'
import img3 from '../images/Logo (2).png'
import img4 from '../images/Logo (3).png'
import img5 from '../images/Logo (4).png'
import img6 from '../images/Logo (5).png'
import img7 from '../images/Logo (6).png'
import img8 from '../images/Logo (7).png'

const Trusted = () => {
    return (
        <div>
            <h1 className="text-center">Trusted by nearly 5000+ paying customers</h1>
            <div className="mx-auto lg:w-6/12 mt-10 grid grid-cols-4 gap-10">
                <img src={img1} alt="" className='w-40 h-9 opacity-40'/>
                <img src={img2} alt="" className='w-40 h-9 opacity-40'/>
                <img src={img3} alt="" className='w-40 h-9 opacity-40'/>
                <img src={img4} alt="" className='w-40 h-9 opacity-40'/>
                <img src={img5} alt="" className='w-40 h-9 opacity-40'/>
                <img src={img6} alt="" className='w-40 h-9 opacity-40'/>
                <img src={img7} alt="" className='w-40 h-9 opacity-40'/>
                <img src={img8} alt="" className='w-40 h-9 opacity-40'/>
            </div>
            
        </div>
    );
};

export default Trusted;