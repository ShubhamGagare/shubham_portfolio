import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TracingBeam } from '@/components/ui/tracing-beam';
import { SparklesCore } from "@/components/ui/sparkles";
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';

function page() {
    return (
        <div className='bg-black min-h-screen'>
            <TracingBeam className="px-6 bg-black">
                <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
                        Big Market
                    </h1>
                    <div className="w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </div>
                <div className='flex-col space-y-16 '>

                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>The Challange</h1>
                        <p className='flex text-md'>
                            In 2019, the Big Market was started in Ahmednagar.By the end of 2020, number of users increased but receded to a slew of disparate features that made the experience slow and complex to use. I redesign the Big Market grocery shopping experience for the fastest growing startup in Ahemnednagar.</p>
                    </div>

                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Research</h1>
                        <div className='flex-col  space-y-8'>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'>Target audience</h2>
                                <ul>
                                    <li>Housewifes and working womans.</li>
                                    <li>Targeted for families.</li>
                                </ul>
                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'>Existing apps</h2>
                                <ul>
                                    <li>There are many grocery apps present but the service is not available in local area.</li>
                                    <li>The apps which are built for there local area are not updated and having poor UI.</li>
                                </ul>
                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'> User needs</h2>
                                <ul>
                                    <li>Due the corona pandemic online grocery shopping users are looking for the app that can satisfy their needs</li>
                                    <li>User need the groceries in reasonable rates and good home delivery service.</li>
                                    <li>Wide variety of the in food items.</li>
                                    <li>Good quality of food at door.</li>

                                </ul>

                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'> User Pain Points</h2>
                                <ul>
                                    <li>User only can by from nearby market,so had to buy available things in available quality</li>
                                    <li>Vegetables and grains had to refined.</li>
                                    <li>Groceries had to buy from different places.</li>
                                    <li>Had to stand line.</li>
                                    <li>People are expecting home delivery now with a good packaging.</li>
                                    <li>Bad whether and transport.</li>
                                    <li>People may get forget few items while shopping.</li>


                                </ul>
                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'> User Pain Points</h2>
                                <ul>
                                    <li>Satisfaction items has been purchased after careful observation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Findings and Analysis</h1>
                        <ul>
                            <li>All groceries should be available at one place.</li>
                            <li>Home delivery and packaging should be good.</li>
                            <li>List of items has to maintain.</li>
                            <li>Different quality of the same grocery item should be available.</li>
                            <li>Refined products should be available.</li>
                        </ul>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Persona</h1>

                        <div className='flex space-x-4 w-full overflow-auto'>
                            <Image
                                src="/User Persona.png"
                                alt={''}
                                width={600} height={500} priority quality={100} />
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-3xl font-bold max-w-44 min-w-44'>Secondary Research: Competitive Analysis</h1>

                        <div className='flex space-x-4 w-full overflow-auto'>
                            <Image
                                src="/Capture.png"
                                alt={''}
                                width={600} height={500} priority quality={100} />
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Journey</h1>

                        <div className='flex space-x-4 w-full overflow-auto'>
                            <Image
                                src="/BM_User_Journey.png"
                                alt={''}
                                width={600} height={500} priority quality={100} />
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Information Architeture</h1>

                        <div className='flex space-x-4 w-full overflow-auto'>
                            <Image
                                src="/BM_Info_Arch.png"
                                alt={''}
                                width={600} height={500} priority quality={100} />
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Wireframes</h1>
                        <div className='flex-col space-y-4'>
                            <div className='flex-col space-y-4'>
                                <h2 className='flex text-2xl font-bold mt-2'>Low Fidelity</h2>

                                <div className='flex space-x-4 w-full overflow-auto'>
                                    <Image
                                        src="/Wireframes.png"
                                        alt={''}
                                        width={900} height={900} priority quality={100} />
                                    <Image
                                        src="/other-hifi.png"
                                        alt={''}
                                        width={900} height={900} priority quality={100} />
                                    <Image
                                        src="/loc-home.png"
                                        alt={''}
                                        width={1400} height={500} priority quality={100} />
                                    <Image
                                        src="/order-hifi.png"
                                        alt={''}
                                        width={1400} height={500} priority quality={100} />
                                </div>
                            </div>
                            <div className='flex-col space-y-4'>
                                <h2 className='flex text-2xl font-bold mt-2'>High Fidelity</h2>

                                <div className='flex space-x-4 w-full overflow-auto'>
                                    <Image
                                        src="/Prototype.png"
                                        alt={''}
                                        width={900} height={900} priority quality={100} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Testing</h1>
                        <div className='flex-col'>
                            <div className='flex-col mt-2'>
                                <ul>
                                    <li>In intial prototype user was having difficulty in reading the item name and its details.</li>
                                    <li>One of the user finds home screen little bulky.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Conclusion</h1>
                        <p className='flex text-md'>
                            Compared with the previous version of Big Market, this newly designed gives a positive impact on the shopping experience. Users find the new the saved list feature much handy and faster way to order groceries.After user research and testing, I was able to validate the assumptions and changes I had made. I am glad to learn that even by making small changes, we are able to yield big impacts and create a great experience for users.</p>
                    </div>

                </div>

            </TracingBeam>
            <div className='pb-40'>

            </div>
        </div>
    )
}

export default page
