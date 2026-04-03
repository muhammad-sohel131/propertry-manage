"use client"
import { useState } from 'react'
import { CheckIcon, XIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const features = [
  '20,000+ of PNG & SVG graphics',
  'Access to 100 million stock images',
  'Upload custom icons and fonts',
  'Unlimited Sharing',
  'Upload graphics & video in up to 4k',
  'Unlimited Projects',
  'Instant Access to our design system',
  'Create teams to collaborate on designs',
]
const plans = [
  {
    name: 'Freebie',
    description:
      'Ideal for individuals who need quick access to basic features.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    featured: false,
    included: [true, true, false, false, false, false, false, false],
  },
  {
    name: 'Professional',
    description:
      'Ideal for individuals who who need advanced features and tools for client work.',
    monthlyPrice: 25,
    yearlyPrice: 19,
    featured: true,
    included: [true, true, true, true, true, true, false, false],
  },
  {
    name: 'Enterprise',
    description:
      'Ideal for businesses who need personalized services and security for large teams.',
    monthlyPrice: 100,
    yearlyPrice: 75,
    featured: false,
    included: [true, true, true, true, true, true, true, true],
  },
]
export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  return (
    <section className="w-full bg-white py-16  px-4 sm:px-6 lg:px-8">
      <div className="cs-container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-[40px] font-bold text-[#191D23] mb-4">
            Airnbn Assistent{' '}
            <span className="text-[var(--brandColor)]">pricing</span>
          </h2>
          <p className="text-[#191D23] text-xl font-normal mb-9">
            Choose a plan that&apos;s right for you
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14 relative">
          <span
            className={`text-[16px] font-normal ${!isYearly ? 'text-[#191D23]' : 'text-gray-400'}`}
          >
            Pay Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${isYearly ? 'bg-[#E8384F]' : 'bg-gray-300'}`}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
              animate={{
                left: isYearly ? '1.5rem' : '0.25rem',
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
            />
          </button>

          <span
            className={`text-[16px] font-normal ${isYearly ? 'text-[#191D23]' : 'text-gray-400'}`}
          >
            Pay Yearly
          </span>

          {/* Save 25% annotation */}
          <div className="absolute hidden left-1/2 translate-x-32 -top-5 md:flex items-center gap-1">
            <Image src="/priceArrow.png" alt="Save 25%" width={100} height={24} />
            <span className="text-[var(--brandColor)] text-lg font-medium mt-10">Save 25%</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid mt-[90px] grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={plan.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: planIndex * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className={`group p-6 rounded-[13px] lg:p-6 flex flex-col justify-between transition-all duration-300 ${planIndex === 1 ? 'bg-[var(--brandColor)] shadow-[0px_4px_90px_0px_rgba(215,205,207,0.47)]' : 'border-[#FAC4D2] border bg-white'}`}
            >
              {/* Plan Name */}
              <h3
                className={`text-[22px] font-manrope font-bold mb-3 ${plan.featured ? 'text-white' : 'text-[#191D23]'}`}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`text-[16px] font-normal font-manrope mb-5 ${plan.featured ? 'text-[#F7F8F9]' : 'text-[#64748B]'}`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className={`text-[56px] font-medium font-manrope ${plan.featured ? 'text-white' : 'text-[#191D23]'}`}
                >
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span
                  className={`text-[16px] font-light font-manrope ${plan.featured ? 'text-[#F7F8F9]' : 'text-[#4B5768]'}`}
                >
                  / Month
                </span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-2 font-manrope mb-[50px] rounded-[4px] font-semibold text-[16px] transition-colors ${plan.featured ? 'bg-white text-[var(--brandColor)] hover:bg-gray-50' : 'border-[1.5px] border-[var(--brandColor)] text-[var(--brandColor)] hover:bg-[var(--brandColor)] hover:text-white'}`}
              >
                Get Started Now
              </button>


              {/* Features */}
              <ul className="space-y-3 flex-grow">
                {features.map((feature, featureIndex) => {
                  const included = plan.included[featureIndex]
                  return (
                    <li key={featureIndex} className="flex items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 ${included ? 'bg-[#FAC4D2]' : plan.featured ? 'bg-white' : 'bg-[#F7F8F9]'}`}
                      >
                        {included ? (
                          <CheckIcon
                            className={`w-4 h-4 ${plan.featured ? 'text-[#F16388]' : 'text-[#E8384F]'}`}
                          />
                        ) : (
                          <XIcon
                            className={`w-4 h-4 ${plan.featured ? 'text-[#4B5768]' : 'text-[#191D23]'}`}
                          />
                        )}
                      </div>
                      <span
                        className={`text-[16px] font-manrope ${included ? (plan.featured ? 'text-white' : 'text-[#191D23]') : plan.featured ? 'text-white' : 'text-[#A0ABBB]'}`}
                      >
                        {feature}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
