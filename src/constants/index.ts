import {
  CodeIcon,
  Github,
  GraduationCap,
  LanguagesIcon,
  Phone,
  ShieldCheck,
  Trophy,
  UserIcon,
  Mail,
  MapPin,
  Linkedin,
  Database,
  Coffee,
  Trophy as TrophyIcon,
  Code2,
  Clock,
  CircuitBoard,
  Search,
  Cpu
} from "lucide-react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "CS Student",
    icon: GraduationCap,
    description: "B.Tech in Computer Science Engineering with AI & ML specialization at Karunya University."
  },
  {
    title: "Programming",
    icon: CodeIcon,
    description: "Proficient in Python, SQL, Java, C++, and C programming languages."
  },
  {
    title: "NCC Cadet",
    icon: ShieldCheck,
    description: "Active member of National Cadet Corps with experience in national-level camps."
  },
  {
    title: "Aspiring Developer",
    icon: UserIcon,
    description: "Focused on technology and national service with a disciplined approach to problem-solving."
  },
];

const technologies = [
  {
    name: "Python",
    icon: CodeIcon,
    percent: 80,
  },
  {
    name: "SQL",
    icon: Database,
    percent: 70,
  },
  {
    name: "Java",
    icon: Coffee,
    percent: 70,
  },
  {
    name: "C++",
    icon: Code2,
    percent: 60,
  },
  {
    name: "C",
    icon: CircuitBoard,
    percent: 60,
  },
  {
    name: "Arduino",
    icon: Cpu,
    percent: 75,
  },
];

const experiences = [
  {
    title: "National Cadet Corps",
    company_name: "2 CTC NCC",
    icon: ShieldCheck,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Completed two years of disciplined training under the 2 CTC NCC Unit at Karunya University.",
      "Developed leadership, teamwork, and resilience through military-style training.",
      "Participated in Thal Sainik Training Camp (TSTC).",
      "Participated in Thal Sainik Camp - 1 (TSC).",
      "Gained hands-on experience in drill, fieldcraft, weapon training, and physical fitness.",
      "Demonstrated strong commitment, adaptability, and organizational skills."
    ],
  },
  {
    title: "B.Tech Computer Science Engineering",
    company_name: "Karunya University",
    icon: GraduationCap,
    iconBg: "#E6DEDD",
    date: "2023 - 2027",
    points: [
      "Specialization in Artificial Intelligence and Machine Learning.",
      "Current CGPA: 6.54",
      "Semester 4 SGPA: 6.34",
      "Focused on building a strong foundation in computer science fundamentals.",
      "Actively engaged in various technical and extracurricular activities.",
    ],
  },
  {
    title: "Certification",
    company_name: "CISCO Networking Academy",
    icon: Trophy,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Completed foundational courses in Python programming.",
      "Completed foundational courses in C programming.",
      "Gained hands-on experience in coding and problem-solving.",
      "Developed practical programming skills applicable to real-world scenarios.",
    ],
  },
];

const languages = [
  {
    name: "English",
    proficiency: "Fluent",
    percent: 60,
  },
  {
    name: "Hindi",
    proficiency: "Fluent",
    percent: 60,
  },
  {
    name: "Tamil",
    proficiency: "Native",
    percent: 90,
  },
  {
    name: "Malayalam",
    proficiency: "Intermediate",
    percent: 50,
  },
];

const testimonials = [
  {
    testimonial:
      "Hari demonstrated exceptional leadership skills during our NCC training camps, always willing to take initiative and support team members.",
    name: "NCC Officer",
    designation: "2 CTC NCC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "His dedication to learning and problem-solving abilities make him stand out among his peers. Always eager to take on new challenges.",
    name: "University Professor",
    designation: "Computer Science Department",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Hari on the Recipe Management System project was a great experience. His attention to detail and technical expertise were invaluable.",
    name: "Project Collaborator",
    designation: "Freelance Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "Smart Dive Watch for Scuba Divers",
    description:
      "A wearable device that monitors underwater pressure in real-time for scuba divers. Integrated pressure sensors and microcontroller-based systems ensure accurate depth tracking, enhancing safety and user experience during underwater activities.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "sensors",
        color: "green-text-gradient",
      },
      {
        name: "embedded",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg",
    demo_link: "#",
    source_code_link: "#",
  },
  {
    name: "Home-Based Recipe Management System",
    description:
      "A user-friendly application designed to store, organize, and search recipes using SQL for backend data management. The system focuses on efficient data handling and ease of use for home users, allowing them to manage their recipe collection effectively.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "database",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg",
    demo_link: "#",
    source_code_link: "#",
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 8921355829",
    link: "tel:+918921355829"
  },
  {
    icon: Mail,
    title: "Email",
    content: "hp4921121@gmail.com",
    link: "mailto:hp4921121@gmail.com"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Coimbatore, India",
    link: "https://maps.google.com/?q=Coimbatore,India"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    content: "Hari Prasad",
    link: "https://www.linkedin.com/in/hariprasad/"
  }
];

export { services, technologies, experiences, testimonials, projects, languages, contactInfo };