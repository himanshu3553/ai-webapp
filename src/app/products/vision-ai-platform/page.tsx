'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VisionAIPlatform() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Vision AI Platform</h1>
          
          <div className="relative h-64 rounded-xl mb-8 overflow-hidden">
            <Image
              src="/products/vision-ai.svg"
              alt="Vision AI Platform Interface"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Computer Vision Solution</h2>
            <p className="text-gray-600 mb-6">
              Our Vision AI Platform transforms visual data into actionable insights. Whether you need automated 
              quality control, security monitoring, or custom computer vision applications, our platform provides 
              the tools and infrastructure to bring your vision to life.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Object Detection:</strong> Accurate and fast object detection with state-of-the-art models.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Quality Control:</strong> Automated visual inspection for manufacturing and production.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Real-time Monitoring:</strong> Live video analysis and instant alerts for critical events.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Custom Model Training:</strong> Train specialized models on your unique visual data.
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Pricing</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-2xl font-bold text-green-600 mb-2">Starting at $399/mo</p>
              <p className="text-gray-600">Custom pricing available based on processing requirements.</p>
            </div>

            <div className="mt-8">
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
