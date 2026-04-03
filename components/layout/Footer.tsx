import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const companyLinks = [
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Works',
    href: '#',
  },
  {
    name: 'Career',
    href: '#',
  },
]
const helpLinks = [
  {
    name: 'Customer Support',
    href: '#',
  },
  {
    name: 'Delivery Details',
    href: '#',
  },
  {
    name: 'Terms & Conditions',
    href: '#',
  },
  {
    name: 'Privacy Policy',
    href: '#',
  },
]
const resourceLinks = [
  {
    name: 'Free eBooks',
    href: '#',
  },
  {
    name: 'Development Tutorial',
    href: '#',
  },
  {
    name: 'How to - Blog',
    href: '#',
  },
  {
    name: 'Youtube Playlist',
    href: '#',
  },
]
const socialLinks = [
  {
    icon: FaTwitter,
    href: '#',
    label: 'Twitter',
  },
  {
    icon: FaFacebookF,
    href: '#',
    label: 'Facebook',
  },
  {
    icon: FaInstagram,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: FaGithub,
    href: '#',
    label: 'GitHub',
  },
]
export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Google Logo */}
            <div className="mb-5">
              <Image src="/logo.png" alt="Google Logo" width={106} height={38} />
            </div>

            <p className="text-sm text-[#52525B] font-plusJakarta max-w-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-9">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-[#27272A] hover:text-[var(--brandColor)] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[16px] font-bold text-[#18181B] mb-6">
              Company
            </h4>
            <ul className="space-y-6">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#18181B] font-medium hover:text-[var(--brandColor)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-[16px] font-bold text-[#18181B] mb-6">
              Help
            </h4>
            <ul className="space-y-6">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#18181B] font-medium hover:text-[var(--brandColor)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-[16px] font-bold text-[#18181B] mb-6">
              Resources
            </h4>
            <ul className="space-y-6">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#18181B] font-medium hover:text-[var(--brandColor)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#230B41] pt-[18px] pb-[27px]">
        <p className="text-center font-poppins text-sm font-normal text-white">
          © Copyright 2024, All Rights Reserved by XYz
        </p>
      </div>
    </footer>
  )
}
