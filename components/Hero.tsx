'use client'

import Link from "next/link"
import { useState } from "react"
import { FaLocationArrow } from "react-icons/fa6"
import { IoMenu, IoClose } from "react-icons/io5"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Projects from "./Projects"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#projects", label: "My projects" },
    { href: "#work-ex", label: "Work Ex" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="h-screen grid lg:grid-cols-12 items-center lg:justify-between xl:justify-between w-full relative">
      <div className="flex-col sm:space-y-2 text-4xl md:text-3xl font-thin w-fit md:col-span-4 lg:col-span-3 space-y-12">
        <h1 className="flex gap-2 w-fit">I can <p className="font-semibold">Design</p></h1>
        <h1 className="flex gap-2 w-fit">I can <p className="font-semibold">Code</p></h1>
        <h1 className="flex gap-2 w-fit">I keep <p className="font-semibold w-fit">Learning...</p></h1>
      </div>

      <div className="flex-col order-first col-span-8  lg:order-2 xl:order-2  lg:col-span-6   lg:px-20 xl:px-20 space-y-4">
        <h1 className="flex gap-2 w-full text-center text-4xl">Hi, I am</h1>
        <div className="text-7xl text-left lg:text-8xl font-bold w-full">
          <h1 className="justify-start lg:text-left xl:text-left">Shubham</h1>
          <h1 className="justify-end lg:text-right xl:text-right">Gagare</h1>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex order-last col-span-3 md:col-span-3 justify-end">
        <div className="flex-col text-right space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden absolute top-4 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 text-2xl">
              <IoMenu />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}