interface Project {
  title: string;
  description: string;
  image: string;
  previewImage: string;
  tags: string[];
  type: 'mobile' | 'web' | 'animation';
}

interface Projects {
  mobile: Project[];
  web: Project[];
  animation: Project[];
}

export const projects: Projects = {
  mobile: [
    {
      title: 'DocSphere',
      description: 'Revolutionize your clinic management with features like WhatsApp prescriptions, patient data storage, and instant access to the latest local medicine prices.',
      image: 'https://images.unsplash.com/photo-1526502900236-e84b0a3c3c96?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1526502900236-e84b0a3c3c96?auto=format&fit=crop&w=800&h=2000',
      tags: ['Flutter', 'Redux', 'Supabase'],
      type: 'mobile'
    },
    {
      title: 'E-commerce Mobile App',
      description: 'Feature-rich shopping app with real-time inventory',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&h=2000',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      type: 'mobile'
    },
    {
      title: 'Social Media App',
      description: 'Modern social networking platform for creative professionals',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=2000',
      tags: ['React Native', 'GraphQL', 'AWS'],
      type: 'mobile'
    }
  ],
  web: [
    {
      title: 'Hospitality Masterclass',
      description: 'Modern website with custom CMS integration',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=2000',
      tags: ['Javascript', 'WordPress', 'HTML','CSS'],
      type: 'web'
    },
    {
      title: 'Portfolio Website',
      description: 'Creating Agency Website For Portfolio',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&h=2000',
      tags: ['React', 'Node.js', 'MongoDB'],
      type: 'web'
    },
    {
      title: 'Real Estate Portal',
      description: 'Property listing and management system',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=2000',
      tags: ['React', 'Javascript', 'Tailwind'],
      type: 'web'
    }
  ],
  animation: [
    {
      title: '3D Product Animation',
      description: 'Stunning 3D product animations for e-commerce',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=2000',
      tags: ['Blender', 'After Effects', 'WebGL'],
      type: 'animation'
    },
    {
      title: 'Motion Graphics',
      description: 'Engaging motion graphics for social media',
      image: 'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?auto=format&fit=crop&w=800&h=2000',
      tags: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
      type: 'animation'
    },
    {
      title: 'Character Animation',
      description: 'Character animations for games and interactive media',
      image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?auto=format&fit=crop&w=800',
      previewImage: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?auto=format&fit=crop&w=800&h=2000',
      tags: ['Maya', 'Unity', 'Spine'],
      type: 'animation'
    }
  ]
};