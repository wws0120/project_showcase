const projects = [
  {
    id: 1,
    title: 'Mern Stack Pet Adoption Platform',
    coverImage:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1711095255/image001_d4t4wd.webp',
    previewUrl:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723803128/pet_app_ptiag0.webp',
    demoUrl: 'https://petadoptapp.vercel.app/',
    source: [{ title: null, url: 'https://github.com/wws0120/petadoptapp' }],
    description:
      'A comprehensive pet adoption application featuring user registration, pet listings, and adoption requests. The Express.js backend with Prisma ORM ensures efficient data handling with MongoDB. The React frontend, powered by Redux, offers an intuitive interface styled with Tailwind CSS. Includes an admin dashboard for managing users, pets, and content, including data visualization for key metrics.',
    notes:
      'Due to limitations of Render.com free plan, initial loading time may be longer than usual.',
    tags: ['Express.js', 'Prisma', 'MongoDB', 'React', 'Redux', 'Tailwind CSS'],
    gallery: [
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1711095255/image001_d4t4wd.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717057182/image02_l0iqmk.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717057188/image03_wch0ln.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717057129/image004_wp8zht.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717057200/image05_m67yud.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717057225/image06_vyk7tx.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717057231/image07_awtw1m.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717057235/image08_che4eq.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717057243/image09_nxykqs.webp',
    ],
  },
  {
    id: 2,
    title: 'Landing Page with Next.js',
    coverImage:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717058974/img001_ywhtg5.webp',
    previewUrl:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723797183/music_landing_bstdtp.webp',
    demoUrl: 'https://musicfestivalsite.vercel.app/',
    source: [
      { title: null, url: 'https://github.com/wws0120/musicfestivalsite' },
    ],
    description:
      'A landing page built with Next.js and enhanced with Framer Motion for animations.',
    notes: null,
    tags: ['Next.js', 'Framer Motion'],
    gallery: [
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717058974/img001_ywhtg5.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723626016/img005_mpkg7a.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717058975/img002_tef1ns.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717058976/img003_berxju.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1717058974/img004_nv6jqc.webp',
    ],
  },

  {
    id: 3,
    title: 'Next.js Page Transition Animation',
    coverImage:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723617804/pic005_lz8nmy.webp',
    previewUrl:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723799997/framer_transition_wh5tsy.webp',
    demoUrl: 'https://next-framer-transitions-one.vercel.app/',
    source: [
      {
        title: null,
        url: 'https://github.com/wws0120/next_framer_transitions',
      },
    ],
    description:
      'Developed a webpage showcasing page transitions using Next.js and Framer Motion.',
    notes: null,
    tags: ['Next.js', 'Framer Motion'],
    gallery: [
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723617804/pic005_lz8nmy.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723799997/framer_transition_wh5tsy.webp',
    ],
  },
  {
    id: 4,
    title: 'NextJS News Feeding App with Web Scraper',
    coverImage:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723699049/NESTJS_NEWS_FEED_APP_lnfuq0.webp',
    previewUrl:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723796509/news_feed_nf9dfi.webp',
    demoUrl: 'https://news-feeding-front.vercel.app/',
    source: [
      {
        title: 'Frontend',
        url: 'https://github.com/wws0120/news_feeding_front',
      },
      {
        title: 'Scraper service',
        url: 'https://github.com/wws0120/news_scraping_server',
      },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    notes: null,
    tags: ['Next.js', 'NestJS', 'Puppeteer'],
    gallery: [
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723699049/NESTJS_NEWS_FEED_APP_lnfuq0.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720864/2024-08-15_160013_rjws0o.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720865/Untitled_design_1_wphifp.webp',
    ],
  },
  {
    id: 5,
    title: 'Svelte Landing Page',
    coverImage:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723460247/pic003_gvr0cu.webp',
    previewUrl:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723792830/svelte_landing_nbde5i.webp',
    demoUrl: 'https://svelte-it-consultant-landing.vercel.app/',
    source: [
      {
        title: null,
        url: 'https://github.com/wws0120/svelte_it_consultant_landing',
      },
    ],
    description:
      'A modern landing page built with Svelte and styled using Tailwind CSS.',
    notes: null,
    tags: ['Svelte', 'Tailwind CSS'],
    gallery: [
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720863/6_ljlxwu.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720863/2024-08-15_153709_pcvq5l.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720863/2024-08-15_153802_vgieyn.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720863/2024-08-15_153852_dwx2kw.webp',
    ],
  },
  {
    id: 6,
    title: 'Astro Landing Page',
    coverImage:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723460247/pic004_e0d9n1.webp',
    previewUrl:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723795637/astro_landing_podnaf.webp',
    demoUrl: 'https://astro-realty-landing.vercel.app/',
    source: [
      { title: null, url: 'https://github.com/wws0120/astro_realty_landing' },
    ],
    description:
      'A landing page developed with Astro, featuring modern design implemented with Tailwind CSS.',
    notes: null,
    tags: ['Astro', 'Tailwind CSS'],
    gallery: [
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720865/7_gspls1.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720863/2024-08-15_155100_mzodp3.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720863/2024-08-15_155225_qckiow.webp',
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1723720864/2024-08-15_155335_hgk31a.webp',
    ],
  },
  {
    id: 7,
    title: 'LangChain Chatbot',
    coverImage:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1728819597/pic002_ecimlu.webp',
    previewUrl:
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1728819684/pic001_qlgc8j.webp',
    demoUrl: 'https://langchain-chatbot-demo-lilac.vercel.app/',
    source: [
      { title: null, url: 'https://github.com/wws0120/langchain_chatbot_demo' },
    ],
    description: 'Showcase of a demo chatbot implemented using LangChain',
    notes: null,
    tags: ['Next.js', 'LangChain'],
    gallery: [
      'https://res.cloudinary.com/dzqvyqldd/image/upload/v1728819684/pic001_qlgc8j.webp',
    ],
  },
];

export default projects;
