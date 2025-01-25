import React, { useState } from 'react';
import { Smartphone, Globe, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

type TabType = 'mobile' | 'web' | 'animation';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>('mobile');

  return (
    <div className="bg-black min-h-screen relative">
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Portfolio"
            subtitle="Showcasing our best work across mobile, web, and animation"
          />

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar Tabs */}
            <div className="md:w-64">
              <div className="sticky top-24 bg-gray-900/30 backdrop-blur-md rounded-2xl p-2">
                {[
                  { id: 'mobile', icon: Smartphone, label: 'Mobile Apps' },
                  { id: 'web', icon: Globe, label: 'Websites' },
                  { id: 'animation', icon: Film, label: 'Animation' }
                ].map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as TabType)}
                    className={`
                      w-full flex items-center px-6 py-4 rounded-xl transition-all duration-300
                      ${activeTab === id 
                        ? 'bg-primary-500/20 text-primary-400 shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                      }
                    `}
                  >
                    <Icon className={`h-5 w-5 mr-3 ${activeTab === id ? 'text-primary-400' : ''}`} />
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {projects[activeTab].map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}