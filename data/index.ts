export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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
    title: "Currently building a Fitness app",
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
    title: "US-Bank Customer Churn Prediction",
    des: "In this end-to-end machine learning project, I developed a complete pipeline to predict customer churn. The process began with loading and preprocessing the dataset to ensure clean, structured input. I then trained and evaluated five different machine learning models, comparing their performance to select the most effective one. Hyperparameter tuning was applied to optimize the model's accuracy. Finally, the chosen model was deployed and integrated into a user-friendly web application to allow real-time churn predictions based on user input.",
    img: "/pls.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/wajjih/Customer-Churn-Prediction",
  },
  {
    id: 2,
    title: "TikTok Clone",
    des: "Built a full-stack TikTok clone that replicates core features of the popular short-form video platform. Users can upload and view looping videos, like and comment on posts, and scroll through a personalized video feed. The app includes real-time interactions, user authentication, and media handling. Designed with a responsive frontend for seamless mobile and desktop experience, and powered by a scalable backend for video storage and user data management.",
    img: "/roofs.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/wajjih/tiktok-clone",
  },
  {
    id: 3,
    title: "AI Code Editor",
    des: "Developed a smart, browser-based code editor integrated with the Judge0 API to support real-time code execution in multiple programming languages. Enhanced user experience with AI-powered features such as natural language code explanations, intelligent error debugging, and inline code chat assistance. Designed an intuitive frontend interface with Vanilla JavaScript, enabling smooth interaction and fast response times. The system intelligently interprets code context to provide meaningful suggestions, helping users learn and debug more efficiently.",
    img: "/judge.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/wajjih/AI-code-editor",
  },
  {
    id: 4,
    title: "AI Autocomplete Chrome Extension",
    des: "Developed a Chrome extension that brings intelligent text autocompletion to any website using AI. The tool enhances productivity by predicting and completing sentences in real-time based on user intent, context, and tone. Designed for seamless integration into text boxes across platforms (e.g., email, social media, documentation), it uses custom prompts and OpenAI's language model to generate human-like completions, rewrites, and suggestions. Built with a clean UI and optimized for speed and responsiveness.",
    img: "/chrone.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/wajjih/AI-Chrome-Extension",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Wajjih was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Wajjih's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Wajjih is the ideal partner.",
    name: "Haris Khan",
    title: "Software Engineer at CodePath",
    img: "/Haris.png",
  },
  {
    quote:
      "Working with Wajjih was a seamless experience from start to finish. His attention to detail, creative vision, and strong technical skills brought our ideas to life far beyond expectations. Wajjih doesn’t just build websites — he builds lasting impressions. Highly recommended for anyone serious about leveling up their digital presence.",
    name: "Saad Sabri",
    title: "Software Engineer at Datadog",
    img: "/Saad.png",
  },
  {
    quote:
      "Wajjih’s work ethic and talent speak for themselves. From the initial conversation to the final deliverable, he remained attentive, communicative, and driven to create something exceptional. His passion for development shines through every line of code. Trusting Wajjih with our project was one of the best decisions we made.",
    name: "Sabrun Sabri",
    title: "Software Engineer at Bank of America",
    img: "/Sabrun.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/morgan.svg",
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
    title: "Software Engineering Resident - HEADSTARTER",
    desc: " Built 14+ machine learning, ai-engineering and full-stack projects in fast-paced software team environments.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineering Intern - Morgan Stanley",
    desc: "Collaborated on maintaining and upgrading APIs with Scala backend and React frontend.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineering Intern - Morgan Stanley",
    desc: "Deployed Scala components to production using container orchestration and Jenkins CI/CD pipelines.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineering Fellow - PeopleShores",
    desc: "Built and deployed a full-stack web application using Python and Java, resulting in streamlined processes.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/wajjih",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/wajjih-muhammad/",
  },
];
