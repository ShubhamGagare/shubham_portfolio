import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TracingBeam } from '@/components/ui/tracing-beam';
import { SparklesCore } from "@/components/ui/sparkles";
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';

function page() {
    return (
        <div className=' min-h-screen'>
            <TracingBeam className="px-6 ">
                <div className="h-[40rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center relative z-20">
                        Volpay TestSuite
                    </h1>

                </div>
                <div className='flex-col space-y-16 '>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-4xl font-bold  min-w-44'>What is Testuite?</h1>
                        <div className='flex-col space-y-4' >
                            <h2 className='flex text-2xl font-bold '>Bank</h2>
                            <Image
                                src="/Bank.png"
                                alt={''}
                                width={900} height={900} priority quality={100} />

                            <h2 className='flex text-2xl font-bold '>VolPay</h2>
                            <Image
                                src="/VolPay.png"
                                alt={''}
                                width={900} height={900} priority quality={100} />

                            <h2 className='flex text-2xl font-bold '>What is Testuite?</h2>
                            <Image
                                src="/what_is_testsuite.png"
                                alt={''}
                                width={900} height={900} priority quality={100} />
                        </div>

                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-4xl font-bold  min-w-44'>Product Vision</h1>
                        <p className='flex text-md'>
                            This suite was developed as In-House automation testing prodouct.It is specifically designed and developed to meet the testing requirements of the VolPay. The main moto of this tool was giving the automating regression and functional testing support which are not possible in existing available tools .

                            VolPay is a suite of software applications designed specifically to accelerate all aspects of payment integration, processing and orchestration.</p>
                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-3xl font-bold  min-w-44'>Discovered User Problem</h1>
                        <div className='flex-col  space-y-8'>
                            <div className='flex-col mt-2'>
                                <ul className="px-6">
                                    <li className="list-disc w-full">The only users are the testers from the different QA teams.</li>
                                    <li className="list-disc w-full">Testers spend most of the time configuring testcase.</li>
                                    <li className="list-disc w-full">As the VolPay gets enhanced new testcase cannot be configured in existing tool.</li>
                                    <li className="list-disc w-full">Despite the backend support due to fronend limitations all testcase was not configurable.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-3xl font-bold  min-w-44'>Outcomes</h1>
                        <div className='flex-col  space-y-8'>
                            <div className='flex-col mt-2'>
                                <ul className="px-6">
                                    <li className="list-disc w-full">Redesigned TestSuite can automate 70% of the testcase.</li>
                                    <li className="list-disc w-full">It saves valuable time of the manual testers.</li>
                                    <li className="list-disc w-full">TestCase configuration,automation and monitoring became easy.</li>
                                    <li className="list-disc w-full">Improved Quality Assurance at making sense.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-4xl font-bold  min-w-44'>My Role</h1>
                        <div className='flex-col'>
                            <p className='flex text-md'>
                                I was the part of the small team.There was no BA support so our team only had to design,develop end to end solutions.So I had opportunity to designed and developed the many functionalities from fronted to backend and DB architeture.</p>
                            <div className='flex-col mt-2'>
                                <ul className="px-6">
                                    <li className="list-disc w-full">Gathering the testing requirements and understanding new functionalities of the VolPay.</li>
                                    <li className="list-disc w-full">Based on that designed the solutions which includes UI,backend implementation and DB architure.</li>
                                    <li className="list-disc w-full">Redesigning and deveoping the existing profiles.</li>
                                    <li className="list-disc w-full">Design and develope new profiles and functionalities.</li>
                                    <li className="list-disc w-full">Improving the overall UI time to time as per testers feedback.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-4xl font-bold  min-w-44'>User Journey</h1>

                        <div className='flex space-x-4 w-full overflow-auto'>
                            <Image
                                src="/TestSuiteUserJourney.png"
                                alt={''}
                                width={600} height={500} priority quality={100} />
                        </div>
                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-4xl font-bold  min-w-44'>Process Highlights</h1>

                        <div className='flex space-x-4 w-full overflow-auto'>
                            <Image
                                src="/TestSuite Process Highlights.png"
                                alt={''}
                                width={600} height={500} priority quality={100} />
                        </div>
                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-4xl font-bold  min-w-44'>My Role</h1>
                        <div className='flex-col'>
                            <p className='flex text-md'>
                                *As the product is In-house development and due to company regulations screenshots are not uploaded to keep the details confidential. These are the mirror designs of the core profiles which I have designed.</p>
                            <div className='flex-col space-y-4 w-full overflow-auto'>
                                <Image
                                    src="/TC_TP.png"
                                    alt={''}
                                    width={600} height={500} priority quality={100} />
                                <Image
                                    src="/TP_Old_New.png"
                                    alt={''}
                                    width={600} height={500} priority quality={100} />
                            </div>
                        </div>
                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-4xl font-bold  min-w-44'>User Testing</h1>
                        <div className='flex-col'>
                            <div className='flex-col mt-2'>
                                <ul className="px-6">
                                    <li className="list-disc w-full">The design and development is been over year,so we were constantly collecting feedback from the VolPay QA team</li>
                                    <li className="list-disc w-full">Initially in testplan to differntiate testcases whole testcase box was colured for differnt levels.Which is now redesigned to colured sidebar of the box</li>
                                    <li className="list-disc w-full">Instead of two output comparison three output comparison was suggested.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex-col  space-y-8'>
                        <h1 className='flex text-4xl font-bold  min-w-44'>Conclusion</h1>
                        <p className='flex text-md'>
                            The newly redesigned testuite allows testers to configure and automated 70% more testcases. The redesigned testsuite saves the countless hours of the testing team.I learn design new solutions which can be simple and scalable for B2B product. I am glad to learn that even by making small changes, we are able to yield big impacts and create a great experience for users.</p>
                    </div>

                </div>

            </TracingBeam>
            <div className='pb-40'>

            </div>
        </div>
    )
}

export default page
