"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCard {
  icon: string
  title: string
  description: string
}
const services: ServiceCard[] = [
  {
    icon: '/services/listings.png',
    title: 'Manage Property\nListings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/services/bookings.png',
    title: 'Manage Customer\nBookings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/services/cleaning.png',
    title: 'Schedule House\nCleaning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/services/reviews.png',
    title: 'Monitor Guest\nReviews',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/services/expenses.png',
    title: 'Track & Report\nExpenses',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/services/support.png',
    title: 'Guest Inquiry\n& Support',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export function OurServices() {
  return (
    <section className="w-full pb-[75px] mt-[50px] px-4 sm:px-6 lg:px-8">
      <div className="cs-container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-[32px] font-bold text-black mb-4">
            Our{' '}
            <span className="text-[#E8384F]">Service</span>
          </h2>
          <p className="text-sm text-black max-w-2xl mx-auto font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-50px',
              }}
              className={`group p-6 rounded-[13px] lg:p-6 flex flex-col justify-between transition-all duration-300 ${index === 0 ? 'bg-white shadow-[0px_4px_90px_0px_rgba(215,205,207,0.47)]' : 'border-[#FAC4D2] border'}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
              }}
            >
              <div>
                {/* Icon */}
                <div className="mb-9 pt-12">
                    <Image src={service.icon} alt={service.title} width={64} height={64} className="object-contain" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-[14px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium text-black mb-9">
                  {service.description}
                </p>
              </div>

              {/* Read More Button */}
              <div className="mb-[30px]">
                <button className="border border-[var(--brandColor)] text-[var(--brandColor)] hover:bg-[var(--brandColor)] px-6 py-[10px]  rounded-full text-sm font-medium  hover:text-white transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
