export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Code is my canvas. Big ideas? I ship fast, break faster, build better.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
    width: 1200,
    height: 600,
  },
  {
    id: 2,
    title: "No borders. Just ideas. Let’s build, wherever you are.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    width: 0,
    height: 0,
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "Constantly upgrading",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  //   width: 0,
  //   height: 0,
  // },
  {
    id: 4,
    title: "Passionate about tech, now building for startups and clients.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-base font-medium leading-snug",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    width: 600,
    height: 400,
  },

  {
    id: 5,
    title: "Currently building a self-hosted CI server",
    description: "The Insider 🤫",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    width: 384,
    height: 384,
  },
  {
    id: 6,
    title: "Got something brewing? Let’s build it.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    width: 0,
    height: 0,
  },
];

export const featuredProject = {
  id: "android-server",
  title: "The Android Server",
  description:
    "A production-grade web server running on a retired Android phone, built with Termux and Cloudflare Tunnels to power this portfolio with real-world uptime and zero cloud compute.",
  mainLink: "https://self-hosted.darrylmathias.tech",
  mediumLink:
    "https://medium.com/@mathiasndarryl7/part-0-android-the-os-is-the-enemy-fcf6d4ea05ac",
  statusLink: "https://stats.uptimerobot.com/dGeYNfFczd",
  img: "/Portfolio.png",
  tech: ["/next.svg", "/cloudflare.svg", "/linux.svg", "/termux.svg"],
};


export const projects = [
  {
    id: 1,
    title: "Neura",
    des: "Neura – a proactive AI navigation assistant combining real-time mapping with conversational intelligence.",
    img: "/neura.png",
    iconLists: [
      "/next.svg",
      "/neon.svg",
      "/prisma.svg",
      "/ts.svg",
      "/supermemory.png"
    ],
    link: "https://neura.darrylmathias.tech",
    floatingTitle: "www.neura.app",
  },
  {
    id: 2,
    title: "Write It",
    des: "Discover Write It — a sleek, modern platform crafted for writers and readers who value meaningful stories.",
    img: "/writeit.png",
    iconLists: [
      "/ejs.svg",
      "/mongodb.svg",
      "/express.svg",
      "/nodejs.svg",
      "/js.svg",
    ],
    link: "https://write-it-dz2w.onrender.com",
    floatingTitle: "www.writeit.app",
  },
  {
    id: 3,
    title: "Byteguide",
    des: "ByteGuide is a recipe website designed to help users explore and prepare dishes effortlessly.",
    img: "/byteguide.png",
    iconLists: ["/html.svg", "/tail.svg", "/js.svg"],
    link: "https://darrylmathias.github.io/ByteGuide/",
    floatingTitle: "www.byteguide.app",
  },
  {
    id: 4,
    title: "Ultimate Tic Tac Toe",
    des: "Ultimate Tic Tac Toe — a strategic twist on the classic, powered by advanced algorithms for an unbeatable AI opponent.",
    img: "/tictactoe.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://darrylmathias.github.io/Portfolio/public/Ultimate%20tic%20tac%20toe/index.html",
    floatingTitle: "www.tictactoe.app",
  },
];

export const skills = [
  {
    "id": 1,
    "name": "Next.js",
    "image": "/next.svg",
    "description": "A powerful React framework with SSR, SSG, API routes, and great developer experience.",
    "link": "https://nextjs.org/"
  },
  {
    "id": 2,
    "name": "React.js",
    "image": "/re.svg",
    "description": "A JavaScript library for building dynamic user interfaces with component-based architecture.",
    "link": "https://react.dev/"
  },
  {
    "id": 3,
    "name": "TypeScript",
    "image": "/ts.svg",
    "description": "A statically typed superset of JavaScript that improves reliability and developer productivity.",
    "link": "https://www.typescriptlang.org/"
  },
  {
    "id": 4,
    "name": "JavaScript",
    "image": "/js.svg",
    "description": "The core language of the web used for interactivity and full-stack development.",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    "id": 24,
    "name": "Vue.js",
    "image": "/vue.svg",
    "description": "A JavaScript framework for building reactive user interfaces using component-based architecture.",
    "link": "https://vuejs.org/"
  },
  {
    "id": 20,
    "name": "Docker",
    "image": "/docker.svg",
    "description": "The core platform for building, shipping, and running applications in containers across any environment.",
    "link": "https://docs.docker.com/"
  },
  {
    "id": 21,
    "name": "LangChain",
    "image": "/langchain.svg",
    "description": "A powerful framework for developing apps powered by LLMs, enabling agentic systems with ease.",
    "link": "https://docs.langchain.com/"
  },
  {
    "id": 5,
    "name": "Tailwind CSS",
    "image": "/tail.svg",
    "description": "A utility-first CSS framework for rapidly building custom designs with ease.",
    "link": "https://tailwindcss.com/"
  },
  {
    "id": 6,
    "name": "HTML",
    "image": "/html.svg",
    "description": "The foundation of web content, used to structure elements on the page.",
    "link": "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    "id": 7,
    "name": "CSS",
    "image": "/css.svg",
    "description": "Used to style and visually design web applications responsively and beautifully.",
    "link": "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    "id": 8,
    "name": "Shadcn UI",
    "image": "/shadcn-ui.svg",
    "description": "A modern component library built with Radix UI and Tailwind CSS, focused on accessibility.",
    "link": "https://ui.shadcn.com/"
  },
  {
    "id": 9,
    "name": "Bootstrap",
    "image": "/bootstrap.svg",
    "description": "A popular CSS framework with ready-made responsive UI components and grid system.",
    "link": "https://getbootstrap.com/"
  },
  {
    "id": 10,
    "name": "Chakra UI",
    "image": "/chakra.svg",
    "description": "A modular, accessible React component library that offers flexibility and style props.",
    "link": "https://chakra-ui.com/"
  },
  {
    "id": 11,
    "name": "GSAP",
    "image": "/gsap.svg",
    "description": "A performant animation library for crafting high-quality, complex animations on the web.",
    "link": "https://gsap.com/"
  },
  {
    "id": 12,
    "name": "Node.js",
    "image": "/nodejs.svg",
    "description": "A runtime that allows building scalable backend services with JavaScript.",
    "link": "https://nodejs.org/en/"
  },
  {
    "id": 13,
    "name": "Express",
    "image": "/express.svg",
    "description": "A fast, minimalist framework for Node.js used for building APIs and backend logic.",
    "link": "https://expressjs.com/"
  },
  {
    "id": 14,
    "name": "MongoDB",
    "image": "/mongodb.svg",
    "description": "A document-based NoSQL database ideal for flexible, scalable web apps.",
    "link": "https://www.mongodb.com/"
  },
  {
    "id": 23,
    "name": "Prisma",
    "image": "/prisma.svg",
    "description": "A modern, open-source ORM that provides a type-safe way to interact with databases in TypeScript applications.",
    "link": "https://www.prisma.io/docs"
  },
  {
    "id": 15,
    "name": "Firebase",
    "image": "/firebase.svg",
    "description": "A BaaS platform offering authentication, hosting, and NoSQL database services.",
    "link": "https://firebase.google.com/"
  },
  {
    "id": 16,
    "name": "Git",
    "image": "/git.svg",
    "description": "A version control system to manage code changes and collaborate efficiently.",
    "link": "https://git-scm.com/"
  },
  {
    "id": 17,
    "name": "Python",
    "image": "/python.svg",
    "description": "A beginner-friendly, versatile language used in automation, scripting, and backend development.",
    "link": "https://docs.python.org/3/"
  },
  {
    "id": 18,
    "name": "C",
    "image": "/c.svg",
    "description": "A foundational systems language that powers operating systems and embedded software.",
    "link": "https://en.cppreference.com/w/c"
  },
  {
    "id": 19,
    "name": "Java",
    "image": "/java.svg",
    "description": "An object-oriented language heavily used in Android apps and enterprise systems.",
    "link": "https://docs.oracle.com/en/java/"
  },
  // {
  //   "id": 22,
  //   "name": "Rust",
  //   "image": "/rust.svg",
  //   "description": "A modern systems programming language focused on performance and memory safety.",
  //   "link": "https://doc.rust-lang.org/"
  // },
];


export const workExperience = [
  {
    id: 1,
    title: "Fullstack Web Developer, TSEC Devs Club",
    desc: "Redesigned the official landing page with Next.js, integrating smooth Lottie animations to enhance interactivity and visual appeal.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/linkedin.svg",
    link: 'https://www.linkedin.com/in/darryl-mathias-020241317/',
    about: 'Darryl Mathias Linkedin'
  },
  {
    id: 2,
    img: "/git.svg",
    link: 'https://github.com/DarrylMathias',
    about: 'Darryl Mathias Github'
  },
  {
    id: 3,
    img: "/gmail.svg",
    link: 'mailto:darrylnevmat@gmail.com',
    about: 'Darryl Mathias Gmail'
  },
  {
    id: 4,
    img: "/medium.svg",
    link: 'https://medium.com/@mathiasndarryl7',
    about: 'Darryl Mathias Medium'
  },
  {
    id: 5,
    img: '/quora.svg',
    link: 'https://www.quora.com/profile/Darryl-Mathias-5',
    about: 'Darryl Mathias Quora'
  },
  {
    id: 6,
    img: '/yt.svg',
    link: 'https://www.youtube.com/channel/UCIgATHMupDeW4f-Q48ufrng',
    about: 'Darryl Mathias Youtube'
  },
  {
    id: 7,
    img: '/reddit.svg',
    link: 'https://www.reddit.com/user/Spiritual-Banana1048/',
    about: 'Darryl Mathias Reddit'
  }
];

export const freelanceProfiles = [
  {
    id: "freelancer",
    link: "https://www.freelancer.com/u/darrylm16",
    imgLink: "https://www.freelancer.com/favicon.ico",
    about: "Freelancer Profile",
  },
  {
    id: "fiverr",
    link: "https://www.fiverr.com/darrylmathias/",
    imgLink: "https://www.fiverr.com/favicon.ico",
    about: "Fiverr Profile",
  },
  {
    id: "upwork",
    link: "https://www.upwork.com/freelancers/~012acc92512136e837",
    imgLink: "https://www.upwork.com/favicon.ico",
    about: "Upwork Profile",
  },
]