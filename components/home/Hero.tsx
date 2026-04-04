"use client"
import { motion } from 'framer-motion'
import PrimaryBtn from '../shared/PrimaryBtn'
import Link from 'next/link'
import Image from 'next/image'
export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[600px] bg-[#FAFAFA] overflow-hidden flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Floating Elements (Hidden on Mobile) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 max-w-7xl mx-auto">
        {/* Airbnb Icon */}
        <motion.div
          className="absolute top-[15%] left-[15%]"
          animate={{
            y: [0, -15, 0],
            rotate: [-10, -5, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
        >
           <Image src="/shape-one.png" alt="Booking.com" width={80} height={80} />
        </motion.div>

        {/* Booking.com Icon */}
        <motion.div
          className="absolute top-[20%] right-[18%]"
          animate={{
            y: [0, 10, 0],
            rotate: [15, 20, 15],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <Image src="/shape-four.png" alt="Booking.com" width={65} height={65} />
        </motion.div>

        {/* Vrbo Icon */}
        <motion.div
          className="absolute bottom-[25%] left-[20%]"
          animate={{
            y: [0, -12, 0],
            rotate: [-15, -20, -15],
          }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <Image src="/shape-three.png" alt="Vrbo" width={60} height={60} />
        </motion.div>

        {/* Tripadvisor Icon */}
        <motion.div
          className="absolute bottom-[20%] right-[22%]"
          animate={{
            y: [0, 15, 0],
            rotate: [-25, -20, -25],
          }}
          transition={{
            repeat: Infinity,
            duration: 5.5,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <Image src="/shape-two.png" alt="Tripadvisor" width={64} height={64}/>
        </motion.div>

        {/* Decorative Dots */}
        <div className="absolute top-[25%] left-[8%] w-3 h-3 bg-indigo-500 rounded-full opacity-80" />
        <div className="absolute top-[45%] left-[15%] w-3 h-3 bg-red-500 rounded-full opacity-80" />
        <div className="absolute bottom-[20%] left-[10%] w-2 h-2 bg-yellow-400 rounded-full opacity-80" />

        <div className="absolute top-[20%] right-[45%] w-3 h-3 bg-emerald-400 rounded-full opacity-80" />
        <div className="absolute top-[30%] right-[12%] w-3 h-3 bg-yellow-400 rounded-full opacity-80" />
        <div className="absolute bottom-[35%] right-[10%] w-2 h-2 bg-blue-800 rounded-full opacity-80" />
        <div className="absolute bottom-[20%] right-[45%] w-3 h-3 bg-cyan-400 rounded-full opacity-80" />

      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center lg:mt-[165px] mt-4 lg:mb-[90px] mb-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#000] mb-2">
          Airbnb Assistants For
        </h1>
        <h2 className="text-3xl sm:text-4xl font-medium text-[#000] mb-6">
          Property Management
        </h2>

        <p className="mt-4 text-[14px]  text-[#000] max-w-2xl mx-auto font-medium mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <PrimaryBtn text="Schedule A Meeting" />

          <Link
            href="#"
            className="text-sm font-medium text-[#000] underline decoration-[#000] underline-offset-4 transition-colors"
          >
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
