import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const Privacy = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Privacy Policy"
            subtitle="How we handle and protect your information"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-gray-300">
                  This Privacy Policy explains how Docsphere, operated by Khaas ("we", "our", or "us"), collects, uses, and protects the   personal and professional information of our users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Data Collection</h2>
                <p className="text-gray-300">
                  We collect the following types of data:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-300">
                  <li>Personal Information: Name, contact details, and professional license details.</li>
                  <li>Patient Information: Data inputted by you related to your patients, including medical records and appointments.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Use</h2>
                <p className="text-gray-300">
                  We use the collected data to:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-300">
                  <li>Provide and improve our services.</li>
                  <li>Facilitate appointment scheduling and patient management.</li>
                  <li>Communicate with users for support and updates.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
                <p className="text-gray-300">
                  All data is encrypted using 256-bit encryption standards.
                  Access to patient data is restricted to the user who inputted the information.
                  We implement industry-standard measures to prevent unauthorized access.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5.Data Sharing</h2>
                <p className="text-gray-300">
                  We do not share your data with third parties, except as required by law or with your explicit consent.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. User Rights</h2>
                <p className="text-gray-300">
                  You have the right to:
                  Access your data at any time.
                  Request corrections or deletions of your data, subject to legal or professional obligations.
                  Withdraw consent for data processing where applicable.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Retention Policy</h2>
                <p className="text-gray-300">
                  Data will be retained for as long as your subscription remains active or as required by applicable laws.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8.  Changes to Privacy Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. Any changes will be communicated through the App.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                <p className="text-gray-300">
                  For questions or concerns regarding this Privacy Policy, please contact our support team at help@khaas.net or call us at                        +917000569723.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;