import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TracingBeam } from '@/components/ui/tracing-beam';
import { SparklesCore } from "@/components/ui/sparkles";
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';

function page() {
    return (
        <div className=' min-h-screen'>
            <TracingBeam className="px-6">
                <div className="h-[40rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center  relative z-20">
                        Take Register
                    </h1>

                </div>
                <div className='flex-col space-y-16 '>
                    <div className="flex gap-8">
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Live Demo</h1>
                        <iframe className='w-full h-[768px]'
                            src="https://parentpay.wistia.com/medias/0diawfj7ys"
                            frameBorder="0" allowFullScreen></iframe>

                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>The Challange</h1>
                        <p className='flex text-md'>
                            ParentPay&apos;s legacy product, SIMS, held a dominant 75% market share. The challenge was to modernize its &ldquo;take register&ldquo; functionality and integrate additional features like dinner registers, meal choices, and UK DfE codes. Teachers were accustomed to the existing system and its limitations. My task was to redesign the register system to support primary schools while ensuring scalability for secondary school requirements. This project required a deep understanding of user needs and a seamless transition from the old system to a new, user-friendly interface.</p>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Research</h1>
                        <div className='flex-col  space-y-8'>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'>Target audience</h2>
                                <ul>
                                    <li>UK Primary school teachers</li>
                                    <li>UK Secondary school teachers</li>
                                </ul>
                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'>Existing apps</h2>
                                <ul>
                                    <li>SIMS Legacy app</li>
                                    <li>Other - Bromcom,Arbor,Edulink</li>
                                </ul>
                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'> User needs</h2>
                                <ul>
                                    <li>Need to take register as quick as possible and move on to teaching</li>
                                    <li>Mark students as per the UK DFE code guidelines and add relative comment</li>
                                    <li>Ensure all students are marked to make sure safegaurding of students</li>
                                    <li>In secondary display all lesson attendace marks to teacher to keep informed abnout student&apos;s wherabouts</li>
                                    <li>Select meal choice of the students while taking register so canteen will be informed</li>
                                </ul>
                            </div>
                            <div className='flex-col'>
                                <h2 className='flex text-2xl font-bold'> User Pain Points</h2>
                                <ul>
                                    <li> For teacher taking register is one of the to-do thing and note the primary task</li>
                                    <li> Legacy system takes time to mark all students</li>
                                    <li> Admin has to chase teachers to mark all students and complete the register</li>
                                    <li> To take dinner register teacher had to navigate to another screen</li>
                                    <li> Cannot see the summary of the class on quick glance</li>
                                    <li> Marking student late becomes difficult in legacy system if students come in between teaching</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Findings and Analysis</h1>
                        <p className='flex text-md'>
                            Teachers wants complete register quickly and move on to teaching
                            Need a easy way to mark students ,add the comments and select meal choice
                            Taking register and dinner register shouldnt be the different process for teachers
                            Need a quiker way to mark late student
                            At the end of taking register teachers needs a summary
                            Admin needs to know accurate register status of all class in school</p>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>User Testing</h1>
                        <ul className='flex-col text-md'>
                            <li>Conducted user interviews for various features with users.</li>
                            <li>Conducted tree testing by using surveys with users</li>
                        </ul>
                    </div>
                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Designs</h1>

                        <div className='flex space-x-4 w-full overflow-auto'>
                            <Image
                                src="/SIMS.webp"
                                alt={''}
                                width={600} height={500} priority quality={100} />
                            <Image
                                src="/myregister.png"
                                alt={''}
                                width={500} height={500} priority quality={100} />
                            <Image
                                src="/take-register.png"
                                alt={''}
                                width={600} height={500} priority quality={100} />
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <h1 className='flex text-4xl font-bold max-w-44 min-w-44'>Conclusion</h1>
                        <p className='flex text-md'>
                            The new register system for ParentPay successfully modernizes the &ldquo;take register&ldquo;functionality, addressing the limitations of the legacy system. By incorporating features like meal choices, UK DfE codes, and a summary view, the system meets the needs of both primary and secondary school teachers. The streamlined process allows teachers to quickly and accurately mark attendance, reducing the time spent on administrative tasks and increasing their focus on teaching. Admins benefit from real-time updates and a comprehensive view of the attendance status across the school, ensuring student safety and efficient school management.</p>
                    </div>

                </div>

            </TracingBeam>
            <div className='pb-40'>

            </div>
        </div>
    )
}

export default page
