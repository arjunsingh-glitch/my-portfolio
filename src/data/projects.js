export const featuredProjects = [
  {
    id: 1,
    title: 'NewsGuard',
    description:
      'AI-powered news verification platform using machine learning to detect fake news in real-time.',
    highlights: [
      'Custom scikit-learn classification model with confidence scoring',
      'Responsive vanilla JS frontend with debounced search and dynamic loading states',
      'Flask backend serving the model via REST endpoints with live news API integration',
    ],
    technologies: ['Python', 'Flask', 'scikit-learn', 'REST API', 'JavaScript'],
    githubUrl: 'https://github.com/arjunsingh-glitch/NewsGuard',
  },
  {
    id: 2,
    title: 'Chemical Equipment Parameter Visualizer',
    description:
      'Hybrid data analytics application combining a React web dashboard with a PyQt5 desktop client.',
    highlights: [
      'Django REST backend for validating, cleaning, and computing CSV statistics',
      'Chart.js and Matplotlib visualizations with ReportLab PDF report generation',
      'Pandas-powered data processing for industrial chemical metrics',
    ],
    technologies: ['React', 'Django REST', 'PyQt5', 'Pandas', 'Chart.js'],
    githubUrl: 'https://github.com/arjunsingh-glitch/Chemical-Equipment-Parameter-Visualizer',
  },
  {
    id: 3,
    title: 'Speed-up (YouTube Extension)',
    description:
      'Lightweight Chrome extension to override native video player limitations for granular playback control.',
    highlights: [
      'Vanilla JS content and popup scripts manipulating the YouTube DOM',
      'Browser storage APIs for persistent user configuration across video pages',
      'Efficient popup interface with minimal browser resource usage',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Browser APIs'],
    githubUrl: 'https://github.com/arjunsingh-glitch/Speed-up',
  },
]

export const additionalProjects = [
  {
    title: 'The-Open-Source-Audit',
    technology: 'Shell',
    githubUrl: 'https://github.com/arjunsingh-glitch/The-Open-Source-Audit',
  },

]
