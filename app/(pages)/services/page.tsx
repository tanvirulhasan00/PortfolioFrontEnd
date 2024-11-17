"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const services = [
  {
    num: "01",
    title: "Web Application",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Application",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "",
  },
  {
    num: "03",
    title: "Database Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="flex w-full justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h1 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h1>
                {/* description */}
                <p>{item.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
