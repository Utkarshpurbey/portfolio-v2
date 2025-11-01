import ncLogo from "../../public/assets/ncLogo.png";
import tenLogo from "../../public/assets/tenLogo.jpeg";
import zinierLogo from "../../public/assets/zinierLogo.png"; // assuming you'll add this logo

export const newExpList = [
  {
    companyName: "Zinier",
    tenure: "Jul 25 - Present",
    role: "Software Development Engineer - I",
    desc: "Migrating all modules to React 18 to enhance performance by 15% and ensure long-term scalability. Collaborating across teams to modernize the frontend architecture and improve developer productivity.",
    logo: zinierLogo,
  },
  {
    companyName: "Ninjacart",
    tenure: "Jul 23 - Jun 25",
    role: "Software Development Engineer",
    desc: "Streamlined onboarding for 15,000+ retailers with UI and API enhancements, integrating multiple lenders to simplify credit access. Built Buyer Subscription models with 83% adoption and 90.77% renewal rates, optimized payment flows, and improved event handling and performance across the app.",
    logo: ncLogo,
  },
  {
    companyName: "Ninjacart",
    tenure: "Jan 23 - Jun 23",
    role: "Software Development Intern",
    desc: "Built a produce price aggregation system using APIs and web scraping to surface nationwide insights. Automated data pipelines with Spring Boot and cron jobs, storing results in MongoDB and visualizing them through a React.js dashboard.",
    logo: ncLogo,
    isInternship: true,
  },
  {
    companyName: "The Entrepreneurship Network",
    tenure: "Jun 21 - Jul 21",
    role: "Scrum Master Intern",
    desc: "Facilitated Agile ceremonies and coordinated between cross-functional teams to improve sprint efficiency and collaboration. Managed stand-ups, sprint planning, and retrospectives to ensure timely project delivery.",
    logo: tenLogo,
    isLast: true,
  },
];
