import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Landing  ()  {
  return (
    <>
    <div className=" bg-gradient-to-r from-black via-gray-800 to-blue-300">
      <div  ><p></p><p></p><img className='p-8'  src="https://res.cloudinary.com/dxyu40epg/image/upload/v1738602172/WhatsApp_Image_2025-02-03_at_17.29.01_67429ec6_ctnusm.jpg" alt="" width={200} height={300} /></div>
      

    </div>
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-start justify-center h-screen p-10 bg-gradient-to-r from-black via-gray-800 to-blue-300 text-white">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold leading-tight">
            <TypeAnimation sequence={['Empower Your Startup with Smarter Financial Planning',1100,'Empower Your Startup with Smarter Financial Growth',1100,'Empower Your Startup with Smarter Financial Forecasting',1100]} wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}  />
            
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Take the guesswork out of fundraising! FinEd helps startup founders
            accurately predict their future revenue with our DCF predictor,
            making valuation and investor pitching effortless.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200">
            Get Started for Free
          </button>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-100 text-gray-600 text-sm text-center flex flex-col items-center">
        <div className="flex space-x-6 mb-2">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="text-xs">
          Privacy Policy | Terms of Use | © 2025 FinEd. All Rights Reserved.
        </div>
      </footer>
    </div>
    </>
    
  );
};


