'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVision Inc.",
    content: "The AI solutions provided by this team have transformed our business operations. Our efficiency has improved by 200% since implementation.",
    image: "/testimonial1.jpg" // You'll need to add actual images
  },
  {
    name: "Michael Chen",
    role: "CTO, Innovation Labs",
    content: "Their expertise in AI technology is unmatched. The custom solutions they developed for us have given us a significant competitive advantage.",
    image: "/testimonial2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Operations, Future Corp",
    content: "Outstanding service and cutting-edge AI solutions. They've helped us automate complex processes that we thought were impossible to streamline.",
    image: "/testimonial3.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600" />
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.content}"
                </blockquote>
                <cite className="not-italic">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </cite>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
