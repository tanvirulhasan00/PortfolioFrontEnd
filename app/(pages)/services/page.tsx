"use client";
import { motion } from "motion/react";
import axios, { HttpStatusCode } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";

type Service = {
  success: boolean;
  statusCode: HttpStatusCode;
  message: string;
  error: object;
  data: [
    {
      id: number;
      name: string;
      description: string;
    }
  ];
};
const data = [
  {
    id: "01",
    name: "Web Application",
    description:
      "Develop robust online applications to suit your business needs",
  },
  {
    id: "02",
    name: "Mobile Application",
    description:
      "Developing innovative and native mobile apps for Android, iOS platforms",
  },
  {
    id: "03",
    name: "E-commerce",
    description:
      "Provide ultimate e-commerce solution as well as customizations for your e-commerce business",
  },
];
const Services = () => {
  const [services, setServices] = useState<Service>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://localhost:7013/api/service/GetAll";

  const fetchData = async () => {
    await axios
      .get(baseUrl)
      .then((res) => {
        return setLoading(true), setServices(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    // fetchData();
  }, []);

  console.log("data", services);
  console.log("error", error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px]"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}

                <div className="flex w-full justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.id}
                  </div>
                  <Link
                    href={""}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h1 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.name}
                </h1>
                {/* description */}
                <p className="">{item.description}</p>
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
