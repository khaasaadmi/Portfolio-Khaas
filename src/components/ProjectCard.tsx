import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    previewImage?: string;
    tags: string[];
    type: 'mobile' | 'web';
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-lg overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.type === 'web' && project.previewImage && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-full overflow-hidden">
              <img
                src={project.previewImage}
                alt={`${project.title} preview`}
                className="w-full animate-scroll-y"
              />
            </div>
          </div>
        )}
        {project.type === 'mobile' && project.previewImage && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-full flex justify-center items-center">
              <div className="w-1/2 h-full overflow-hidden rounded-xl border-4 border-gray-800">
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover animate-scroll-y"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-primary-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}