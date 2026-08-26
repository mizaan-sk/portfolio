export const personal = {
  name: "Mizaan Shaikh",
  firstName: "Mizaan",
  title: "Full Stack Web Developer",
  tagline: "I craft fast, modern, and delightful web experiences.",
  email: "mizaandev@gmail.com",
  phone: "+91 7208151615",
  location: "Thane, Maharashtra, India",
  avatar: "/images/my-avatar.png",
  resume: "/images/resume.pdf",
  about: [
    "I am a passionate Full Stack Web Developer focused on building modern, responsive, and user-friendly websites and web applications. I specialize in React.js, Next.js, JavaScript, TypeScript, Redux, Node.js, Express.js, MongoDB, Tailwind CSS, and REST APIs.",
    "My expertise includes developing scalable frontend and backend solutions using modern web technologies while ensuring performance, accessibility, and seamless user interaction. I am dedicated to writing clean code, continuously learning new technologies, and creating impactful products that deliver both functionality and great user experience.",
  ],
  socials: {
    github: "https://github.com/mizaan-sk",
    linkedin: "https://www.linkedin.com/in/mizaan-shaikh-54a317287/",
    email: "mailto:mizaandev@gmail.com",
  },
};

export const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with React, Next.js, and modern HTML/CSS that look great on every device.",
    icon: "Monitor",
  },
  {
    title: "Full-stack Web Apps",
    description:
      "End-to-end development of web applications, from database design to deployment, tailored to your business needs.",
    icon: "Layers",
  },
  {
    title: "Performance & SEO",
    description:
      "Auditing and improving load times, Core Web Vitals, and SEO so your site ranks higher and users stay longer.",
    icon: "Gauge",
  },
  {
    title: "CRM & Integrations",
    description:
      "Connecting websites with HubSpot, Zoho, Salesforce, and custom workflows to boost lead capture and automation.",
    icon: "Workflow",
  },
];

export const education = [
  {
    title: "B.Sc. Information Technology",
    institute: "VPM's B.N. Bandodkar College of Science, Mumbai",
    period: "2022 — 2025",
    description:
      "Graduated with an outstanding CGPI of 9.93, building a strong foundation in software development, web technologies, and computer science fundamentals.",
  },
  {
    title: "HSC (Higher Secondary Certificate)",
    institute: "SHETH N.K.T College, Mumbai",
    period: "2020 — 2022",
    description:
      "Completed higher secondary education with 82% in the Science stream, laying the groundwork for a career in technology.",
  },
  {
    title: "SSC (Secondary School Certificate)",
    institute: "Shreerang Vidyalaya English Medium, Mumbai",
    period: "Completed 2020",
    description:
      "Secured 82% in the secondary board examinations, demonstrating consistent academic performance from an early stage.",
  },
];

export const experience = [
  {
    title: "Web Developer",
    company: "Realatte Ventures",
    period: "Dec 2025 — Present",
    description:
      "Developing and deploying scalable corporate websites using Next.js and Redux, improving application performance by 30%. Integrated Strapi Headless CMS, built CRM pipelines with HubSpot, Zoho, and Salesforce, and leveraged AI tools like Claude and n8n to streamline development workflows.",
  },
  {
    title: "Web Developer",
    company: "Nuvoraa Digital",
    period: "Apr 2025 — Nov 2025",
    description:
      "Developed SEO-optimized, responsive websites using React.js and Next.js, improving page performance and user engagement. Built form workflows and CRM integrations that improved lead capture accuracy by 40%. Collaborated with design, marketing, and product teams to deliver business-focused web solutions. (Acquired by Realatte Digital during tenure.)",
  },
];

export const skills = [
  { name: "React.js / Next.js", level: 90 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "Node.js / Express.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Tailwind CSS / HTML / CSS", level: 90 },
  { name: "CRM Integration (HubSpot, Zoho, Salesforce)", level: 80 },
  { name: "SEO & Performance Optimization", level: 85 },
  { name: "GSAP / Animations", level: 70 },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Strapi",
  "REST APIs",
  "HubSpot",
  "Zoho",
  "Salesforce",
  "Git",
  "Vercel",
];

export type Project = {
  title: string;
  category: "Websites" | "Landing Page" | "Web application";
  image: string;
  link: string;
  description?: string;
  favicon?: string;
};

export const projects: Project[] = [
  {
    title: "Lotus Developers",
    category: "Websites",
    image: "/banner/lotus.png",
    link: "http://72.61.172.34:3061/",
    description: "Landmark luxury residences and Grade-A commercial developments.",
  },
  {
    title: "NSL Luxe",
    category: "Websites",
    image: "/banner/nslluxe.png",
    link: "https://nslluxe.com/",
    description: "Luxury real estate corporate website showcasing premium developments.",
  },
  {
    title: "JP Group",
    category: "Websites",
    image: "/banner/jpgroup.png",
    link: "https://jpgrp.in/",
    description: "Real estate & construction developer website with 40+ years legacy.",
  },
  {
    title: "Ratnaakar",
    category: "Websites",
    image: "/banner/ratnakar.png",
    link: "https://ratnaakar.com/",
    description: "Prominent real estate developers in Ahmedabad offering premium projects.",
  },
  {
    title: "Sumadhura Group",
    category: "Websites",
    image: "/banner/sumdhura.png",
    link: "https://sumadhuragroup.com/",
    description: "Leading real estate developer in Bengaluru & Hyderabad crafting quality living.",
  },
  {
    title: "Salarpuria Group",
    category: "Websites",
    image: "/banner/salarpuria.png",
    link: "https://www.salarpuriagroup.com/",
    description: "Renowned real estate group building commercial & residential landmarks.",
  },
  {
    title: "Purvanchal UAE",
    category: "Websites",
    image: "/banner/purvanchal.png",
    link: "https://purvanchaluae.ae/",
    description: "International real estate developer site with luxury UAE property showcases.",
  },
  {
    title: "Bhavisha Homes",
    category: "Websites",
    image: "/banner/bhavisha.png",
    link: "https://www.bhavishahomes.com/",
    description: "Residential property website showcasing modern apartments and amenities.",
  },
  {
    title: "VTP Realty",
    category: "Websites",
    image: "/banner/vtprealty.png",
    link: "https://www.vtprealty.in/",
    description: "Premier Pune real estate developer site featuring residential & commercial hubs.",
  },
  {
    title: "Oriom Group",
    category: "Websites",
    image: "/banner/oriomgroup.png",
    link: "https://www.oriomgroup.com/",
    description: "Infrastructure and real estate corporate portal with modern UI.",
  },
  {
    title: "Oriom Realty",
    category: "Websites",
    image: "/banner/oriomrealty.png",
    link: "https://oriomrealty.com/",
    description: "Real estate development and property consulting website.",
  },
  {
    title: "BR Steel & Power",
    category: "Websites",
    image: "/banner/brsteel.png",
    link: "https://brsteelandpower.com/",
    description: "Industrial corporate website for steel manufacturing and power.",
  },
  {
    title: "Diamond Group",
    category: "Websites",
    image: "/banner/diamondgroup.png",
    link: "https://diamondgroupweb.com/",
    description: "Real estate corporate website showcasing commercial and residential projects.",
  },
  {
    title: "Avinash Group",
    category: "Websites",
    image: "/banner/avinash.png",
    link: "https://www.avinashgroup.com/",
    description: "Leading central India real estate developer township portal.",
  },
  {
    title: "Well Wisher",
    category: "Websites",
    image: "/banner/wellwisher.png",
    link: "https://wellwishergroup.in/",
    description: "Corporate real estate website with luxury project galleries.",
  },
  {
    title: "Whispering Waves",
    category: "Websites",
    image: "/images/11.png",
    link: "https://surakshawhisperingwaves.com/",
    description: "Real-estate corporate site with rich media and lead capture.",
  },
  {
    title: "Courtyard",
    category: "Websites",
    image: "/images/111.png",
    link: "https://courtyardbyvs.com/",
    description: "Hospitality corporate website with elegant layouts.",
  },
  {
    title: "24 High",
    category: "Websites",
    image: "/images/12q.png",
    link: "https://24high.in/",
    description: "Modern corporate website with SEO optimization.",
  },
  {
    title: "Gar Corporation",
    category: "Websites",
    image: "/images/1w.png",
    link: "https://garcorp.in/",
    description: "Corporate website with smooth animations and CMS.",
  },
  {
    title: "Inspira Builders",
    category: "Websites",
    image: "/images/d.png",
    link: "http://inspirabuilders.com/",
    description: "Builders corporate website with project showcases.",
  },
  {
    title: "Nuvoraa",
    category: "Websites",
    image: "/banner/nuvoraa.png",
    link: "https://www.nuvoraa.com/",
    description: "Digital agency corporate website featuring responsive UI and web services.",
  },
  {
    title: "Man Matters",
    category: "Landing Page",
    image: "/images/6.png",
    link: "https://manmatters.vercel.app/",
    description: "Conversion-focused landing page with smooth animations.",
  },
  {
    title: "Maple Bear",
    category: "Landing Page",
    image: "/images/8.png",
    link: "https://maplebear.vercel.app/",
    description: "Vibrant education landing page with interactive sections.",
  },
  {
    title: "Subhash Distributors",
    category: "Landing Page",
    image: "/images/9.png",
    link: "https://subhashdistributors.in/",
    description: "Business landing page with lead-capture workflow.",
  },
  {
    title: "Edelweiss Life",
    category: "Landing Page",
    image: "/images/1.png",
    link: "https://edel-weisss.vercel.app/",
    description: "Finance landing page with form integration.",
  },
  {
    title: "DIGITIZE 3.0",
    category: "Landing Page",
    image: "/images/2.png",
    link: "https://hiassignment.vercel.app/",
    description: "Event landing page with animated hero and timeline.",
  },
  {
    title: "Oasis",
    category: "Landing Page",
    image: "/images/3.png",
    link: "https://oasis-indol.vercel.app/",
    description: "Real-estate landing page with parallax visuals.",
  },
  {
    title: "Ethos",
    category: "Landing Page",
    image: "/images/4.png",
    link: "https://ethos-nine.vercel.app/",
    description: "Lifestyle landing page with rich typography.",
  },
  {
    title: "Sobha Central",
    category: "Landing Page",
    image: "/images/5.png",
    link: "https://sobha-central-sigma.vercel.app/",
    description: "Premium real-estate landing page with CRM integration.",
  },
  {
    title: "Danube",
    category: "Landing Page",
    image: "/images/7.png",
    link: "https://breezdanube.vercel.app/",
    description: "Luxury project landing page with smooth scroll storytelling.",
  },
  {
    title: "Quick Cart",
    category: "Web application",
    image: "/images/10.png",
    link: "https://quickcart-eosin-delta.vercel.app/",
    description: "Full-featured e-commerce web application with cart and checkout.",
  },
];

export const filters = ["All", "Websites", "Landing Page", "Web application"] as const;
