'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SmartAssistantPro() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Smart Assistant Pro</h1>
          
          <div className="relative h-64 rounded-xl mb-8 overflow-hidden">
            <Image
              src="/products/smart-assistant.svg"
              alt="Smart Assistant Pro Interface"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Enterprise AI Assistant</h2>
            <p className="text-gray-600 mb-6">
              Smart Assistant Pro is your team's intelligent productivity companion. Designed for enterprise use,
              it streamlines workflows, automates routine tasks, and provides instant assistance to your team members
              24/7, helping you achieve more with less effort.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Natural Language Processing:</strong> Communicate naturally with an AI that understands context and intent.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Task Automation:</strong> Automate repetitive tasks and workflows with intelligent scheduling.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Tool Integration:</strong> Works seamlessly with your favorite productivity tools and platforms.
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>24/7 Availability:</strong> Round-the-clock assistance for your global team.
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Pricing</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-2xl font-bold text-purple-600 mb-2">Starting at $199/mo</p>
              <p className="text-gray-600">Custom pricing available for teams of 50+ users.</p>
            </div>

            <div className="mt-8">
              <button className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
