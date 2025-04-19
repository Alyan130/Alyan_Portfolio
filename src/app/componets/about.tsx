"use client"

import React, { useTransition, useState, useEffect } from "react";
import TabButton from "./tabbutton";
import { client } from "@/sanity/lib/client";
import OrbitingCirclesDemo from "./skills";


type TabData = {
  title: string;
  id: string;
  content:React.ReactNode;
};

type About={
  skills:string[],
  education:string[],
  courses:string[],
}

export const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition();
  const [data, setData] = useState<About|null>(null);


  useEffect(()=>{
    const fetchdata = async () =>{
      const data:About = await client.fetch(`
      *[_type=="about"]{
        skills,
        education,
        courses,
      }[0]
      `)
      setData(data)
    }   
    fetchdata() 
  },[])

  const TAB_DATA: TabData[] = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
         {
          data?.skills.map(e=>
          <li key={e}>{e}</li>
            )
         }
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
        {
          data?.education.map(e=>
          <li key={e}>{e}</li>
            )
         }
        </ul>
      ),
    },
    {
      title: "Courses",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
           {
          data?.courses.map(e=>
          <li key={e}>{e}</li>
            )
         }
        </ul>
      ),
    },
  ];  

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white py-10 md:py-0" id="about">
      <div className="md:grid flex md:grid-cols-2 flex-col gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="w-full order-2 md:order-1">
        <OrbitingCirclesDemo/>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
          A passionate frontend developer with a strong focus on building modern, responsive, and dynamic web applications. With expertise in Next.js, TypeScript, Tailwind CSS, and the Shadcn UI library, I specialize in creating intuitive and visually appealing user interfaces that deliver seamless user experiences. I am dedicated to continuous learning and staying updated with the latest frontend technologies to create the best possible user experiences. 
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-7">{selectedTab?.content}</div>
        </div>
      </div>
    </section>
  );
};

