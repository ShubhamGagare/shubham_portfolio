export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
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
    title: "Tech enthusiast with a passion for design and development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Edutrack - AI based School MIS",
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
    title: "HandCraftUI - Component Libarary ",
    des: "Developing a custom UI component library called HandcraftUI, inspired by Shadcn UI, featuring support for npx imports",
    img: "/edutrack.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg", "ai.svg"],
    link: "https://www.npmjs.com/package/handcraft-ui/",
  },
  {
    id: 2,
    title: "Edutrack - AI based School MIS",
    des: "Inspired by SIMS Next Gen created AI based Smart MIS to improve educators efficiency and ease of use.",
    img: "/edutrack.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg", "ai.svg"],
    link: "https://school-management-system-web-ten.vercel.app/",


  },
  // {
  //   id: 3,
  //   title: "SiyaraTech Innovations",
  //   des: "",
  //   img: "/volante.jpg",
  //   iconLists: ["/angular.svg", "/css-3.svg", "/java-4.svg", "/kafka.svg"],
  //   link: "/volante",

  // },
  {
    id: 5,
    title: "Paytm Clone",
    des: "",
    img: "/paytm.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/express.svg",],
    link: "https://github.com/ShubhamGagare/paytm-Nextjs",

  },
  {
    id: 6,
    title: "Medium Clone",
    des: "",
    img: "/medium.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg",],
    link: "https://github.com/ShubhamGagare/medium-clone",

  },
];


export const companies = [
  {
    id: 1,
    name: "ParentPay",
    img: "",
    nameImg: "/ppgroup.png",
  },
  {
    id: 2,
    name: "Volante",
    img: "",
    nameImg: "/vol.png",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Product Designer - ParentPay",
    time: "Nov 2021 - Apr 2024",
    desc: "",
    details: [
      "Conducting user research and interviews with UK school staff.", "Created low - high fidelity wireframes for Fire and Take register.", "Improvised on received feedback from pilot schools which resulted in 25 % in user adoption", "The new design is well received by the school staff, who expressed positive feedback."],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    link: "/parentpay"
  },
  {
    id: 2,
    title: "Software Engineer - Volante",
    time: "March 2019 - Nov 2021",
    desc: "",
    details: [
      " Worked in a team of 3 to provide integrated design solutions for automation tools across different versions of Volpay.", "Conducted user research to design new and improved features in collaboration with the team.", "Developed frontend (HTML, CSS, AngularJS) and backend (Java) components.", "Accelerated automation configuration, saving testers' time by 40%.", "Collaborated with Product Managers, BA and QA teams to ensure product quality."],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "/volante"

  },
  {
    id: 3,
    title: "Big Market - Freelance Web Dev Project",
    time: "",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment.",
    details: [
      " Conducted user research and interviews to understand customer needs.", "Created wireframes and prototypes to streamline the design process.", "Developed an end-to-end web application using React, Node.js, and PostgreSQL."],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    link: "/bigmarket"

  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ShubhamGagare"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/ShubhamGagare11"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shubham-gagare-543a05160"
  },
];
