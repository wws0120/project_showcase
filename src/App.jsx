import { useState, useMemo } from 'react';
import ProjectCard from './componets/ProjectCard';
//import ProjectDetail from './componets/ProjectDetail';
import projects from './constant/projects';
import ReactModal from './componets/ui/ReactModal';
import Modal from 'react-modal';

import './App.css';

function App() {
  Modal.setAppElement('#root');
  const [projectOpen, setProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectProp = projects.find(
    (project) => project.id === selectedProject
  );

  const handleCardClick = (id) => {
    setSelectedProject(id);
  };

  console.log('projectProp', projectProp);
  console.log('selectedProject', selectedProject);

  return (
    <section id="demo" className="py-28">
      <div className="mx-auto container p-2">
        <div className="relative">
          <div className=" text-center">
            <h2 className="text-3xl text-lime-100 font-bold">My Projects</h2>
            <p className="text-slate-400 font-medium  mt-4">
              Showcased here is a selection of my accomplished projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {projects.map((item) => (
              <ProjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.coverImage}
                previewUrl={item.previewUrl}
                gallery={item.gallery}
                description={item.description}
                tags={item.tags}
                setProjectOpen={setProjectOpen}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
      {projectOpen && (
        <ReactModal
          modalIsOpen={projectOpen}
          setIsOpen={setProjectOpen}
          project={projectProp}
        />
      )}
    </section>
  );
}

export default App;
