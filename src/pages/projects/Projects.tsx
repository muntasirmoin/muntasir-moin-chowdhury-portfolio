import { projectData } from "./projectData";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="px-4 py-12 md:py-20"
        style={{
          background: `linear-gradient(
      135deg,
      rgba(8, 13, 32, 0.8),
      rgba(5, 8, 24, 0.9),
      rgba(23, 37, 84, 0.8)
    )`,
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Projects
        </h2>
        <div className="mt-4 h-1 w-20 mx-auto bg-blue-500 rounded-full mb-12"></div>

        <div className="space-y-16">
          {projectData.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
            >
              {/* Image */}
              <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[290px] object-fit transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/2 w-full text-white">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-indigo-300 italic mb-3">
                  {project.subtitle}
                </p>

                {/* Features */}
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Overview */}
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.overview}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-between gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 font-bold hover:bg-blue-700 text-white rounded-md text-sm transition"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 font-bold hover:bg-gray-800 text-white rounded-md text-sm transition"
                  >
                    Frontend Code
                  </a>
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 font-bold hover:bg-gray-800 text-white rounded-md text-sm transition"
                  >
                    Backend Code
                  </a>
                </div>
              </div>
              <br />
              <br />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
