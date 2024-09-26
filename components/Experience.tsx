'use client'

import { workExperience } from '@/data'
import Link from 'next/link'
import React, { useState } from 'react'

interface ExperienceProps {
  className?: string
}


export default function Experience({ className = '' }: ExperienceProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={`flex-col space-y-8 h-fit ${className}`}>
      <h1 className='text-4xl font-semibold py-8'>Work Experience - 5+ Years</h1>
      <div className='flex-col space-y-8'>
        {workExperience.map((experience, index) => (
          <Link
            href={experience.link}
            className='flex-col space-y-4'
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div >
              <h2 className='text-2xl underline'>{experience.title}</h2>
              <h3 className='text-xl text-muted-foreground'>{experience.time}</h3>
            </div>
            <p className={`transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
              {experience.desc}
            </p>
            <div className={`space-y-2 transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
              {experience.details.map((detail, detailIndex) => (
                <div className='flex items-center space-x-2' key={detailIndex}>
                  <div className='w-1 h-1 bg-black-100 rounded-full' aria-hidden="true"></div>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}