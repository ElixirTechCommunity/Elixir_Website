export const EVENT_API =
  "https://elixir-backendv2.vercel.app/events/?format=json";
import {
  chromecast,
  disc02,
  discord,
  discordBlack,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  linkedin,
  twitter,
  yourlogo,
} from "@/assets";
import { url } from "inspector";

// import linkedin from '@/assets';

export const navigation = [
  {
    id: "0",
    title: "Notes",
    url: "notes",
  },
  {
    id: "1",
    title: "Events",
    url: "events",
  },
  {
    id: "2",
    title: "Mentors",
    url: "mentors",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "1st Year",
    text: "Even though it's 11th and 12th all over again, we've got you covered with first-year essentials+ C (iykyk)",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: "/sticky-notes.png",
    imageUrl: "/1.png",
    url: "https://drive.google.com/drive/folders/1TTjSSShjK5nrUURnSIVOK1wnO-CBCp7R",
  },
  {
    id: "1",
    title: "2nd Year",
    text: "Familiar with your UNI by now? Here is your cheat-sheet mate as the game's about to get real.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: "/sticky-notes.png",
    imageUrl: "/2.png",
    light: true,
    url: "https://drive.google.com/drive/folders/1c2gZ8TJ53P3ecNETMB403lTueQY5pEHU",
  },
  {
    id: "2",
    title: "3rd Year",
    text: "Your tech-stack matters more than your Notes dump but we know backlogs suck. So you know the rules!",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: "/sticky-notes.png",
    imageUrl: "/3.png",
    url: "https://drive.google.com/drive/folders/1jUHgBPZdN5V5Am6gEHpHNTc4XWIQgC_W",
  },
  {
    id: "3",
    title: "4th Year",
    text: "Study some between your coffee breaks at office. Your handouts for an even shorter preparation. All the best for future big bird!",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: "/sticky-notes.png",
    imageUrl: "/4.png",
    light: true,
    url: "https://drive.google.com/drive/folders/1LdrCdkcasmu_qA0vOK-UdI8UeThNhZ2C",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/invite/YN9ZGjXdXK",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/TheElixirTech",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/geeksforgeeks_abesec/",
  },
  {
    id: "3",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/geeksforgeeks-abesec/",
  },
];
