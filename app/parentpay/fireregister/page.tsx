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
                        Fire Register
                    </h1>

                </div>
                <div className='flex-col space-y-16 '>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>The Challange</h1>
                        <p className='flex text-md'>
                            Teachers in UK schools still use paper registers for fire drills and evacuations. Monitoring missing pupils during a fire drill or evacuation is difficult. During evacuation teachers take registers on the ground, and the admin ensures the school is empty. The admin (usually the fire warden) monitors the school register status and the list of missing pupils.</p>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Research</h1>
                        <div className='flex-col  space-y-8'>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'>Methodology</h2>
                                <ul>
                                    <li>Conduct surveys and interviews with teachers, admins, and fire wardens.</li>
                                    <li>Observe fire drills and evacuation processes in schools.</li>
                                </ul>
                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'>Participants</h2>
                                <ul>
                                    <li>Teachers from different year groups.</li>
                                    <li>School administrators and fire wardens.</li>
                                    <li>IT staff managing the school MIS (Management Information System).</li>
                                </ul>
                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'> User needs</h2>
                                <div className='flex-col'>
                                    <h3 className='flex text-xl font-bold mt-4'>Teachers</h3>
                                    <ul>
                                        <li>Quick and easy access to the register during fire drills.</li>
                                        <li>Ability to mark attendance quickly and accurately.</li>
                                        <li>Instant notification of missing pupils.</li>
                                    </ul>
                                </div>
                                <div className='flex-col'>
                                    <h3 className='flex text-xl font-bold mt-4'>Admins/Fire Wardens</h3>
                                    <ul>
                                        <li>Real-time updates on the status of all classes.</li>
                                        <li>A comprehensive view of missing pupils across the school.</li>
                                        <li>Assurance that all pupils are accounted for.</li>
                                    </ul>
                                </div>

                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'> User Pain Points</h2>
                                <div className='flex-col'>
                                    <h3 className='flex text-xl font-bold mt-4'>Teachers</h3>
                                    <ul>
                                        <li>Time-consuming process of using paper registers.</li>
                                        <li>Risk of human error in marking attendance.</li>
                                        <li>Difficulty in ensuring all pupils are safe and accounted for.</li>
                                    </ul>
                                </div>
                                <div className='flex-col'>
                                    <h3 className='flex text-xl font-bold mt-4'>Admins/Fire Wardens</h3>
                                    <ul>
                                        <li>Delays in receiving attendance information.</li>
                                        <li>Challenges in coordinating with teachers on the ground.</li>
                                        <li>Inefficiency in tracking and locating missing pupils.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Findings and Analysis</h1>
                        <p className='flex text-md'>
                            The current paper-based system is slow and prone to errors. There&apos;s a lack of real-time communication between teachers and admins during emergencies. Delays in identifying and locating missing pupils can lead to serious safety risks.</p>
                    </div>

                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Journey</h1>

                        <div className='flex-col space-y-4 w-full overflow-auto'>
                            <Image
                                src="/fire_journey.png"
                                alt={''}
                                width={900} height={900} priority quality={100} />
                            <Image
                                src="/fire_journey2.png"
                                alt={''}
                                width={900} height={900} priority quality={100} />

                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Wireframes</h1>

                        <div className='flex-col space-y-4 w-full overflow-auto'>
                            <Image
                                src="/fire3.png"
                                alt={''}
                                width={900} height={900} priority quality={100} />
                            <Image
                                src="/fire.png"
                                alt={''}
                                width={900} height={900} priority quality={100} />

                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Testing</h1>
                        <p className='flex text-md'>
                            Conduct usability tests with teachers and admins using the digital system. Collect feedback on the ease of use, efficiency, and accuracy. Iterate on the design based on feedback to address any issues.</p>
                    </div>

                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Conclusion</h1>
                        <p className='flex text-md'>
                            Implementing a digital fire register system in UK schools can significantly improve the efficiency and accuracy of attendance marking during fire drills and evacuations. By providing real-time updates and streamlined communication, the system enhances pupil safety and simplifies the roles of teachers and admins. The proposed solution addresses the major pain points of the current paper-based system and offers a more reliable and user-friendly alternative.</p>
                    </div>

                </div>

            </TracingBeam>
            <div className='pb-40'>

            </div>
        </div>
    )
}

export default page
