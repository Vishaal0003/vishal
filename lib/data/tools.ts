export interface Tool {
  id: string;
  title: string;
  tag?: string;
  tagColor?: "red" | "cyan";
  description: string;
  stack: string[];
  href: string;
  docsHref?: string;
  featured?: boolean;
  bgVariant?: "particles" | "grid" | "plain";
}

export const tools: Tool[] = [
  {
    id: "01",
    title: "MailDefender",
    tag: "[ BLUE TEAM TOOL ]",
    tagColor: "cyan",
    description:
      "AI-powered phishing analysis tool designed to scrutinize email headers, URLs, and sender authenticity. Implements spoofed domain detection, anomaly analysis, and simulates SOC workflows to generate detailed incident reports.",
    stack: ["Python", "FastAPI", "React", "Generative AI"],
    href: "https://github.com/Vishal0003/MailDefender",
    featured: true,
    bgVariant: "particles",
  },
  {
    id: "02",
    title: "Password Generator",
    tag: "[ SECURITY TOOL ]",
    tagColor: "cyan",
    description:
      "A secure, privacy-focused password generator built using HTML, CSS, and JavaScript. This tool generates strong passwords locally in your browser, no data is stored or transmitted. ",
    stack: ["HTML5", "CSS3", "JavaScript"],
    href: "https://github.com/Vishaal0003/Password-Generator",
    bgVariant: "grid",
  },
  {
    id: "03",
    title: "More on GitHub →",
    tag: "[ EXPLORE ]",
    tagColor: "cyan",
    description: "Access my repository of cybersecurity automation scripts, tools, and security research.",
    stack: [],
    href: "https://github.com/Vishaal0003",
    bgVariant: "plain",
  },
];
