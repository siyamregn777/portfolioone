import { profile } from "console";

export const navItems = [
  { name: "Home", link: "#/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "Bachelor degree in Computer Engineriing",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end ",
    img: "/all.jpg",
    spareImg: "",
    bold: true,
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    title: "AllinOne E-commerce Website",
    des: "An E-commerce website built with Next.js, Tailwind CSS, and TypeScript, featuring a modern design and seamless user experience.",
    img: "/shop.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://smartyshop.vercel.app/",
  },
  {
    id:2,
    title: "Glowing Stores - E-commerce Website",
    des: "store with a modern design and seamless user experience, built with Next.js, Tailwind CSS, and TypeScript.",
    img: "/glow.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://glowing-storess.vercel.app/",
  },

  {
    id: 3,
    title: "Africa Tourism - Travel Website",
    des: "A dynamic travel website showcasing Africa's tourism, built with Next.js, Tailwind CSS, and TypeScript.",
    img: "/afri.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://africa-tourism.vercel.app/",
  },
  {
    id: 4,
    title: "AI Front - (Frontend web app)",
    des: "A Software-as-a-Service application that leverages AI to enhance user experience and streamline workflows.",
    img: "/ai.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://aifront-indol.vercel.app/",
  },

  {
    id: 5,
    title: "Mobile Showcase (Frontend web app)",
    des: "An animated 3D website showcasing the Apple iPhone, built with Next.js, Tailwind CSS, and TypeScript.",
    img: "/lemon.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://travelgo-lemon.vercel.app/",
  },
  {
    id: 6,
    title: "LexiAssist-AI (Frontend web app)",
    des: "An AI-powered writing assistant that helps users create high-quality content quickly and easily.",
    img: "/lexi.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://lexiassist.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Siyamregn was a game changer for our project. He took our vague ideas and turned them into a sleek, functional product ahead of schedule. His communication was spot on, and his technical skills speak for themselves.",
    name: "Michael Johnson",
    profile: "/jac.jpg",
    title: "Senior web developer",
  },
  {
    quote:
      "Siyamregn brings energy and clarity to every stage of the development process. From planning to execution, he thinks like a user and codes like a pro. He’s one of the most dependable developers I’ve worked with.",
    name: "Solomon Asregdew",
    profile: "/sol.png",
    title: "Senior Developer at Gago IT",
  },
  {
    quote:
      "You rarely find someone who can both design and develop with such creativity and precision. Siyamregn helped us launch faster and better than we imagined. I highly recommend him to any startup team.",
    name: "Jacob Alfred",
    profile: "/jacob.png",
    title: "Startup Co-Founder",
  },
  {
    quote:
      "What stood out with Siyamregn was not just his clean code, but his ability to understand our business goals. He made smart suggestions that improved our product, and his execution was flawless.",
    name: "Tadele Tesema",
    profile: "/tadele.png",
    title: "Senior Developer at Gago IT",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Web Developer",
    desc: "Designed and developed web applications using React.js and Node.js, focusing on user experience and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Backend Developer",
    desc: "Developed RESTful APIs and integrated third-party services, ensuring data security and scalability",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Freelance Web Dev Project",
    desc: "Led a team to create a dynamic web application, implementing responsive design and modern UI/UX principles.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/siyamregn777",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "https://twitter.com/siyamregn777",
  // },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/siyamregn-yeshidagna-028947354/",
  },
];