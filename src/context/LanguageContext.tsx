import React, { createContext, useContext, useState } from 'react';

type Language = 'EN' | 'IT';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  EN: {
    // Home Page
    'hero.title': 'Transforming Ideas into',
    'hero.subtitle': 'Digital Reality',
    'hero.description': 'We craft exceptional mobile and web experiences that help businesses thrive in the digital world.',
    'hero.cta': 'Get Started',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive digital solutions tailored to your business needs',
    'services.mobile.title': 'Mobile App Development',
    'services.mobile.description': 'Native iOS and Android applications built with React Native, delivering seamless cross-platform experiences.',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern, responsive web applications using React, Next.js, and other cutting-edge technologies.',
    'services.custom.title': 'Custom Development',
    'services.custom.description': 'Tailored solutions built from the ground up to meet your specific business requirements.',
    'services.design.title': 'UI/UX Design',
    'services.design.description': 'User-centered design solutions that combine aesthetics with functionality.',
    'services.backend.title': 'Backend Development',
    'services.backend.description': 'Robust and scalable backend solutions to power your applications.',
    'services.support.title': 'Maintenance & Support',
    'services.support.description': 'Ongoing support and maintenance to ensure your applications run smoothly.',

    // Features
    'features.webapps': 'Web Apps',
    'features.mobileapps': 'Mobile Apps',
    'features.solutions': 'Custom Solutions',
    'features.support': 'Technical Support',
    'features.animation': 'Animation Projects',

    // Stats
    'stats.clients': 'Happy Clients',
    'stats.projects': 'Projects Completed',
    'stats.experience': 'Years Experience',
    'stats.satisfaction': 'Client Satisfaction',

    // Featured Work
    'featured.title': 'Featured Work',
    'featured.subtitle': 'Some of our recent projects',
    'featured.project1.title': 'Health & Fitness App',
    'featured.project1.category': 'Mobile App',
    'featured.project2.title': 'E-learning Platform',
    'featured.project2.category': 'Web Platform',
    'featured.viewAll': 'View All Projects',

    // CTA Section
    'cta.title': 'Ready to Start Your Project?',
    'cta.description': "Let's discuss how we can help bring your vision to life.",
    'cta.button': 'Contact Us',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': "Let's discuss your next project",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.sent': 'Message Sent!',
    'contact.form.error': 'Failed to Send',
    'contact.email.title': 'Email Us',
    'contact.phone.title': 'Call Us',
    'contact.visit.title': 'Visit Us',

    // Footer
    'footer.quicklinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
  },
  IT: {
    // Home Page
    'hero.title': 'Trasformiamo le Idee in',
    'hero.subtitle': 'Realtà Digitale',
    'hero.description': 'Creiamo esperienze mobile e web eccezionali che aiutano le aziende a prosperare nel mondo digitale.',
    'hero.cta': 'Inizia Ora',
    
    // Services
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Soluzioni digitali complete su misura per le tue esigenze aziendali',
    'services.mobile.title': 'Sviluppo App Mobile',
    'services.mobile.description': 'Applicazioni native iOS e Android costruite con React Native, per esperienze cross-platform impeccabili.',
    'services.web.title': 'Sviluppo Web',
    'services.web.description': 'Applicazioni web moderne e responsive utilizzando React e tecnologie all\'avanguardia.',
    'services.custom.title': 'Sviluppo Personalizzato',
    'services.custom.description': 'Soluzioni su misura costruite da zero per soddisfare le tue esigenze specifiche.',
    'services.design.title': 'Design UI/UX',
    'services.design.description': 'Soluzioni di design incentrate sull\'utente che combinano estetica e funzionalità.',
    'services.backend.title': 'Sviluppo Backend',
    'services.backend.description': 'Soluzioni backend robuste e scalabili per alimentare le tue applicazioni.',
    'services.support.title': 'Manutenzione & Supporto',
    'services.support.description': 'Supporto e manutenzione continui per garantire il corretto funzionamento delle tue applicazioni.',

    // Features
    'features.webapps': 'App Web',
    'features.mobileapps': 'App Mobile',
    'features.solutions': 'Soluzioni Personalizzate',
    'features.support': 'Supporto Tecnico',
    'features.animation': 'Progetti di Animazione',

    // Stats
    'stats.clients': 'Clienti Soddisfatti',
    'stats.projects': 'Progetti Completati',
    'stats.experience': 'Anni di Esperienza',
    'stats.satisfaction': 'Soddisfazione Clienti',

    // Featured Work
    'featured.title': 'Lavori in Evidenza',
    'featured.subtitle': 'Alcuni dei nostri progetti recenti',
    'featured.project1.title': 'App Salute e Fitness',
    'featured.project1.category': 'App Mobile',
    'featured.project2.title': 'Piattaforma E-learning',
    'featured.project2.category': 'Piattaforma Web',
    'featured.viewAll': 'Vedi Tutti i Progetti',

    // CTA Section
    'cta.title': 'Pronto a Iniziare il Tuo Progetto?',
    'cta.description': 'Parliamo di come possiamo aiutarti a realizzare la tua visione.',
    'cta.button': 'Contattaci',

    // Contact
    'contact.title': 'Contattaci',
    'contact.subtitle': 'Parliamo del tuo prossimo progetto',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Messaggio',
    'contact.form.submit': 'Invia Messaggio',
    'contact.form.sending': 'Invio in corso...',
    'contact.form.sent': 'Messaggio Inviato!',
    'contact.form.error': 'Invio Fallito',
    'contact.email.title': 'Scrivici',
    'contact.phone.title': 'Chiamaci',
    'contact.visit.title': 'Visitaci',

    // Footer
    'footer.quicklinks': 'Link Rapidi',
    'footer.legal': 'Legale',
    'footer.contact': 'Contatti',
    'footer.rights': 'Tutti i diritti riservati.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['EN']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}