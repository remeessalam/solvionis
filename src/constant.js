import {
  FaDesktop,
  FaMobileAlt,
  FaCloud,
  FaGamepad,
  FaRobot,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaUserTie,
  FaCogs,
  FaTrophy,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";

// web development image
import ecommerce from "./assets/images/landingpage/ecommerce.jpg";
import socialmedia from "./assets/images/landingpage/socialmedia.jpg";
import landingpage from "./assets/images/landingpage/landingpage.jpg";
import customer from "./assets/images/landingpage/custome.jpg";

//app development  images
import iosapp from "./assets/images/landingpage/iosapp.jpg";
import androidapp from "./assets/images/landingpage/androidapp.jpg";
import flutterapp from "./assets/images/landingpage/flutterapp.jpg";
import hybridapp from "./assets/images/landingpage/hybridapp.jpg";
export const companyDetails = {
  name: "SOLVIONIS",
  email: "example@abc.com",
  phone: "+91-9381452155",
  address:
    "R seenappa, site.no-26, Tc 12th palya cross, vinayaka layout battarahalli, karnataka, 560049.",
};

export const ourServices = [
  {
    id: 1,
    title: "Web Development",
    img: "assets/img/services/web.jpg",
    description: "Building Engaging Digital Experiences",
    details:
      "Your website is more than just an online presence; it’s a vital tool that drives growth and engagement. At [Your Company Name], we specialize in designing and developing websites that are not only visually appealing but also functional, responsive, and optimized for performance.",
    services: [
      "Custom website design and development",
      "E-commerce platforms and solutions",
      "Performance optimization and SEO",
      "Content management systems (WordPress, Joomla, etc.)",
      "Ongoing support and maintenance",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    img: "assets/img/services/app.jpg",

    description: "Connect with Your Customers on the Go",
    details:
      "With mobile technology becoming an essential part of daily life, having a mobile app can set you apart from the competition. At [Your Company Name], we specialize in creating engaging, high-performance mobile applications for both iOS and Android platforms.",
    services: [
      "Native and cross-platform development",
      "UI/UX design focused on user-centric experiences",
      "Integration with third-party APIs and services",
      "Performance optimization",
      "Post-launch updates and support",
    ],
  },
  {
    id: 3,
    img: "assets/img/services/cloud.jpg",

    title: "Cloud Computing Services",
    description: "Scalable, Efficient, and Secure Solutions",
    details:
      "The cloud offers businesses unparalleled flexibility, cost savings, and scalability. At [Your Company Name], we help you leverage the cloud to streamline your operations, improve collaboration, and reduce overhead costs.",
    services: [
      "Cloud infrastructure management",
      "Data storage and backup solutions",
      "Cloud-based collaboration tools",
      "Disaster recovery solutions",
      "Cost-effective cloud optimization",
    ],
  },
  {
    id: 4,
    title: "Game Development",
    img: "assets/img/services/game.jpg",

    description: "Crafting Immersive Digital Worlds",
    details:
      "At [Your Company Name], we understand that gaming is about more than just entertainment; it’s about creating experiences that captivate and engage users.",
    services: [
      "2D and 3D game design and development",
      "Mobile, console, and PC games",
      "Augmented reality (AR) and virtual reality (VR) experiences",
      "Interactive storytelling and gameplay mechanics",
      "Post-launch support and updates",
    ],
  },
  {
    id: 5,
    title: "Cybersecurity Services",
    img: "assets/img/services/security.jpg",

    description: "Protecting Your Digital Assets",
    details:
      "As cyber threats become more sophisticated, protecting your business’s data and systems has never been more critical. At [Your Company Name], we offer comprehensive cybersecurity solutions designed to safeguard your company’s digital assets.",
    services: [
      "Security audits and vulnerability assessments",
      "Endpoint protection and malware prevention",
      "Network security and firewall setup",
      "Data encryption and secure communication",
      "Incident response and threat mitigation",
    ],
  },
  {
    id: 6,
    title: "Artificial Intelligence (AI)",
    img: "assets/img/services/ai.jpg",

    description: "Smart Solutions for Smarter Business",
    details:
      "Artificial Intelligence is transforming industries by automating processes, improving decision-making, and enhancing customer experiences. At [Your Company Name], we help businesses harness the power of AI to innovate, optimize, and stay competitive.",
    services: [
      "Machine learning and deep learning applications",
      "Predictive analytics and data-driven insights",
      "Natural language processing (NLP) for chatbots and virtual assistants",
      "Robotic process automation (RPA)",
      "Custom AI solutions tailored to your business needs",
    ],
  },
  {
    id: 7,
    title: "Cloud Migration Services",
    img: "assets/img/services/migration.jpg",
    description: "Smooth and Seamless Transitions",
    details:
      "Migrating to the cloud can provide your business with better scalability, security, and cost efficiency. At [Your Company Name], we specialize in cloud migration services that make the transition smooth and hassle-free.",
    services: [
      "Cloud readiness assessment",
      "Data migration and synchronization",
      "Application migration and re-platforming",
      "Post-migration support and optimization",
    ],
  },
];

export const whatWeDo = [
  {
    title: "Web Development",
    description:
      "Your website is a critical part of your business, and we build websites that not only look great but also perform flawlessly. Whether it’s a simple informational site or a complex e-commerce platform, we craft solutions that are both functional and engaging.",
    icon: <FaDesktop />,
  },
  {
    title: "Mobile App Development",
    description:
      "Reach your customers on the go with high-performance mobile apps. Our development team creates apps for both iOS and Android platforms, designed to provide seamless experiences for your users.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Cloud Computing Services",
    description:
      "Move your business to the cloud with ease. Our cloud services help you optimize infrastructure, increase efficiency, and scale your operations securely and cost-effectively.",
    icon: <FaCloud />,
  },
  {
    title: "Game Development",
    description:
      "We create engaging, interactive games that captivate players across multiple platforms, including mobile, console, and VR/AR. From concept to execution, we bring your ideas to life.",
    icon: <FaGamepad />,
  },
  {
    title: "Artificial Intelligence",
    description:
      "We help businesses harness the power of AI to automate processes, make smarter decisions, and create personalized customer experiences.",
    icon: <FaRobot />,
  },
  {
    title: "Cybersecurity Services",
    description:
      "In today’s digital world, security is paramount. Our cybersecurity solutions protect your business from threats, ensuring your data and systems remain safe.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Cloud Migration",
    description:
      "Transitioning to the cloud can be a complex process, but our team ensures the migration is smooth and seamless, with minimal disruption to your daily operations.",
    icon: <FaCloudUploadAlt />,
  },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Expertise",
    description:
      "Our team consists of skilled professionals with diverse expertise, ensuring that we can handle any challenge that comes our way.",
    icon: <FaUserTie />,
  },
  {
    id: 2,
    title: "Custom Solutions",
    description:
      "We don’t offer cookie-cutter solutions. Every project is tailored to fit your unique requirements, helping your business achieve its goals.",
    icon: <FaCogs />,
  },
  {
    id: 3,
    title: "Proven Success",
    description:
      "We have a history of delivering successful projects across various industries, consistently exceeding expectations.",
    icon: <FaTrophy />,
  },
  {
    id: 4,
    title: "Cutting-Edge Technologies",
    description:
      "We stay up to date with the latest trends and technologies to ensure that our solutions are always innovative and relevant.",
    icon: <FaRocket />,
  },
  {
    id: 5,
    title: "Customer-Centric Approach",
    description:
      "We build relationships, not just solutions. Your satisfaction is at the forefront of everything we do.",
    icon: <FaHandsHelping />,
  },
];

export const testimonials = [
  {
    service: "Web Development",
    testimonial:
      "Our experience with [Your Company Name] was outstanding. They took the time to understand our vision and created a website that not only looks fantastic but also functions seamlessly. The team’s ability to integrate modern design with user-friendly features has helped us improve customer engagement and boost online sales. We’ve received positive feedback from both our customers and our team about how easy it is to navigate. They truly exceeded our expectations!",
    name: "Emily Lawson",
    position: "Marketing Director",
    company: "GreenTech Solutions",
  },
  {
    service: "Mobile App Development",
    testimonial:
      "Partnering with [Your Company Name] for our mobile app development was one of the best decisions we made. Their team was proactive, creative, and delivered an app that fits perfectly with our brand. The final product is intuitive, responsive, and has significantly improved how we interact with our customers. Our app has led to a notable increase in sales and customer retention. We couldn't be more pleased with the results and the level of support we continue to receive.",
    name: "Michael Walker",
    position: "CEO",
    company: "ShopSmart",
  },
  {
    service: "Cloud Computing Services",
    testimonial:
      "After facing numerous challenges with our in-house servers, we turned to [Your Company Name] for cloud computing solutions. From day one, their team was incredibly knowledgeable and guided us through the process with ease. They helped us migrate to the cloud with minimal disruption, and now we enjoy greater flexibility, reduced costs, and improved operational efficiency. It’s been a game-changer for our company, and we’re grateful for their expertise.",
    name: "Samantha Hayes",
    position: "CTO",
    company: "InnovateTech Solutions",
  },
  {
    service: "Game Development",
    testimonial:
      "Our game concept was a dream, but bringing it to life felt like a huge challenge. [Your Company Name] transformed that dream into a reality. From design to development, their team was with us every step of the way. The end result was a fully immersive, high-quality game that exceeded our expectations. The feedback from players has been overwhelmingly positive, and it’s had great success in the market. We look forward to collaborating with them again on future projects.",
    name: "James Bennett",
    position: "Founder",
    company: "EpicGames Studios",
  },
  {
    service: "Cybersecurity Services",
    testimonial:
      "As a financial institution, safeguarding our systems is critical. [Your Company Name] provided us with robust cybersecurity solutions that give us confidence every day. Their thorough risk assessments and continuous monitoring have greatly improved our overall security posture. With their help, we’ve been able to safeguard our sensitive data and protect our customers from potential threats. Their professionalism and expertise have been invaluable.",
    name: "David Ross",
    position: "Chief Information Security Officer",
    company: "SecureBank",
  },
  {
    service: "Artificial Intelligence (AI)",
    testimonial:
      "Implementing AI was a key goal for our company, and [Your Company Name] delivered on every front. Their team helped us develop a customized AI solution that streamlines our customer support through an advanced chatbot, while also enhancing our ability to analyze data and make better decisions. The results have been phenomenal—our customer satisfaction has improved, and we've experienced a noticeable increase in operational efficiency. Their expertise in AI has truly revolutionized the way we work.",
    name: "Laura Grant",
    position: "Director of Customer Experience",
    company: "HealthCare Plus",
  },
  {
    service: "Cloud Migration Services",
    testimonial:
      "Migrating to the cloud was a big move for our company, but [Your Company Name] made the process smooth and stress-free. They handled every detail, from assessing our needs to transferring our data and systems without disrupting our daily operations. Since completing the migration, we’ve experienced greater agility, scalability, and cost savings. We now have a cloud environment that meets our business needs, thanks to their expert team.",
    name: "Roberta Harris",
    position: "IT Manager",
    company: "Global Enterprises",
  },
];

export const webservices = [
  {
    id: 1,
    img: ecommerce,
    title: "E-commerce Website Development",
    description:
      "Build responsive and scalable e-commerce platforms that enhance user experience and drive sales.",
  },
  {
    id: 2,
    img: socialmedia,
    title: "Social Media Website Development",
    description:
      "Create dynamic social media platforms with engaging features that foster interaction and community building.",
  },
  {
    id: 3,
    img: landingpage,
    title: "Landing Page Design & Development",
    description:
      "Design visually compelling landing pages that capture leads, increase conversions, and boost your digital marketing efforts.",
  },
  {
    id: 4,
    img: customer,
    title: "Customer-Focused Website Solutions",
    description:
      "Develop custom websites tailored to your brand and customer needs, ensuring a seamless user experience and optimal performance.",
  },
];

export const appDevelopment = [
  {
    id: 1,
    img: iosapp,
    title: "iOS App Development",
    description:
      "We specialize in building seamless and high-performance iOS applications tailored to your business needs, ensuring a smooth user experience and integration with the latest Apple technologies.",
  },
  {
    id: 2,
    img: androidapp,
    title: "Android App Development",
    description:
      "Our Android app development services create powerful and intuitive mobile apps for Android devices, ensuring they are fast, secure, and optimized for a wide range of devices.",
  },
  {
    id: 3,
    img: flutterapp,
    title: "Flutter App Development",
    description:
      "Harness the power of Flutter to build cross-platform apps that run seamlessly on both iOS and Android, offering performance, flexibility, and native-like user experiences.",
  },
  {
    id: 4,
    img: hybridapp,
    title: "Hybrid App Development",
    description:
      "Create hybrid mobile apps that combine the best of native and web technologies, offering cost-effective, scalable, and high-performance apps for both iOS and Android platforms.",
  },
];
