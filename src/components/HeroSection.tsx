import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className='h-auto md:h-[100vh] text-white w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className='my-20 space-y-8 relative z-10 w-full text-center'>
            <h1 
            className=' text-4xl md:text-7xl font-bold bg-clip-text text-transparent from-neutral-50 to-neutral-400 bg-gradient-to-b'
            >Master the Art of the Music
            </h1>

            <p className=' font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
                Dive into our comprehensive music courses and transform you musical journey today. whether you are a beginner or looking to refine your skills, join us to unlock your true potential
            </p>

            <div className=''>
                <Link href={"/courses"}>
                    <Button 
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                        Explore Courses
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection