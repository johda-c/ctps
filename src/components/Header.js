'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/images/logo.jpeg" 
                alt="CTPS Logo" 
                width={180} 
                height={60} 
                className="h-15 w-auto"
              />
            </Link>
          </div>

          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <ul className={`md:flex md:items-center md:space-x-8 font-medium ${
            mobileMenuOpen 
              ? 'absolute top-20 left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-6' 
              : 'hidden'
          } md:static md:shadow-none`}>
            <li><Link href="/#home" className="hover:text-primary">Home</Link></li>
            <li><Link href="/#services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/#about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/#permit" className="hover:text-primary">Permit Information</Link></li>
            <li><Link href="/#contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
