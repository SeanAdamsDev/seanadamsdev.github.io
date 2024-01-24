import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
// import Work4 from "../../assets/work4.jpg";
// import Work5 from "../../assets/work5.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "FLOW Studio Website",
    description: "Created using WordPress and WooCommerce",
    work__button: 'https://flowthestudio.co.za/',
    category: "web",
  },
  {
    id: 2,
    image: Work2,
    title: "AI Fullstack Project",
    description: "Created using Next.JS, TypeScript, Prisma, Tailwind and Stripe",
    work__button: 'https://ai-saas-lemon.vercel.app/',
    category: "web",
  },
  {
    id: 3,
    image: Work3,
    title: "JobSearch Android App (Web Version)",
    description: "Created using React Native and Expo. However, hosted on Vercel to display web version. APK file can be sent on request.",
    work__button: 'https://job-search-app-gamma.vercel.app/home',
    category: "app",
  },
  // {
  //   id: 4,
  //   image: Work4,
  //   title: "App movil",
  //   category: "app",
  // },
  // {
  //   id: 5,
  //   image: Work5,
  //   title: "Web design",
  //   category: "web",
  // },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  // {
  //   name: "design",
  // },
];
