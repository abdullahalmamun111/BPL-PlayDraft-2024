import React from "react";
import '../App.css'
const Footer = () => {
  return (
    
    <div className="relative">
        
    <div className="bg-black w-full pt-48 pb-10 ">
        <div className="flex justify-center items-center"><img src="https://i.imgur.com/skKwV9g.png" alt="" /></div>
        <div className="border-b-2 border-gray-500 ">
        <footer className="grid grid-cols-1 pl-5 md:grid-cols-2 lg:grid-cols-3 md:pl-5   container mx-auto  text-base-content py-10 ">
      <div>
      <nav className="space-y-3">
        <h6 className="text-white text-[24px] font-bold ">About Us</h6>
        <p className="text-gray-500 text-[20px] w-[300px]">We are a passionate team dedicated to providing the best services to our customers.</p>
      </nav>
      </div>

      <div>
      <nav>
        <h6 className="text-white text-[24px] font-bold pb-3">Quick Links</h6>
        <li className="text-gray-500 text-[20px] w-[300px]"><a className="link link-hover ">Home</a></li>
        <li className="text-gray-500 text-[20px] w-[300px]"><a className="link link-hover">Services</a></li>
        <li className="text-gray-500 text-[20px] w-[300px]"><a className="link link-hover">About</a></li>
        <li className="text-gray-500 text-[20px] w-[300px]"><a className="link link-hover">Contact</a></li>   
      </nav>
      </div>


      <div>
     
        <h6 className="text-white text-[24px] font-bold pb-3">Subscribe</h6>
        <fieldset className="space-y-3">
            <h1 className="text-gray-500 text-[20px]">Subscribe to our newsletter for the latest updates.</h1>
          <div className="join">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border-2 p-2 join-item"
            />
            <button className="text-[18px] md:text-[20px] w-[90px] md:w-[100px] btn bg-gradient-to-r from-red-400 to-yellow-400 join-item">Subscribe</button>
          </div>
        </fieldset>
      
      </div>
    </footer>
    </div>
    <p className="text-gray-500 text-[16px] px-2 md:text-[20px] text-center pt-5">@Bangladesh Premier League PlayDraft 2024 BPL  All Rights Reserved.</p>
    </div> 
    <div className=" rounded-3xl top-[-180px] right-[20px] md:right-[150px] lg:right-[200px] p-1 md:p-5 bg-backdrop-blur-0 md:mx-auto border-2 border-white absolute w-[90%]  md:w-[70%]">
    <div className=" overflow-hidden rounded-lg h-[300px] text-center border-2 border-gray-300 bg-white background-2  flex flex-col justify-center items-center space-y-2 md:space-y-3">
            <h1 className="text-xl md:text-3xl font-bold">Subscribe to our Newsletter</h1>
            <p className="text-gray-500 text-[16px] md:text-[20px]">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-1">
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" w-[160px] md:w-[300px] border-2 rounded-xl p-2"
            />
            <button className="w-[80px] md:w-[100px] text-[14px] md:text-[16px] btn bg-gradient-to-r from-red-400 to-yellow-400 join-item">Subscribe</button>
          </div>
    </div>  
    </div>
    </div>
  );
};

export default Footer;
