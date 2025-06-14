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
      "Building towards something bigger — thoughtful ideas, built fast, made real..",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ideas are global. I just follow where they go.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
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
  // },
  {
    id: 4,
    title: "Passionate about tech, always building toward something bigger.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Social Media App",
    description: "The Insider 🤫",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have something bold in mind? Let’s build it.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
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
    id: 2,
    title: "Byteguide",
    des: "ByteGuide is a recipe website designed to help users explore and prepare dishes effortlessly.",
    img: "/byteguide.png",
    iconLists: ["/html.svg", "/tail.svg", "/js.svg"],
    link: "https://darrylmathias.github.io/ByteGuide/",
    floatingTitle: "www.byteguide.app",
  },
  {
    id: 3,
    title: "UpdateMe",
    des: "Stay informed with UpdateMe — a dynamic news platform delivering fresh headlines and immersive 3D animations.",
    img: "/updateMe.png",
    iconLists: ["/re.svg", "/tail.svg", "/shadcn-ui.svg", "/accertinity.png"],
    link: "https://updateme-seven.vercel.app/",
    floatingTitle: "www.updateme.app",
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
  }
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
    link : 'https://www.linkedin.com/in/darryl-mathias-020241317/'
  },
  {
    id: 2,
    img: "/git.svg",
    link : 'https://github.com/DarrylMathias'
  },
  {
    id: 3,
    img: "/gmail.svg",
    link : 'darrylnevmat@gmail.com'
  },
  {
    id: 4,
    img : '/quora.svg',
    link : 'https://www.quora.com/profile/Darryl-Mathias-5'
  },
  {
    id: 5,
    img : '/yt.svg',
    link : 'https://www.youtube.com/channel/UCIgATHMupDeW4f-Q48ufrng'
  }
];
