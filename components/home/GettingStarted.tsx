"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
const steps = [
  {
    number: '01',
    icon: "/icons/add.png",
    title: 'Add requirements \n & sign up today',
  },
  {
    number: '02',
    icon: "/icons/connect.png",
    title: 'Connect with your CSM &\nonboarding team',
  },
  {
    number: '03',
    icon: "/icons/meet.png",
    title: 'Meet your STR\nAssistant next week',
  },
]

export function GettingStarted() {
  return (
    <section className="w-full bg-white pb-16 px-4 sm:px-6 lg:px-8">
      <div className="cs-container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-[32px] font-bold text-black mb-4">
            Getting Started is{' '}
            <span className="text-[var(--brandColor)]">Easy</span>
          </h2>
          <p className="text-sm text-black max-w-2xl mx-auto font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
                className="flex flex-col items-center relative z-10"
              >
                {/* Step Number Circle */}
                <div className="w-[70px] h-[70px] absolute -left-[18px] -top-[32px] rounded-full border-[5px] border-[var(--brandColor)] flex items-center justify-center bg-white z-20">
                  <span className="text-black font-medium text-3xl">
                    {step.number}
                  </span>
                </div>

                {/* Icon Card — overlaps behind the circle */}
                <div className="w-full bg-white border-2 border-[#FDEBF0] rounded-lg  px-8 pt-10 pb-8 flex items-center justify-center -mt-4 min-h-[188px]">
                  <Image className='w-auto h-auto object-contain' src={step.icon} alt={step.title} width={100} height={100} />
                </div>

                {/* Title */}
                <p className="text-center whitespace-pre-line text-xl font-semibold text-black mt-8">
                  {step.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
