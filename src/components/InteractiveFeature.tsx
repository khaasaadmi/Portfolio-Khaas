import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Headphones, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function InteractiveFeature() {
  const { t } = useLanguage();

  const technologies = [
    { icon: Code2, label: t('features.webapps') },
    { icon: Smartphone, label: t('features.mobileapps') },
    { icon: Globe, label: t('features.solutions') },
    { icon: Headphones, label: t('features.support') },
    { icon: Film, label: t('features.animation') },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-black via-primary-900/5 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative p-6 bg-transparent backdrop-blur-sm overflow-hidden border border-primary-500/15 rounded-lg">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <tech.icon className="h-12 w-12 text-primary-500" />
                </motion.div>
                <span className="mt-4 text-white font-medium block text-center">{tech.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}