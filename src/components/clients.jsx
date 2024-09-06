import React from "react";
export default function Clients(){
    return(
        <div>
            <div className="flex flex-col justify-center items-center mt-4 gap-4">
                <h1 className="font-semibold text-[20px]">Our Clients</h1>
                <h1 className="lg:text-[16px] text-sm ml-5 text-wrap items-center">We have been working with some Fortune 500+ clients</h1>
            </div>

            <div className="flex lg:flex-row justify-center items-center py-5 lg:gap-24 gap-4">
                <img src="Logo.svg" alt="" />
                <img src="Logo (1).svg" alt="" className="lg:w-10 w-6"/>
                <img src="Logo (2).svg" alt="" className="lg:w-10 w-6"/>
                <img src="Logo (3).svg" alt="" className="lg:w-10 w-6"/>
                <img src="Logo (4).svg" alt="" className="lg:w-10 w-6"/>
                <img src="Logo (5).svg" alt="" className="lg:w-10 w-6"/>
                <img src="Logo.svg" alt="" />
            </div>

            <div className="flex flex-col justify-center items-center py-10 gap-5">
                <h1 className="lg:text-3xl text-md font-semibold">Manage your entire community in a single system</h1>
                <h1 className="lg:text-xl text-sm font-light">Who is Nexcent suitable for?</h1>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center gap-5 py-5">
                <div className="lg:h-[20rem] lg:w-[25%] w-[75%] flex flex-col bg-white shadow-lg justify-center items-center">
                    <div className="m-8 flex gap-4 flex-col justify-center items-center">
                    <img src="Membership.svg" alt="" />
                    <p className="lg:text-4xl text-xl font-semibold ml-12">Membership Organizations</p>
                    <p className="lg:text-md">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>

                <div className="lg:h-[20rem] lg:w-[25%] w-[75%] flex flex-col bg-white shadow-lg justify-center items-center">
                    <div className="m-8 flex gap-4 flex-col justify-center items-center">
                    <img src="National.svg" alt="" />
                    <p className="lg:text-4xl text-xl font-semibold ml-12">National Associations</p>
                    <p className="lg:text-md">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>

                <div className="lg:h-[20rem] lg:w-[25%] w-[75%] flex flex-col bg-white shadow-lg justify-center items-center">
                    <div className="m-8 flex gap-4 flex-col justify-center items-center">
                    <img src="Clubs.svg" alt="" />
                    <p className="lg:text-4xl text-xl font-semibold ml-12">Clubs And Groups</p>
                    <p className="lg:text-md">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center py-5 gap-14 ml-[5%]">
                <img src="Frame 35.svg" alt="" />

                <div className="flex flex-col gap-5">
                    <h1 className="font-bold lg:text-4xl text-lg lg:w-[70%]">The unseen of spending three years at Pixelgrade</h1>
                    <p className="lg:text-md text-sm w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>

                    <button className='flex flex-row bg-green-600 lg:w-32 w-24 lg:h-12 h-8 text-white text-sm font-semibold rounded-md gap-2 items-center justify-center'>Learn More</button>
                </div>
            </div>

            {/* <div className="w-full flex flex-row h-[20rem] bg-slate-100 justify-between">
                <div className="font-bold text-4xl m-24">
                <h1>Helping a local</h1>
                <h1 className="text-green-500">business reinvent itself</h1>
                <h1 className="font-normal text-[16px]">We reached here with our hard work and dedication</h1>
                </div>

                    <span className="flex justify-center items-start gap-2">
                    <div>
                        <h1 className="text-[19px] text-body3 font-bold">
                            <span>2,245,341</span>
                            <p class="text-neutral-Gray md:text-body4  text-[10px] lg:text-body3 ">Clubs</p>
                        </h1>
                    </div>

                    <div>
                        <h1 className="text-[19px] text-body3 font-bold">
                            <span>2,245,341</span>
                            <p class="text-neutral-Gray md:text-body4  text-[10px] lg:text-body3 ">Clubs</p>
                        </h1>
                    </div>
                </span>
            </div> */}
        </div>
    )
}