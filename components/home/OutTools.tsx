"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const tools = [
  "/tools/price.png",
  "/tools/wheelhouse.png",
  "/tools/behond.png",
  "/tools/hostfully.png",
  "/tools/guesty.png",
  "/tools/lodgify.png",
  "/tools/hostfully.png",
  "/tools/guesty.png",
  "/tools/lodgify.png",
];

export function OurTools() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[136px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-[32px] font-bold text-black mb-4">
            Our <span className="text-[var(--brandColor)]">Tools</span>
          </h2>
          <p className="text-sm text-black max-w-2xl mx-auto font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="bg-[#F6F6F6] px-6 pt-[38px] pb-[85px]">
          <div className="grid cs-container grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-9">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: "-30px",
                }}
                className={`bg-white h-[140px] rounded-xl px-6 py-8 flex items-center justify-center cursor-pointer hover:shadow-[0px_4px_30.3px_0px_rgba(255,138,168,0.28)] ${index === 0 ? 'shadow-[0px_4px_30.3px_0px_rgba(255,138,168,0.28)]' : ''}`}
              >
                <Image src={tool} alt="Tool" width={180} height={80} className="w-auto h-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
