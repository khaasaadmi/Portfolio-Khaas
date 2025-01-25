import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, Code, Star, Users, Trophy, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import HeroBackground from '../components/HeroBackground';
import InteractiveFeature from '../components/InteractiveFeature';

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '200+', label: t('stats.clients') },
    { icon: Trophy, value: '150+', label: t('stats.projects') },
    { icon: Clock, value: '8+', label: t('stats.experience') },
    { icon: CheckCircle2, value: '99%', label: t('stats.satisfaction') },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden bg-gradient-to-b from-primary-900/30 via-black to-black">
        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-400 to-white"
            >
              {t('hero.title')}
              <motion.span 
                className="block text-transparent bg-gradient-to-r from-primary-400 via-white to-primary-600 bg-clip-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {t('hero.subtitle')}
              </motion.span>
            </motion.h1>
            
            <motion.p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 text-lg font-medium overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-primary-500 to-primary-400 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-primary-500"></div>
                <span className="relative flex items-center text-white">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <InteractiveFeature />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black via-primary-900/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-primary-500 mb-4 mx-auto" />
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-black via-primary-900/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: t('services.mobile.title'),
                description: t('services.mobile.description'),
              },
              {
                icon: Globe,
                title: t('services.web.title'),
                description: t('services.web.description'),
              },
              {
                icon: Code,
                title: t('services.custom.title'),
                description: t('services.custom.description'),
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-20 blur transition duration-1000" />
                <div className="relative bg-transparent backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <service.icon className="h-12 w-12 text-primary-500 mb-4 mx-auto" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-400 text-center">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gradient-to-b from-black via-primary-900/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('featured.title')}
            subtitle={t('featured.subtitle')}
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: t('featured.project1.title'),
                image: "https://images.unsplash.com/photo-1526502900236-e84b0a3c3c96?auto=format&fit=crop&w=800",
                category: t('featured.project1.category')
              },
              {
                title: t('featured.project2.title'),
                image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800",
                category: t('featured.project2.category')
              }
            ].map((work, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-20 blur transition duration-1000" />
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="relative w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <div className="text-primary-400 text-sm mb-2">{work.category}</div>
                    <div className="text-white text-xl font-semibold">{work.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors"
            >
              {t('featured.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
            <p className="text-gray-300 mb-8">{t('cta.description')}</p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-8 py-4 text-lg font-medium overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-primary-500 to-primary-400 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-primary-500"></div>
              <span className="relative flex items-center text-white">
                {t('cta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}