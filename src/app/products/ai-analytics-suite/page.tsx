'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AIAnalyticsSuite() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">AI Analytics Suite</h1>
          
          <div className="relative h-64 rounded-xl mb-8 overflow-hidden">
            <Image
              src="/products/analytics-suite.svg"
              alt="AI Analytics Suite Dashboard"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Advanced Analytics Platform</h2>
            <p className="text-gray-600 mb-6">
              Our AI Analytics Suite is a comprehensive platform that transforms your raw data into actionable insights. 
              Powered by sophisticated machine learning algorithms, it provides real-time analytics and predictive modeling 
              to help businesses make data-driven decisions.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Real-time Analytics:</strong> Monitor your business metrics in real-time with customizable dashboards and alerts.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Custom Dashboards:</strong> Create personalized dashboards that focus on the metrics that matter most to your business.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Predictive Insights:</strong> Leverage machine learning to forecast trends and identify opportunities.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>API Integration:</strong> Seamlessly integrate with your existing tools and workflows through our robust API.
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Pricing</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-2xl font-bold text-blue-600 mb-2">Starting at $299/mo</p>
              <p className="text-gray-600">Enterprise pricing available for larger organizations.</p>
            </div>

            <div className="mt-8">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
