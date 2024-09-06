import React, { useEffect, useState } from 'react';
export default function Menubar () {
    const [state, setState] = useState(true)
    const [screen, setScreen] = useState(false)
    const handleMenu =()=>{
        setState(!state)
        console.log('Hello');
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 1440) {
            setState(true); // Hide links on small screens
            setScreen(true);
          } else {
            setState(false); // Show links on larger screens
            setScreen(false);
          }
        };
    
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize); // Listen for window resize events
    
        return () => window.removeEventListener('resize', handleResize); // Cleanup
      }, []);
    return(
        <div>
        <div className='w-full font-semibold py-4 flex flex-row bg-white text-black top-0 left-0 lg:px-36 px-10 text-sm justify-around items-center fixed shadow-md'>
        <img src="AAA.svg" alt="" className='' />

            <div className={`${state ? "hidden" : "flex flex-1 items-center flex-row gap-7 bg-white"} ${screen ? "absolute h-screen w-full flex flex-col transition-all duration-500 ease-in-out" : "" } top-16`}>
                <div className='flex gap-7 lg:flex-row flex-col h-fit lg:h-full w-full lg:justify-end justify-start items-center'>
                <a href="#" className='hover:text-green-500 transition-all duration-300 ease-in-out'>Home</a>
                <a href="#" className='hover:text-green-500 transition-all duration-300 ease-in-out'>Features</a>
                <a href="#" className='hover:text-green-500 transition-all duration-300 ease-in-out'>Community</a>
                <a href="#" className='hover:text-green-500 transition-all duration-300 ease-in-out'>Blog</a>
                <a href="#" className='hover:text-green-500 transition-all duration-300 ease-in-out'>Pricing</a>
                </div>
                <button className='flex flex-row bg-green-600 w-40 h-12 text-white rounded-md gap-2 items-center justify-center'>Register Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 items-center justify-center"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
            </div>
            <button className='lg:hidden' onClick={handleMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg></button>
        </div>
        </div>
    )
}