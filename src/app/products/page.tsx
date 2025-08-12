'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const products = [
  {
    title: "AI Analytics Suite",
    description: "Advanced analytics platform powered by machine learning for real-time business insights.",
    price: "Starting at $299/mo",
    features: ["Real-time analytics", "Custom dashboards", "Predictive insights", "API integration"],
    path: "/products/ai-analytics-suite",
    image: "/products/analytics-suite.svg"
  },
  {
    title: "Smart Assistant Pro",
    description: "Enterprise-grade AI assistant for automating routine tasks and improving productivity.",
    price: "Starting at $199/mo",
    features: ["Natural language processing", "Task automation", "Integration with popular tools", "24/7 availability"],
    path: "/products/smart-assistant-pro",
    image: "/products/smart-assistant.svg"
  },
  {
    title: "Vision AI Platform",
    description: "Computer vision solution for automated visual inspection and analysis.",
    price: "Starting at $399/mo",
    features: ["Object detection", "Quality control", "Real-time monitoring", "Custom model training"],
    path: "/products/vision-ai-platform",
    image: "/products/vision-ai.svg"
  }
];

export default function Products() {
  const router = useRouter();
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Products
        </motion.h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => router.push(product.path)}
                  className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
