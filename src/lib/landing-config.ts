import { siteConfig } from "./site-config";

export const landingConfig = {
  hero: {
    badge: "Welcome to my portfolio",
    headline: "Hi, I'm a Full-Stack Developer",
    subheadline:
      "I build exceptional digital experiences with modern technologies. Passionate about clean code, user-centric design, and open source.",
    ctaPrimary: {
      title: "View My Work",
      href: "/docs",
    },
    ctaSecondary: {
      title: "Get in Touch",
      href: "/contact",
    },
  },
  about: {
    title: "About Me",
    bio: [
      "I'm a passionate developer with over 5 years of experience building web applications. I specialize in React, Next.js, Node.js, and cloud technologies.",
      "I love creating beautiful, functional, and accessible websites that provide great user experiences. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",
    ],
    highlights: [
      "5+ years of development experience",
      "Built 50+ projects",
      "Open source contributor",
      "Modern tech stack enthusiast",
    ],
  },
  features: [
    {
      icon: "Code",
      title: "Clean Code",
      description:
        "Writing maintainable, well-documented code that follows best practices and is easy to understand.",
    },
    {
      icon: "Palette",
      title: "Beautiful Design",
      description:
        "Creating visually stunning interfaces with attention to typography, color, and user experience.",
    },
    {
      icon: "Zap",
      title: "Fast Performance",
      description:
        "Optimizing applications for speed and efficiency, ensuring smooth user interactions.",
    },
    {
      icon: "Shield",
      title: "Secure & Reliable",
      description:
        "Implementing security best practices and writing robust code that handles edge cases.",
    },
    {
      icon: "Accessibility",
      title: "Accessible",
      description:
        "Building inclusive applications that work for everyone, following WCAG guidelines.",
    },
    {
      icon: " Globe",
      title: "Open Source",
      description:
        "Contributing to and maintaining open source projects that benefit the community.",
    },
  ],
  stats: [
    { label: "Years Experience", value: "5+", suffix: "" },
    { label: "Projects Completed", value: "50+", suffix: "" },
    { label: "Happy Clients", value: "30+", suffix: "" },
    { label: "Lines of Code", value: "100K+", suffix: "" },
  ],
  cta: {
    title: "Let's Work Together",
    description:
      "Have a project in mind? I'd love to hear about it. Let's discuss how I can help bring your ideas to life.",
    button: {
      title: "Start a Conversation",
      href: "/contact",
    },
  },
  seo: {
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
  },
};
