'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    title: "The Future of AI in Enterprise Solutions",
    excerpt: "Discover how artificial intelligence is revolutionizing enterprise-level business operations...",
    image: "/blog1.jpg",
    link: "/blog/future-of-ai",
    date: "August 8, 2025"
  },
  {
    title: "Machine Learning: A Game Changer in Data Analytics",
    excerpt: "Exploring how machine learning algorithms are transforming the way we analyze big data...",
    image: "/blog2.jpg",
    link: "/blog/machine-learning-analytics",
    date: "August 5, 2025"
  },
  {
    title: "The Rise of Natural Language Processing",
    excerpt: "Understanding the impact of NLP in modern communication and customer service...",
    image: "/blog3.jpg",
    link: "/blog/nlp-rise",
    date: "August 1, 2025"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest thoughts and insights on AI technology, machine learning, and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <Link href={blog.link} className="block">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-600/20 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300 z-10" />
                  <div className="relative w-full h-full bg-gray-200">
                    {/* Placeholder for blog image - replace src with actual image path */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            View All Posts
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
