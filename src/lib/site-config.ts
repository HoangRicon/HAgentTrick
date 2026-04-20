import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My Documentation",
    template: "%s | My Documentation",
  },
  description: "A modern documentation website with beautiful design",
};

export const siteConfig = {
  name: "My Documentation",
  description: "A modern documentation website with beautiful design",
  url: "https://example.com",
  author: "Your Name",
  email: "hello@example.com",
  location: "Vietnam",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
  },
};
