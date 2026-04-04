"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import PrimaryBtn from '../shared/PrimaryBtn'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Services',
      href: '#services',
    },
    {
      name: 'Pricing',
      href: '#pricing',
    },
    {
      name: 'Blog',
      href: '#',
    },
    {
      name: 'Resources',
      href: '#',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .filter(link => link.href.startsWith('#'))
        .map(link => link.href.substring(1))

      const scrollPosition = window.scrollY + 100 

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false) 
  }
  return (
    <header className="sticky top-0 z-50 w-full min-h-[89px] bg-white shadow-[0px_4px_62px_0px_rgba(250,196,210,0.63)]">
      <div className="cs-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Image src="/logo.png" alt='logo' width={125} height={45} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex lg:space-x-8 space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`lg:text-[18px] text-[16px] transition-colors cursor-pointer border-b-2 ${link.href === `#${activeSection}` ? 'text-[var(--brandColor)] border-[var(--brandColor)] pb-1 font-bold' : 'text-[#1E1E1E] border-transparent font-normal hover:text-[var(--brandColor)]'}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <PrimaryBtn text="Schedule A Meeting" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${link.href === `#${activeSection}` ? 'text-[var(--brandColor)] bg-red-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                {link.name}
              </button>
            ))}
            <div className="px-3 py-3">
              <button className="bg-[var(--brandColor)] justify-center w-full cursor-pointer text-white px-6 py-[18px] rounded-[5px] font-bold text-sm flex items-center">
              Schedule A Meeting
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
