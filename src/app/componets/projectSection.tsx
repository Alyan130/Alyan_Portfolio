import React from "react";
import ProjectCard from "./projectcard";
import { sanityFetch } from "@/sanity/lib/live";
import { projectsQuery } from "@/sanity/lib/queries";

interface Project {
  _id: string;
  Title: string;
  Description: string;
  image: string;
  giturl: string;
  deploy: string;
}

const ProjectsSection = async () => {
  const { data } = await sanityFetch({
    query: projectsQuery,
  });
  const projectsData: Project[] = data;

  return (
    <section id="projects" className="py-5">
      <h2 className="text-3xl text-center font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-bold text-white">
        My Projects
      </h2>
      <p className="text-gray-400 text-center mt-4 sm:mt-6 text-sm tracking-wide text-balance md:text-base  mb-8">
       Projects based on modern technologies and best practices.
      </p>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <li
            key={project._id}
            className="opacity-0 translate-y-12 y transition-transform duration-400"
            style={{
              transitionDelay: `${index * 0.4}s`,
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
