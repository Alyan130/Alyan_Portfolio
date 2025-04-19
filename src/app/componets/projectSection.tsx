import React from "react";
import ProjectCard from "./projectcard";
import { sanityFetch } from "@/sanity/lib/live";
import { projectsQuery } from "@/sanity/lib/queries";

interface Project {
  _id: string;
  Title: string;
  Description: string;
  image:string; 
  giturl: string;
  deploy: string;
}
 
const ProjectsSection = async () => {
  const {data} = await sanityFetch({
    query:projectsQuery,
   }
   )
  const projectsData:Project[]= data
  
  

  return (
    <section id="projects">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mt-10 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <li
            key={project._id}
            className="opacity-0 translate-y-12 transition-opacity transition-transform duration-400"
            style={{
              transitionDelay: `${index * 0.4}s`,
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <ProjectCard
             project={project}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
