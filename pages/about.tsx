import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Link from 'next/link';

const values = [
  {
    title: 'Sustainability',
    description: 'We use eco-friendly materials and ethical production methods to minimize our environmental impact.',
    icon: '🌱',
  },
  {
    title: 'Quality',
    description: 'Every piece is crafted with attention to detail and premium materials for lasting durability.',
    icon: '✨',
  },
  {
    title: 'Innovation',
    description: 'We continuously explore new sustainable materials and production techniques.',
    icon: '💡',
  },
  {
    title: 'Community',
    description: 'We support local artisans and maintain fair working conditions throughout our supply chain.',
    icon: '🤝',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us - YONZA</title>
        <meta name="description" content="Learn about our sustainable fashion brand and values" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg.png"
            alt="Our Story"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-white">
              Crafting sustainable fashion for a better tomorrow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">The Journey</h2>
            <div className="prose prose-lg">
              <p className="mb-6">
                Founded in 2020, our brand emerged from a simple yet powerful vision: to create
                beautiful, sustainable fashion that respects both people and the planet. What
                started as a small collection of eco-friendly basics has grown into a
                comprehensive fashion brand that leads the industry in sustainable practices.
              </p>
              <p className="mb-6">
                Our commitment to sustainability goes beyond using organic materials. We've
                reimagined every aspect of our production process, from sourcing to packaging,
                ensuring that each step aligns with our environmental and ethical values.
              </p>
              <p>
                Today, we're proud to be at the forefront of sustainable fashion, proving that
                style and sustainability can go hand in hand. Our journey continues as we
                explore new ways to innovate and inspire positive change in the fashion industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & Creative Director',
                image: '/team/sarah.jpg',
              },
              {
                name: 'Michael Chen',
                role: 'Sustainability Director',
                image: '/team/michael.jpg',
              },
              {
                name: 'Emma Rodriguez',
                role: 'Head of Design',
                image: '/team/emma.jpg',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 