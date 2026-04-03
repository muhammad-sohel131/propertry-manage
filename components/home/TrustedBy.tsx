import Image from 'next/image'
import React from 'react'
export function TrustedBy() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto">
        <h3 className="text-center text-xl font-semibold text-[#000] mb-10">
          Trusted by leaders in 50+ industries
        </h3>

        {/* Logos Container */}
        <div className="bg-[#F6F6F6] py-9 px-6 rounded-lg flex flex-wrap justify-between items-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
          {/* Airbnb */}
          <Image className="object-contain" src="/companies/airbnb.svg" alt="Airbnb" width={110} height={60} />
          

          {/* Booking.com */}
          <Image className="object-contain" src="/companies/booking.svg" alt="Booking.com" width={160} height={60} />

          {/* Vrbo */}
          <Image className="object-contain" src="/companies/vrbo.svg" alt="Vrbo" width={150} height={60} />

          {/* Tripadvisor */}
            <Image className="object-contain" src="/companies/tripura.svg" alt="Tripadvisor" width={180} height={60} />

          {/* Agoda */}
            <Image className="object-contain" src="/companies/agoda.svg" alt="Agoda" width={80} height={60} />

          {/* Expedia */}
            <Image className="object-contain" src="/companies/expedia.svg" alt="Expedia" width={188} height={60} />

          {/* HomeToGo */}
            <Image className="object-contain" src="/companies/home.svg" alt="HomeToGo" width={78} height={60} />
        </div>
      </div>
    </section>
  )
}
