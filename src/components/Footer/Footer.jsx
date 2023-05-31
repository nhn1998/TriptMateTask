import { Link } from "react-router-dom";

const Footer = () => {
    return (
        
<footer className="bg-black text-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="mb-6 lg:ml-20 md:mb-0">
              <h1 className="text-xl font-semibold">Company</h1>
              <div className="mt-5"><Link>About</Link></div>
              <div className="mt-5"><Link>Features</Link></div>
              <div className="mt-5"><Link>Works</Link></div>
              <div className="mt-5"><Link>Career</Link></div>
          </div>
              <div>
                  <h2 className="mb-6 font-semibold text-lg uppercase dark:text-white">Help</h2>
                  <div className="mt-5"><Link>Customer Support</Link></div>
              <div className="mt-5"><Link>Delivery Details</Link></div>
              <div className="mt-5"><Link>Terms & Condition</Link></div>
              <div className="mt-5"><Link>Privacy and Policy</Link></div>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Resources</h2>
                  <div className="mt-5"><Link>eBooks</Link></div>
              <div className="mt-5"><Link>Development Tutorial</Link></div>
              <div className="mt-5"><Link>How to -Blog</Link></div>
              <div className="mt-5"><Link>Youtube Playlist</Link></div>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Links</h2>
                  <div className="mt-5"><Link>eBooks</Link></div>
              <div className="mt-5"><Link>Development Tutorial</Link></div>
              <div className="mt-5"><Link>How to -Blog</Link></div>
              <div className="mt-5"><Link>Youtube Playlist</Link></div>
              </div>
      </div>
      
    </div>
</footer>

    );
};

export default Footer;