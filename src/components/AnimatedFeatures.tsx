'use client';

import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

export default function AnimatedFeatures() {
  const features = [
    {
      title: "Innovative Solutions",
      description: "Cutting-edge AI technology tailored to your needs"
    },
    {
      title: "Expert Team",
      description: "Dedicated professionals with deep industry experience"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for your peace of mind"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
