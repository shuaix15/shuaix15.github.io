// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'shuaix15', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Shuai Xu', description: '', imageURL: '' },
  social: {
    ORCID: 'https://orcid.org/0000-0002-7798-5720',
    researchGate: 'https://www.researchgate.net/profile/Shuai-Xu-35',
    website: '',
    phone: '',
    email: 'shuai.xu.1@vanderbilt.edu',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'R',
    'Python',
    'Git',
    'Terra',
    'PLINK',
    'Unix',
    'VCFtools',
  ],
  experiences: [
    {
      company: 'Vanderbilt University Medical Center',
      position: 'Research Analyst I',
      from: 'Sep 2021',
      to: 'Aug 2022',
    },
    {
      company: 'Washington University School of Medicine',
      position: 'Statistical Analyst',
      from: 'Jun 2020',
      to: 'Sep 2021',
    },
  ],
  educations: [
    {
      institution: 'Vanderbilt University',
      degree: 'PhD, Genetic and Molecular Epidemiology',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Washington University in St. Louis',
      degree: 'MPH, Biostatistics',
      from: '2018',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'Breast Cancer Incidence Among US Women Aged 20 to 49 Years by Race, Stage, and Hormone Receptor Status',
      conferenceName: '',
      journalName: 'JAMA Network Open',
      authors: 'Shuai Xu, Sara Murtagh, Yunan Han, Fei Wan, Adetunji T Toriola',
      link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2814306',
    },
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'British Journal of Cancer',
      authors: 'Yaohua Yang, Shuai Xu, Guochong Jia, Fangcheng Yuan, Jie Ping, Xingyi Guo, Ran Tao, Xiao-Ou Shu, Wei Zheng, Jirong Long, Qiuyin Cai',
      link: 'https://www.nature.com/articles/s41416-023-02419-3',
      description:'co-first author',
      },
  ],
  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light'
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href=""
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
