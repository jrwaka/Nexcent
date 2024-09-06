import React from "react";
export default function Index (){
    return(
        <div>
            <div className="flex lg:flex-row items-center flex-col bg-slate-100 w-full mt-[80px] py-7 justify-between px-20 gap-14 lg:gap-0">
                <div className="flex flex-col gap-8 items-center lg:items-start">
                    <h1 className="font-bold lg:text-5xl md:text-3xl text-[16px] justify-center text-black flex lg:flex-col lg:gap-5 flex-row gap-1 lg:px-0 px-3 w-[100%]"><span className="whitespace-nowrap">Lessons and insights</span><span className="text-green-600 whitespace-nowrap">from 8 years</span></h1>
                    <h1 className="text-sm lg:text-start lg:px-0 text-center px-1">Where to grow your business as a photographer: site or social media?</h1>
                    <button className='flex flex-row bg-green-600 w-32 lg:h-12 h-8 text-white text-sm font-semibold rounded-md gap-2 items-center justify-center'>Register </button>
                </div>

                <div className="shrink-0 lg:w-[350px] w-full">
                    <img src="Illustration.svg" alt="" className="w-full object-cover object-center"/>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center mt-10 gap-2">
                    <span className="h-[7px] w-[7px] rounded-full bg-green-600"></span>
                    <span className="h-[7px] w-[7px] rounded-full bg-green-400"></span>
                    <span className="h-[7px] w-[7px] rounded-full bg-green-300"></span>
                </div>
        </div>
    )
}