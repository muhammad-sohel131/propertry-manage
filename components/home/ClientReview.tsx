import React from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface Review {
  id: number
  name: string
  image: string
  text: string
  rating: number
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Jenny Wilson',
    image: '/reviews/jenny.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
  {
    id: 2,
    name: 'Esther Howard',
    image: '/reviews/esther.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Robert Fox',
    image: '/reviews/robert.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
]

export function ClientReviews() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-[32px] font-bold text-black mb-4">
            Check Our Clients <span className="text-[var(--brandColor)]">Review</span>
          </h2>
          <p className="text-sm text-black max-w-2xl mx-auto font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Cards Area with subtle gray background */}
      <div className='mb-5'>
        {/* Mobile: vertical stack, Desktop: horizontal overflow carousel */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:flex-nowrap md:justify-center md:items-stretch md:gap-8">
          {reviews.map((review, index) => {
            const isCenter = index === 1
            return (
              <div
                key={review.id}
                className={`
                  flex flex-col sm:flex-row items-center gap-[30px] p-9 rounded-xl
                  w-full max-w-[530px] md:max-w-none md:w-[500px] md:shrink-0
                  ${isCenter
                    ? 'bg-white shadow-[0_4px_77.4px_0_rgba(136,136,136,0.41)] z-10 relative'
                    : 'bg-[#F6F6F6] z-0'
                  }
                `}
              >
                <Image
                  src={review.image}
                  alt={review.name}
                  className="w-[100px] h-[100px] rounded-full object-cover shrink-0"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col text-center sm:text-left">
                  <h4 className="text-xl font-bold text-black mb-1">
                    {review.name}
                  </h4>
                  <p className="text-sm text-black mb-3">
                    {review.text}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating
                            ? 'fill-[#FF9D00] text-[#FF9D00]'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}