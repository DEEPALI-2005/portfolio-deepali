/**
 * PORTFOLIO DATA FILE
 * Edit this file to update your portfolio content
 * All sections are customizable here
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Frontend' | 'Full-Stack' | 'Website';
  technologies: string[];
  image: string;
  github: string;
  live: string | null;
  features: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
}

export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Deepali',
    fullName: 'Deepali Chaudhary',
    title: 'Full Stack Web Developer',
    tagline:
      'Full Stack Web Developer delivering end‑to‑end web solutions: UI development, backend APIs, and database integration.',
    location: 'Dehradun, Uttarakhand, India',
    email: 'deepali3705@gmail.com',
    phone: '+91 8126031455',
    bio: 'Passionate full-stack developer with expertise in building scalable web applications. I specialize in creating intuitive user interfaces and robust backend systems that work seamlessly together.',
  },

  // Social Links
  social: {
    github: 'https://github.com/DEEPALI-2005',
    linkedin: 'https://www.linkedin.com/in/deepali-chaudhary-d3705',
    twitter: 'https://twitter.com', // Add if you have
    email: 'deepali3705@gmail.com',
    whatsapp: '+91 8126031455',
  },

  // Tech Stack
  techStack: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    backend: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'GraphQL'],
    database: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL'],
    tools: ['Git', 'Docker', 'VS Code', 'Webpack', 'npm', 'Vercel', 'Railway', 'GitHub'],
  },

  // Projects
  projects: [
    {
      id: 'skillsphere',
      title: 'Skillsphere',
      description: 'A full-stack platform to showcase skills, learning, and collaboration.',
      category: 'Full-Stack',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      image: '/images/projects/skillsphere.jpg',
      github: 'https://github.com/DEEPALI-2005/Skillsphere',
      live: null,
      features: [
        'User authentication and profiles',
        'Skill showcase and portfolio',
        'Real-time collaboration tools',
        'Learning path recommendations',
      ],
    },
    {
      id: 'shecan-foundation',
      title: 'SheCan Foundation App',
      description: 'A responsive website/app for SheCan Foundation with clean UI and sections.',
      category: 'Frontend',
      technologies: ['JavaScript', 'React', 'Tailwind CSS', 'HTML'],
      image: '/images/projects/shecan-foundation.jpg',
      github: 'https://github.com/DEEPALI-2005/shecan-foundation-app',
      live: 'https://deepali-2005.github.io/shecan-foundation-app/',
      features: [
        'Responsive design',
        'Information sections',
        'Clean, modern UI',
        'Mobile-friendly interface',
      ],
    },
    {
      id: 'pizza-amore',
      title: 'Pizza Amore',
      description: 'A cafe website with menu showcase and ordering capabilities.',
      category: 'Website',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/projects/pizza-amore.jpg',
      github: 'https://github.com/DEEPALI-2005/pizza-amore',
      live: 'https://pizza-amore-production.up.railway.app/',
      features: [
        'Menu display',
        'Order management',
        'Restaurant information',
        'Contact and location details',
      ],
    },
  ] as Project[],

  // Experience
  experience: [
    {
      id: 'exp-1',
      company: 'Freelance',
      position: 'Full Stack Web Developer',
      period: '2023 - Present',
      description:
        'Developing full-stack web applications for various clients, focusing on scalability and user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    },
  ] as Experience[],

  // Education
  education: [
    {
      id: 'edu-1',
      institution: 'Your University Name',
      degree: "Bachelor's Degree",
      field: 'Computer Science / Information Technology',
      year: '2020 - 2024',
    },
  ] as Education[],

  // Resume
  resume: {
    filename: 'resume.pdf',
    path: '/resume.pdf',
    downloadText: 'Download Resume',
  },

  // Hero CTA
  hero: {
    mainCTA: 'View My Work',
    secondaryCTA: 'Get In Touch',
    resumeCTA: 'Download Resume',
  },

  // Contact Form
  contact: {
    formTitle: 'Let\'s Connect',
    formDescription: 'Have a project in mind? Get in touch and let\'s create something amazing together.',
    web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key from https://web3forms.com
  },
};

export default portfolioData;
