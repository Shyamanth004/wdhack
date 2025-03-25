import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Guna Shekar",
    role: "Software Engineer",
    company: "TechCorp",
    image: "/src/public/guna.jpg",
    quote: "NeuroHire helped me find a workplace that truly values my unique perspective and problem-solving abilities.",
    neurodiversity: "Autism"
  },
  {
    name: "Vakamullu Mahesh",
    role: "UX Designer",
    company: "DesignHub",
    image: "/src/public/mahesh.jpg",
    quote: "The platform's focus on skills rather than traditional interviews made all the difference in my job search.",
    neurodiversity: "Dyslexia"
  },
  {
    name: "Vangapandu Karthik",
    role: "Data Analyst",
    company: "DataFlow",
    image: "/src/public/karthik.jpg",
    quote: "Finally, a hiring platform that understands and celebrates neurodiversity in the workplace.",
    neurodiversity: "ADHD"
  },
  {
    name: "Kona Dinesh",
    role: "Product Manager",
    company: "InnovateNow",
    image: "/src/public/dinesh.jpg",
    quote: "Being part of an inclusive workplace has given me the confidence to showcase my true abilities.",
    neurodiversity: "Asperger’s Syndrome"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full relative overflow-hidden">
        
        {/* Sliding Container */}
        <div className="flex transition-transform duration-700 ease-in-out rounded-xl"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex min-w-full items-center gap-8 p-8 bg-white dark:bg-slate-800 rounded-xl">
              {/* Left Side - Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-28 h-28 rounded-full object-cover"
              />

              {/* Right Side - Details */}
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {testimonial.role} at {testimonial.company}
                </p>
                <h3 className="text-sm font-bold text-slate-600 dark:text-slate-400">{testimonial.neurodiversity}</h3>
                <div className="flex my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
