// Static portfolio content exposed through the MCP server.
// All of this data is already public on the published website.

export const profile = {
  name: "Aashish Pant",
  location: "Nepal",
  roles: [
    "Computer Engineering Student",
    "Political Observer",
    "Social Writer",
    "Youth Voice Advocate",
  ],
  careerObjective:
    "To become an exemplary person who uses knowledge, technology, and creativity to make a positive impact in society. I aim to raise the voices of the voiceless through writing and digital platforms while growing into a skilled and responsible computer engineer. My goal is to combine technical expertise with social awareness to contribute meaningfully to both the digital world and the community.",
  languages: [
    { name: "English", level: "Proficient" },
    { name: "Nepali", level: "Native" },
    { name: "Hindi", level: "Conversational" },
  ],
  interests: [
    "Political awareness and understanding governance",
    "Writing and expressing youth voices",
    "Public speaking and communication",
    "Analyzing current affairs and societal issues",
  ],
};

export const socialLinks = [
  { platform: "Facebook", url: "https://facebook.com/aashish.pant.02/" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/aashishpant" },
  { platform: "Instagram", url: "https://instagram.com/officialaashishpant" },
];

export const education = [
  {
    degree: "Bachelor in Computer Engineering",
    school: "Nepal College of Information and Technology",
    year: "2082 – Present",
    gpa: null as string | null,
    status: "Currently Pursuing",
  },
  {
    degree: "+2 Science",
    school: "LRI School (NEB Board)",
    year: "2079 – 2082",
    gpa: "3.86",
    status: "Completed",
  },
  {
    degree: "SEE (School Level)",
    school: "Shree Mountain EMB School (NEB Board)",
    year: "Completed 2079",
    gpa: "3.70",
    status: "Completed",
  },
];

export const skills = [
  { name: "Social Media Advertising", level: 85 },
  { name: "Canva Designing", level: 90 },
  { name: "AI Tools", level: 75 },
  { name: "Basic Programming", level: 65 },
  { name: "Research & Trend Analysis", level: 80 },
  { name: "Time Management", level: 85 },
  { name: "Problem-Solving", level: 80 },
  { name: "Critical Thinking", level: 85 },
  { name: "Teamwork & Collaboration", level: 90 },
  { name: "Image & Video Design", level: 78 },
];

export const experience = [
  {
    title: "Leadership & Teamwork",
    description:
      "Contributed to school and community events through leadership and teamwork.",
  },
  {
    title: "Event Organization & Content",
    description: "Experience in event organization and digital content creation.",
  },
  {
    title: "Communication & Coordination",
    description:
      "Strong communication and coordination skills from group and club activities.",
  },
];

export const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, animated portfolio built with React, Tailwind CSS, and Framer Motion — showcasing my work as a student, writer, and thinker.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Youth Voices Blog",
    description:
      "A long-form writing project amplifying youth perspectives on Nepali politics, technology, and social change.",
    tags: ["Writing", "Editorial", "Civic Tech"],
  },
  {
    title: "Engineering Notes",
    description:
      "An evolving collection of computer engineering notes, mini-projects, and experiments from my coursework.",
    tags: ["C", "Python", "Hardware"],
  },
];

export const articles = [
  {
    title: "१८ वर्षे आँखाबाट मेरो देश, मेरो भविष्य !",
    description:
      "An 18-year-old's perspective on Nepal's future, identity, and the dreams of a new generation stepping into civic life.",
    url: "https://nayasandesh.com/archives/70948",
    category: "Youth",
    readTime: "5 min read",
    published: true,
  },
  {
    title:
      "प्रदर्शनबाट सत्तासम्म : जेन–जेड पुस्ताले नेपालको राजनीति कसरी पुनःपरिभाषित गर्‍यो?",
    description:
      "How Nepal's Gen-Z generation moved from street protests to political power — redefining the country's political landscape.",
    url: "https://nayasandesh.com/archives/77135",
    category: "Politics",
    readTime: "8 min read",
    published: true,
  },
  {
    title: "भोटलाई विद्रोह बनाउने जेन्जी पुस्ता : फागुन निर्वाचन निर्णायक",
    description:
      "The Gen-Z generation turning votes into rebellion — why the upcoming Falgun election will be decisive for Nepal.",
    url: "https://simananews.com/archives/9174",
    category: "Society",
    readTime: "6 min read",
    published: true,
  },
  {
    title: "Coming Soon",
    description: "New insights on politics, youth, and digital society.",
    url: null as string | null,
    category: "Upcoming",
    readTime: "—",
    published: false,
  },
];

export const politicalView = [
  "I believe politics should be a platform for development, innovation, and positive change rather than conflict and division. My political view focuses on empowering youth, improving education, promoting technology-driven governance, and creating opportunities within Nepal so talented young people do not feel forced to leave the country for success.",
  "I support transparent leadership, accountability, and policies that prioritize practical development, entrepreneurship, digital transformation, and sustainable growth. I believe Nepal needs modern thinking, skilled leadership, and active participation from educated youth to build a stronger and more self-reliant nation.",
  "My vision is for a progressive Nepal where technology, education, and unity become the foundation of national growth, helping create a future that is globally competitive while preserving our identity, culture, and values.",
];
