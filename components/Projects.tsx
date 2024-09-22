'use client'

import { projects } from '@/data'
import Link from 'next/link'
import React, { useState } from 'react'

interface ProjectsProps {
    className?: string
}

export default function Projects({ className = '' }: ProjectsProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className={`flex-col space-y-8 h-full ${className}`}>
            <h1 className='text-4xl font-semibold py-8'>My Projects</h1>
            <div className='flex-col space-y-8'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='flex-col space-y-4'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <h2 className='text-2xl underline'>
                            <Link href={project.link || '#'}>
                                {project.title}
                            </Link>
                        </h2>
                        <p className={`transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            } overflow-hidden`}>
                            {project.des}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}