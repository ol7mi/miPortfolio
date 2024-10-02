// Projects.js
import React from 'react';
import { useProjectStore } from '../../store/store';
import ProjectSlide from '../../components/ProjectSlide/ProjectSlide';

const Projects = () => {
  const projects = useProjectStore((state) => state.projects);

  return (
    <div>
      {projects.map((project) => (
        <ProjectSlide
          key={project.id}
          title={project.title}
          subtitle={project.subtitle}
          images={project.images}
          description={project.description}
          features={project.features}
        />
      ))}
    </div>
  );
};

export default Projects;
