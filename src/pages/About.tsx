import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Laptop, Users, Trophy } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const stats = [
  { icon: Code2, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '100+', label: 'Happy Clients' },
  { icon: Trophy, value: '15+', label: 'Awards Won' },
  { icon: Laptop, value: '8+', label: 'Years Experience' },
];

export default function About() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-black z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-primary-500">Khaas</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a team of passionate developers and designers crafting exceptional digital experiences since 2021.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-primary-500 mb-4 mx-auto" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Story"
            subtitle="A journey of innovation and excellence"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300">
                Founded in 2021, Khaas has been at the forefront of digital innovation, 
                creating cutting-edge mobile and web solutions that help businesses thrive 
                in the digital age.
              </p>
              <p className="text-gray-300">
                Our team of expert developers and designers brings together years of 
                experience in React, React Native, WordPress, and custom development 
                to deliver solutions that exceed expectations.
              </p>
              <p className="text-gray-300">
                We believe in the power of technology to transform businesses and enhance 
                user experiences. Our commitment to quality and innovation has made us a 
                trusted partner for companies worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}