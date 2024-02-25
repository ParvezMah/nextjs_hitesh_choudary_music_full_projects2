"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicSchoolContent = [
    {
      title: "Mastering the Basics",
      description:
        "Learn the fundamental elements of music theory and practice in this introductory course. Ideal for beginners who are just starting their musical journey.",
    },
    {
      title: "Exploring Genres",
      description:
        "ve into various musical genres, from classical and jazz to rock and pop, and understand their unique characteristics. Suitable for students wishing to broaden their musical horizons.",
    },
    {
      title: "Instrument Mastery",
      description:
        "Choose your preferred instrument and gain comprehensive, hands-on training from experienced instructors. Perfect for those aiming to hone their instrument skills.",
    },
    {
      title: "Music Production 101",
      description:
        "Discover the art of music production, including recording, mixing, and mastering. A must-attend for anyone interested in the technical side of music.",
    },
    {
      title: "Performance Techniques for Captivating Audiences",
      description:
        "Improve your stage presence and learn effective performance techniques to captivate your audience. Geared towards aspiring performers.",
    },
  ];
  

function WhyChooseUs() {
  return (
    <div className="text-white">
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs