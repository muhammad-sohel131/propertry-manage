"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import PrimaryBtn from "../shared/PrimaryBtn";
import Image from "next/image";
const reasons = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team",
];
export function WhyChooseUs() {
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-5">
      <div className="cs-container mx-auto bg-[#FDEBF0] border border-[#F8BECD] rounded-[33px] px-8 md:px-12 lg:px-16 py-8 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-10 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="z-10 relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-[26px]">
              Few Reasons Why you <br />
              Choose us?
            </h2>

            <p className="text-black mb-[30px] max-w-md font-semibold text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <ul className="space-y-5 mb-12">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAC4D2] flex items-center justify-center flex-shrink-0">
                    <Check
                      className="w-3 h-3 text-[var(--brandColor)]"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="font-bold text-[#1E1E1E] text-[16px]">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>

            <PrimaryBtn text="Schedule A Meeting" />
          </div>

          {/* Right Column - Visual Composition */}
          <div className="relative h-[450px] md:h-[550px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            {/* Large Pink Circle Background */}
            <div className="absolute xl:w-[570px] lg:w-[500px] md:w-[550px] w-[500px] lg:right-0 top-1/2 -translate-y-1/2  z-0">
              <Image
                src="/icons/shape.png"
                alt="Shape"
                width={570}
                height={400}
              />
            </div>

            {/* Main Person Image */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="absolute xl:top-[32px] lg:top-[88px] md:top-[0px] -top-[65px] xl:right-32 lg:right-32 md:right-48  z-10 xl:w-[327px] lg:w-[270px]"
            >
              <Image
                src="/icons/man.png"
                className="w-auto h-auto object-contain"
                width={327}
                height={347}
                alt="person"
              />
            </motion.div>

            {/* Floating Property Card */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="absolute top-20 lg:top-24 xl:top-16 -left-5 lg:-left-12 xl:left-0 z-20"
            >
              <Image
                src="/icons/price.png"
                alt="Property"
                width={254}
                height={105}
                className="xl:w-auto h-auto lg:w-[200px] object-contain"
              />
            </motion.div>

            {/* Floating App Icons Grid */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
              className="absolute top-26 lg:top-12 xl:top-0 -right-2 sm:-right-6 lg:-right-4 z-20"
            >
              <Image
                src="/icons/company.png"
                alt="App Icons"
                width={159}
                height={159}
                className="xl:w-auto h-auto lg:w-[200px] object-contain"
              />
            </motion.div>

            {/* Floating Calendar Widget */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="absolute bottom-10 lg:bottom-16 xl:bottom-12 left-0 lg:-left-24 xl:-left-12 z-3"
            >
              <Image
                src="/icons/calendar.png"
                alt="Calendar"
                width={211}
                height={170}
                className="xl:w-auto h-auto w-[200px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
