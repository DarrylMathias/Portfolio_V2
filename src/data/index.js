export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
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
    title: "Just shipped a search engine from scratch in Golang",
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
    title: "Yoink",
    des: "Yoink – a distributed search engine indexing 1M+ web pages in Go with a custom crawler, indexer and BM25 ranking engine.",
    img: "/yoink.png",
    iconLists: [
      "/go.png",
      "/postgresql.svg",
      "/aws.svg",
      "/redis.svg",
    ],
    link: "https://github.com/DarrylMathias/yoink",
    floatingTitle: "www.yoink.app",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Byteguide",
    des: "ByteGuide is a recipe website designed to help users explore and prepare dishes effortlessly.",
    img: "/byteguide.png",
    iconLists: ["/html.svg", "/tail.svg", "/js.svg"],
    link: "https://darrylmathias.github.io/ByteGuide/",
    floatingTitle: "www.byteguide.app",
  },
  {
    id: 5,
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
    id: 1,
    name: "Go",
    image: "/go.png",
    description: "An open-source programming language by Google that makes it easy to build simple and concurrent software.",
    link: "https://go.dev/"
  },
  {
    id: 2,
    name: "TypeScript",
    image: "/ts.svg",
    description: "A statically typed superset of JavaScript that improves reliability and developer productivity.",
    link: "https://www.typescriptlang.org/"
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/js.svg",
    description: "The core language of the web used for interactivity and full-stack development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: 4,
    name: "Next.js",
    image: "/next.svg",
    description: "A powerful React framework with SSR, SSG, API routes, and great developer experience.",
    link: "https://nextjs.org/"
  },
  {
    id: 5,
    name: "React.js",
    image: "/re.svg",
    description: "A JavaScript library for building dynamic user interfaces with component-based architecture.",
    link: "https://react.dev/"
  },
  {
    id: 6,
    name: "Echo",
    image: "/echo.svg",
    description: "High performance, extensible, minimalist Go web framework.",
    link: "https://echo.labstack.com/"
  },
  {
    id: 7,
    name: "GORM",
    image: "/gorm.svg",
    description: "The fantastic ORM library for Golang.",
    link: "https://gorm.io/"
  },
  {
    id: 8,
    name: "Node.js",
    image: "/nodejs.svg",
    description: "A runtime that allows building scalable backend services with JavaScript.",
    link: "https://nodejs.org/en/"
  },
  {
    id: 9,
    name: "Express",
    image: "/express.svg",
    description: "A fast, minimalist framework for Node.js used for building APIs and backend logic.",
    link: "https://expressjs.com/"
  },
  {
    id: 10,
    name: "PostgreSQL",
    image: "/postgresql.svg",
    description: "A powerful, open source object-relational database system.",
    link: "https://www.postgresql.org/"
  },
  {
    id: 11,
    name: "Prisma",
    image: "/prisma.svg",
    description: "A modern, open-source ORM that provides a type-safe way to interact with databases in TypeScript applications.",
    link: "https://www.prisma.io/docs"
  },
  {
    id: 12,
    name: "MongoDB",
    image: "/mongodb.svg",
    description: "A document-based NoSQL database ideal for flexible, scalable web apps.",
    link: "https://www.mongodb.com/"
  },
  {
    id: 13,
    name: "Firebase",
    image: "/firebase.svg",
    description: "A BaaS platform offering authentication, hosting, and NoSQL database services.",
    link: "https://firebase.google.com/"
  },
  {
    id: 14,
    name: "Supabase",
    image: "/supabase.svg",
    description: "An open source Firebase alternative providing a Postgres database, Authentication, and APIs.",
    link: "https://supabase.com/"
  },
  {
    id: 15,
    name: "Redis",
    image: "/redis.svg",
    description: "An in-memory data structure store, used as a database, cache, and message broker.",
    link: "https://redis.io/"
  },
  {
    id: 16,
    name: "Docker",
    image: "/docker.svg",
    description: "The core platform for building, shipping, and running applications in containers across any environment.",
    link: "https://docs.docker.com/"
  },
  {
    id: 17,
    name: "AWS",
    image: "/aws.svg",
    description: "Comprehensive and widely adopted cloud platform, offering computing power, database storage, and more.",
    link: "https://aws.amazon.com/"
  },
  {
    id: 18,
    name: "Linux",
    image: "/linux.svg",
    description: "An open-source Unix-like operating system kernel.",
    link: "https://www.kernel.org/"
  },
  {
    id: 19,
    name: "GitHub Actions",
    image: "/githubactions.svg",
    description: "Automate, customize, and execute your software development workflows right in your repository.",
    link: "https://github.com/features/actions"
  },
  {
    id: 20,
    name: "Git",
    image: "/git.svg",
    description: "A version control system to manage code changes and collaborate efficiently.",
    link: "https://git-scm.com/"
  },
  {
    id: 21,
    name: "Python",
    image: "/python.svg",
    description: "A beginner-friendly, versatile language used in automation, scripting, and backend development.",
    link: "https://docs.python.org/3/"
  },
  {
    id: 22,
    name: "C",
    image: "/c.svg",
    description: "A foundational systems language that powers operating systems and embedded software.",
    link: "https://en.cppreference.com/w/c"
  },
  {
    id: 23,
    name: "C++",
    image: "/cpp.svg",
    description: "A foundational systems language that powers performance-critical applications.",
    link: "https://isocpp.org/"
  },
  {
    id: 24,
    name: "Java",
    image: "/java.svg",
    description: "An object-oriented language heavily used in Android apps and enterprise systems.",
    link: "https://docs.oracle.com/en/java/"
  },
  {
    id: 25,
    name: "Vue.js",
    image: "/vue.svg",
    description: "A JavaScript framework for building reactive user interfaces using component-based architecture.",
    link: "https://vuejs.org/"
  },
  {
    id: 26,
    name: "Tailwind CSS",
    image: "/tail.svg",
    description: "A utility-first CSS framework for rapidly building custom designs with ease.",
    link: "https://tailwindcss.com/"
  },
  {
    id: 27,
    name: "Shadcn UI",
    image: "/shadcn-ui.svg",
    description: "A modern component library built with Radix UI and Tailwind CSS, focused on accessibility.",
    link: "https://ui.shadcn.com/"
  },
  {
    id: 28,
    name: "Chakra UI",
    image: "/chakra.svg",
    description: "A modular, accessible React component library that offers flexibility and style props.",
    link: "https://chakra-ui.com/"
  }
];


export const workExperience = [
  {
    id: 1,
    title: "Devops Lead - TSEC Codecell",
    desc: [
      "Spearheaded the development and deployment of the platform and execution engine for Weekly Challenges, a CP competition with 650+ users.",
      "Designed an asynchronous judging pipeline using Redis queues and concurrent Go workers, decoupling code execution from the API and enabling submissions to be processed without blocking the application.",
      "Deployed Dockerized services on AWS EC2/RDS with CI/CD via GitHub Actions and Watchtower"
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/codecell.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern - Saras Finance",
    desc: [
      "Migrated a 20k+ line production frontend codebase from JavaScript to TypeScript single-handedly, defining reusable types and interfaces to enforce compile-time safety and reduce runtime errors.",
      "Implemented a centralized Axios service layer used across 40+ API endpoints with request/response interceptors for HTTP-only token injection, global error handling, and retry logic.",
      "Revamped the frontend of a core product, refactoring 30+ UI components to improve maintainability."
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/saras.png",
  },
  {
    id: 3,
    title: "Fullstack Web Developer, TSEC Devs Club",
    desc: "Redesigned the official landing page with Next.js, integrating smooth Lottie animations to enhance interactivity and visual appeal.",
    className: "md:col-span-2",
    thumbnail: "/devs-light.svg",
  },
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
    img: "/twitter.png",
    link: 'https://x.com/DamnthatsDarryl',
    about: 'Darryl Mathias X'
  },
  {
    id: 4,
    img: "/gmail.svg",
    link: 'mailto:darrylnevmat@gmail.com',
    about: 'Darryl Mathias Gmail'
  },
  {
    id: 5,
    img: "/medium.svg",
    link: 'https://medium.com/@mathiasndarryl7',
    about: 'Darryl Mathias Medium'
  },
  {
    id: 6,
    img: '/quora.svg',
    link: 'https://www.quora.com/profile/Darryl-Mathias-5',
    about: 'Darryl Mathias Quora'
  },
  {
    id: 7,
    img: '/yt.svg',
    link: 'https://www.youtube.com/channel/UCIgATHMupDeW4f-Q48ufrng',
    about: 'Darryl Mathias Youtube'
  },
  // {
  //   id: 8,
  //   img: '/reddit.svg',
  //   link: 'https://www.reddit.com/user/Spiritual-Banana1048/',
  //   about: 'Darryl Mathias Reddit'
  // }
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