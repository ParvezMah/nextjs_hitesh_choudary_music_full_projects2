'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const musicTestimonials = [
  {
    quote: "I've grown so much as an artist since I joined the Music School. The instructors are world-class and the environment is incredibly inspiring.",
    name: "John Doe",
    title: "Violin Student"
  },
  {
    quote: "The Music School is a nurturing environment that has allowed me to explore my musical talents and learn from some of the best in the industry.",
    name: "Jamie Lee",
    title: "Violin Student"
  },
  {
    quote: "I've grown so much as an artist since I joined the Music School. The instructors are world-class and the environment is incredibly inspiring.",
    name: "Darrick Shaw",
    title: "Violin Student"
  },
  {
    quote: "I've grown so much as an artist since I joined the Music School. The instructors are world-class and the environment is incredibly inspiring.",
    name: "Magrell Stoinis",
    title: "Violin Student"
  },
  {
    quote: "I've grown so much as an artist since I joined the Music School. The instructors are world-class and the environment is incredibly inspiring.",
    name: "Velin Melcom",
    title: "Violin Student"
  },
]

function MusicSchoolTestimonials() {
  return ( 
    <div className='text-white  h-[50rem] dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center'>
      <h2 className="text-5xl font-bold mb-10 text-center">Hear Our harmony : Voice of our success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default MusicSchoolTestimonials;