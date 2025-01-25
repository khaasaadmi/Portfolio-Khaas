import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const Terms = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Terms & Conditions"
            subtitle="Please read these terms carefully before using our services"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using Khaas's services, you accept and agree to be bound by the terms
                  and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                <p className="text-gray-300">
                  Khaas provides mobile and web development services. The scope of each project will be
                  defined in a separate agreement or statement of work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                <p className="text-gray-300">
                  All intellectual property rights in relation to the services shall remain the property
                  of Khaas until full payment is received, at which point specified rights will be
                  transferred to the client as per the project agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                <p className="text-gray-300">
                  Payment terms will be specified in each project proposal. Standard terms include:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-300">
                  <li>50% upfront payment to commence work</li>
                  <li>25% at project midpoint</li>
                  <li>25% upon project completion</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Project Timeline</h2>
                <p className="text-gray-300">
                  Project timelines will be established in the project proposal. Delays caused by client
                  feedback or content delivery may affect the final delivery date.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;