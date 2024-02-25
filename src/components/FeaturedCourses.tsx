'use client'

import Link from "next/link";
import CourseData from "../data/music_courses_data.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
  }


function FeaturedCourses() {

    const featuredCourses = CourseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="text-white py-16 bg-gray-900">
        <div className="text-center space-y-6">
            <h1 className="text-5xl text-teal-600 font-semibold tracking-wide">FEATURED COURSES</h1>
            <p className="mt-2 text-4xl text-white sm:text-4xl font-extrabold">Learn With the Best</p>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=>(
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
                        >
                            <div
                            className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow"
                            >
                                <p className="text-lg sm:text-xl text-black my-4 dark:text-neutral-200">
                                    {course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}
                                className="mt-2"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 hover:text-white bg-white hover:bg-gray-700 transition duration-200"
            >
                View All Courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses