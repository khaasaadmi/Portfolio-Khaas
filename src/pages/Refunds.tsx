import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const Refunds = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Refunds & Cancellations"
            subtitle="Our policy regarding project cancellations and refunds"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1.General Policy</h2>
                <p className="text-gray-300">
                  Subscriptions to Docsphere are non-refundable after 24 hours from the time of payment, except as initiated by our customer    service team. This policy applies to all subscription plans:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-300">
                  <li>Monthly Plan: ₹1,500 INR</li>
                  <li>Yearly Plan: ₹14,999 INR</li>
                  <li>Custom Plan: Pricing varies based on agreement.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Refund Requests</h2>
                <p className="text-gray-300">
                  Refunds may only be considered under the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-300">
                  <li>If a technical error caused an overcharge or duplicate charge.</li>
                  <li>If customer service determines that exceptional circumstances warrant a refund.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3.Cancellation</h2>
                <p className="text-gray-300">
                  You may cancel your subscription at any time; however, cancellations made after 24 hours of payment will not be eligible for a refund.

Cancellation requests must be submitted through the App or by contacting our customer support.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4.Custom Plan Refunds</h2>
                <p className="text-gray-300">
                  Refunds for Custom Plans will be considered on a case-by-case basis and are subject to the terms of the agreement.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Refunds;