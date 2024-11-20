"use client";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGitSquare,
  FaGithub,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiCsharp,
  SiJavascript,
  SiPostgresql,
  SiRedis,
  SiMysql,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I love solving problems and building things through code. Programming isn't just my profession, it's my passion. I enjoy exploring new technologies, and enhancing my knowledge.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tanvirul Hasan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1970806028",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Tanvirul Hasan",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "tanvirhasan00@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Hindi,Bangla",
    },
  ],
};
//experience data
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "With 2 years of experience. I have honed my skills in frontend and backend development with a strong foundation in ASP.NET Core MVC and Webapi ",
  items: [
    {
      company: "Edesh-Ltd",
      position: "Full Stack Developer",
      duration: "Feb 2024 - Present",
    },
    {
      company: "Edesh-Ltd",
      position: "Back-end Developer Intern",
      duration: "Nov 2023 - Jan 2024",
    },
    {
      company: "Clone Studio",
      position: "Front-end Developer",
      duration: "Feb 2023 - Oct 2023",
    },
  ],
};
//education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "I have Completed a Bachelor’s in Computer Science from Independent University, Bangladesh, preceded by an HSC from Cambrian College and a Dakhil Certificate from Gazirchat Madinatul Ulum Fajil Madrasha, building a strong foundation in science, technology, and Islamic studies.",
  items: [
    {
      institution: "Independent University, Bangladesh",
      degree: "Computer Science",
      duration: "2015 - 2020",
    },
    {
      institution: "Cambrian College",
      degree: "HSC",
      duration: "2012 - 2014",
    },
    {
      institution: "Gazirchat Madinatul ulum Fajil Madrasha",
      degree: "Dakhil",
      duration: "2010 - 2012",
    },
  ],
};
//skills data
const skills = {
  title: "My skills",
  description:
    "Skilled in designing and developing robust web applications with a strong foundation in Object-Oriented Programming (OOP), algorithms, and data structures. Proficient in clean code architecture, implementing scalable solutions using .NET, ASP.NET Core, MVC, WebAPI, and Razor Pages. Experienced with both frontend and backend technologies, including C#, SQL, MySQL, Redis, React, Next.js, HTML5, JavaScript, CSS, Sass, Tailwind CSS, and Bootstrap.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaSass />,
      name: "Sass",
    },
    {
      icon: <SiJavascript />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiDotnet />,
      name: ".NET",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <FaGitSquare />,
      name: "Git",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[80vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[250px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
