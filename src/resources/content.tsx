import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Utkarsh",
  lastName: "Yadav",
  name: `Utkarsh Yadav`,
  role: "Software Developer",
  avatar: "/images/avatar1.jpg",
  email: "utkarshyadav6745@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Hindi", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/utkarshyadav11",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/iutkarshyadav/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/utkarshyadav11_/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>A passionate React Developer from India</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work", // TODO: Update with your featured project slug
  },
  subline: (
    <>
      I'm {person.firstName}, a passionate {person.role.toLowerCase()} specializing in React.
      <br /> Currently learning Docker and Kubernetes, and building innovative web applications.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true, // Set to true and add link if you have a calendar booking system
    link: "https://cal.com/utkarsh11",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.name} is an India-based {person.role.toLowerCase()} with 3 years of experience in
        React development. Passionate about building scalable web applications and transforming
        complex challenges into simple, elegant solutions. Currently working at C-Zentrix, focusing
        on modern frontend technologies and continuously learning new tools like Docker and
        Kubernetes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "C-Zentrix",
        timeframe: "2025 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Developed and maintained multiple React-based web applications, improving user
            engagement and application performance by 40%.
          </>,
          <>
            Built responsive and scalable frontend solutions using React, Next.js, and modern
            JavaScript frameworks, reducing load times by 30%.
          </>,
          <>
            Collaborated with cross-functional teams to deliver high-quality software solutions,
            following agile methodologies and best practices.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "C-Zentrix Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Humbee Studio",
        timeframe: "2023 - 2024",
        role: "Web Developer",
        achievements: [
          <>
            Designed and implemented dynamic user interfaces for variety of client projects using
            modern JavaScript frameworks.
          </>,
          <>Streamlined web development workflows by implementing reusable component libraries.</>,
          <>
            Optimized website performance and SEO, resulting in improved search engine rankings and
            user retention.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Humbee Studio Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "I2E Consulting Pvt Ltd",
        timeframe: "2022 - 2023",
        role: "Frontend Developer Trainee",
        achievements: [
          <>
            Assisted in building and styling web pages using HTML5, CSS3, and JavaScript best
            practices.
          </>,
          <>
            Gained hands-on experience with React.js while supporting senior developers in feature
            implementation.
          </>,
          <>
            Participated in code reviews and learned about industry-standard version control and
            development cycles.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor's Degree in Computer Science from SRM University",
        description: (
          <>
            Studied software engineering. Specialized in Data Structures and Artificial Intelligence
            (DS/AI).
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React & Next.js",
        description: (
          <>
            Building modern, scalable web applications with React and Next.js. 3 years of hands-on
            experience in developing responsive user interfaces and server-side rendered
            applications.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "React Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Frontend Development",
        description: (
          <>
            Expertise in modern frontend technologies including HTML5, CSS3, JavaScript, and various
            CSS frameworks. Proficient in building responsive and accessible web applications.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Frontend Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DevOps & Tools",
        description: (
          <>
            Currently learning Docker and Kubernetes for containerization and orchestration.
            Familiar with Git, version control, and modern development workflows.
          </>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Git",
            icon: "git",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and design..",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to src/app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
