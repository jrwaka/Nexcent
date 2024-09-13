import React from "react";
export default function Clients(){
    return(
        <div>
            <div className="flex flex-col justify-center items-center mt-4 gap-4">
                <h1 className="font-semibold text-[20px]">Our Clients</h1>
                <h1 className="lg:text-[16px] text-sm m-4 text-wrap items-center">We have been working with some Fortune 500+ clients</h1>
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
                <h1 className="lg:text-3xl m-4 text-md font-semibold">Manage your entire community in a single system</h1>
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
                    <h1 className="font-bold lg:text-4xl text-lg lg:w-[70%] m-4">The unseen of spending three years at Pixelgrade</h1>
                    <p className="lg:text-md text-sm w-[70%] m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>

                    <button className='flex flex-row bg-green-600 m-4 lg:w-32 w-24 lg:h-12 h-10 text-white text-sm font-semibold rounded-md gap-2 items-center justify-center'>Learn More</button>
                </div>
            </div>

            <div className="w-full flex lg:flex-row flex-col h-[20rem] bg-slate-100 items-center lg:justify-around justify-center">
                <div className="font-bold lg:text-4xl text-xl">
                <h1>Helping a local</h1>
                <h1 className="text-green-500">business reinvent itself</h1>
                <h1 className="flex lg:flex-col flex-row font-normal lg:text-[16px] text-[12px]">We reached here with our hard work and dedication</h1>
                </div>

                <div className="flex w-[20%] gap-2">
                    <div className="w-full">
                        {/* Div 1 */}
                        <div className="flex lg:flex-row flex-col gap-2">
                            <div className="mt-1">
                                <img src="Members.svg" alt="" />
                            </div>

                            <div className=" w-full font-semibold">
                                <div className="lg:text-[22px]">
                                    <h1>2,245,341</h1>
                                </div>

                                <div className="lg:text-[16px] text-[12px] text-slate-500 font-medium">
                                    Members
                                </div>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col gap-2 ">
                            <div className="mt-1">
                                <img src="Events.svg" alt="" />
                            </div>

                            <div className=" w-full font-semibold">
                                <div className="lg:text-[22px]">
                                    <h1>8,282,967</h1>
                                </div>

                                <div className="lg:text-[16px] text-[12px] text-slate-500 font-medium">
                                    Event Bookings
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        {/* Div 2 */}

                        <div className="flex lg:flex-row flex-col gap-2">
                            <div className="mt-1">
                                <img src="Clubs1.svg" alt="" />
                            </div>

                            <div className=" w-full font-semibold">
                                <div className="lg:text-[22px]">
                                    <h1>46,328</h1>
                                </div>

                                <div className="lg:text-[16px] text-[12px] text-slate-500 font-medium">
                                    Clubs
                                </div>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col gap-2">
                            <div className="mt-1">
                                <img src="Payments.svg" alt="" />
                            </div>

                            <div className=" w-full font-semibold">
                                <div className="lg:text-[22px]">
                                    <h1>1,926,236</h1>
                                </div>

                                <div className="lg:text-[16px] text-[12px] text-slate-500 font-medium">
                                    Payments
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center py-5 gap-14 ml-[5%]">
                <img src="Design.svg" alt="" />

                <div className="flex flex-col gap-5">
                    <h1 className="font-bold lg:text-4xl text-lg lg:w-[70%] m-4">How to design your site footer like we did</h1>
                    <p className="lg:text-md text-sm w-[70%] m-4">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>

                    <button className='flex flex-row bg-green-600 m-4 lg:w-32 w-24 lg:h-12 h-10 text-white text-sm font-semibold rounded-md gap-2 items-center justify-center'>Learn More</button>
                </div>
            </div>
        </div>
    )
}