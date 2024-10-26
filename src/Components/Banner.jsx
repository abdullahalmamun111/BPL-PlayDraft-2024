import React from 'react';
import '../App.css'

const Banner = ({handleFreeClaimBtn}) => {
    return (
        
        <div className= "background flex flex-col justify-center items-center bg-black rounded-3xl md:w-full py-10 mb-10 space-y-5 md:space-y-3 mt-36">
            <img className='w-[250px] h-[200px] ' src="https://i.imgur.com/KvGBkiy.png" alt="" />
            <h1 className='text-[24px] md:text-[30px] lg:text-[40px] font-bold text-white text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='text-[20px] md:text-[24px] text-center font-semibold text-gray-400'>Beyond Boundaries Beyond Limits</h3>
            <div className='border-2 border-[#E7FE29] rounded-xl '><button onClick={ () => handleFreeClaimBtn(6000000)} className='w-[184px] h-[48px] bg-[#E7FE29] rounded-xl text-[#131313] text-[18px] m-1'>Claim Free Creadit</button></div>

        </div>
    );
};

export default Banner;