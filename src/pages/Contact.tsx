import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-black z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Get in Touch"
            subtitle="Let's discuss your next project"
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email Us</h3>
                  <p className="mt-1 text-gray-300">contact@khaas.net</p>
                  <p className="mt-1 text-gray-300">support@khaas.net</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Call Us</h3>
                  <p className="mt-1 text-gray-300">+91 7000569723</p>
                  <p className="mt-1 text-gray-300">+39 3474670831</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Visit Us</h3>
                  <p className="mt-1 text-gray-300">
                    2172 D<br />
                    Sudama Nagar , 452009<br />
                    Indore , India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;