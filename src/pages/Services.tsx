import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Code, Palette, Server, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications built with React Native, delivering seamless cross-platform experiences.',
    features: ['Cross-platform development', 'Native performance', 'Offline capabilities', 'Push notifications']
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications using React, Next.js, and other cutting-edge technologies.',
    features: ['Responsive design', 'SEO optimization', 'Performance optimization', 'Progressive Web Apps']
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored solutions built from the ground up to meet your specific business requirements.',
    features: ['Scalable architecture', 'Custom APIs', 'Third-party integrations', 'Legacy system modernization']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that combine aesthetics with functionality.',
    features: ['User research', 'Wireframing', 'Prototyping', 'Design systems']
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Robust and scalable backend solutions to power your applications.',
    features: ['API development', 'Database design', 'Cloud infrastructure', 'Performance optimization']
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to ensure your applications run smoothly.',
    features: ['24/7 monitoring', 'Regular updates', 'Security patches', 'Performance optimization']
  }
];

export default function Services() {
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
              Our <span className="text-primary-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 group"
              >
                <service.icon className="h-12 w-12 text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}