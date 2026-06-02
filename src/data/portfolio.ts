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

export const portfolioData ={
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

  social: {
    github: 'https://github.com/DEEPALI-2005',
    linkedin: 'https://www.linkedin.com/in/deepali-chaudhary-d3705',
    twitter: 'https://twitter.com', 
    email: 'deepali3705@gmail.com',
    whatsapp: '+91 8126031455',
  },

  techStack: {
    languages: ['C++', 'Java', 'Python', 'JavaScript'],
    frontend: ['React', 'HTML5', 'CSS3', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL'],
    tools: ['Git', 'Docker', 'VS Code', 'Neon', 'Vercel', 'Railway', 'GitHub'],
    concept: ['DSA', 'Operating Systems', 'DBMS', 'Computer Networks', 'Cyber Security','Compiler Design'],
  },

  projects: [
    {
      id: 'skillsphere',
      title: 'Skillsphere',
      description: 'A full-stack platform to showcase skills, learning, and collaboration.',
      category: 'Full-Stack',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.IO', 'Tailwind CSS', 'HuggingFace AI', 'JWT'],
      image: '/projects/skillsphere.jpg',
      github: 'https://github.com/DEEPALI-2005/Skillsphere',
      live: 'https://skillsphere-client.vercel.app',
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
      image: '/projects/shecan-foundation.jpg',
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
      technologies: ['HTML', 'CSS', 'JavaScript','Neon','PostgreSQL'],
      image: '/projects/pizza-amore.jpg',
      github: 'https://github.com/DEEPALI-2005/pizza-amore',
      live: 'https://pizza-amore-beta.vercel.app/',
      features: [
        'Menu display',
        'Order management',
        'Restaurant information',
        'Contact and location details', 
        'Live Traking of orders',
      ],
    },
  ] as Project[],

  experience: [
    {
      id: 'exp-1',
      company: 'Freelance',
      position: 'Full Stack Web Developer',
      period: '2024 - Present',
      description:
        'Developing full-stack web applications for various clients, focusing on scalability and user experience.',
      technologies: ['React', 'Node.js', 'PostrageSQL', 'TypeScript','Tailwind CSS'],
    },
  ] as Experience[],

  education: [
    {
      id: 'edu-1',
      institution: 'Graphic Era Hill University, Dehradun',
      degree: "Bachelor's Degree",
      field: 'Computer Science and  Engineering',
      year: '2023 - 2027',
    },
  ] as Education[],


  resume: {
    filename: 'resume.pdf',
    path: '/resume.pdf',
    downloadText: 'Download Resume',
  },


  hero: {
    mainCTA: 'View My Work',
    secondaryCTA: 'Get In Touch',
    resumeCTA: 'Download Resume',
  },
  contact: {
    web3forms_key: '8a69749c-8ccf-4ac6-915d-7f077278e7ff',
    email: 'deepali3705@gmail.com',
    phone: '+91 8126031455',
  },
};

export default portfolioData;
