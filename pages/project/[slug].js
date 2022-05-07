import ProjectSlideShow from "../../components/ProjectSlideShow";
import StickyNavbar from "../../components/StickyNavbar";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import {
  getProjectBySlug,
  getNextProject,
  getPrevsiousProject,
} from "../../lib/constants";
import { useRouter } from "next/router";
const ProjectDetails = ({ project, prevProject, nextProject }) => {
  console.table(prevProject);
  console.table(nextProject);
  const router = useRouter();
  return (
    <div>
      <StickyNavbar isOfficePage={false} darkMode={true} />
      <div className="w-[90%] m-auto pt-32">
        <div>
          <ProjectSlideShow images={project.images} />
        </div>
        <div className="pt-8">
          <h1 className="text-2xl">{project.fullName}</h1>
          <div>
            <p className="text-gray-600 [line-height:2rem;] text-justify">
              {project.description}
            </p>
            <div className="flex flex-row space-x-8 pt-8  items-center border-t-2 border-black pb-2">
              <h1 className="font-bold text-xl">Project Name</h1>
              <h1 className="text-lg">{project.fullName}</h1>
            </div>
            <div className="flex flex-row space-x-8 pt-8  items-center border-t-2 border-black pb-2">
              <h1 className="font-bold text-xl">Typology</h1>
              <h1 className="text-lg">{project.category}</h1>
            </div>
            <div className="flex flex-row space-x-8 pt-8  items-center border-t-2 border-black pb-2">
              <h1 className="font-bold text-xl">Location</h1>
              <h1 className="text-lg">{project.location}</h1>
            </div>
            <div className="flex flex-row space-x-8 pt-8  items-center border-t-2 border-black pb-2">
              <h1 className="font-bold text-xl">Year</h1>
              <h1 className="text-lg">
                {project.year.length <= 0
                  ? "N/A"
                  : project.year.length > 1
                  ? `${project.year[0]} - ${project.year[1]}`
                  : `${project.year[0]}`}
              </h1>
            </div>
            <div className="flex flex-row space-x-8 pt-8  items-center border-t-2 border-black pb-2">
              <h1 className="font-bold text-xl">Status</h1>
              <h1 className="text-lg">{project.status}</h1>
            </div>
            <div className="flex flex-row space-x-8 pt-8  items-center border-t-2 border-black pb-2">
              <h1 className="font-bold text-xl">Client</h1>
              <h1 className="text-lg">
                {project.client !== "" ? project.client : "N/A"}
              </h1>
            </div>
            <div className="flex flex-row space-x-8 pt-8  items-center border-t-2 border-black pb-2">
              <h1 className="font-bold text-xl">Area</h1>
              <h1 className="text-lg">
                {project.area !== "" ? project.area : "N/A"}
              </h1>
            </div>
            <div className="flex flex-row space-x-8 pt-8  items-center border-t-2 border-black pb-2">
              <h1 className="font-bold text-xl">Architects</h1>
              <h1 className="text-lg">
                {project.Architects.map((architect) => (
                  <span key={architect}>{architect}, </span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap bg-gray-500 p-2">
        {prevProject && (
          <div
            className={`flex flex-row items-center ${
              nextProject
                ? "[flex:50%;] justify-start"
                : " [flex:100%;] justify-center"
            }  text-white pl-2`}
          >
            <CgArrowLongLeft
              className="cursor-pointer text-2xl mr-3"
              onClick={() => {
                router.push(`/project/${prevProject.slug}`);
              }}
            />
            <div className="flex flex-col justify-center items-center">
              <span>PREV PROJECT</span>
              <h1 className="text-lg">{prevProject.fullName}</h1>
            </div>
          </div>
        )}
        {nextProject && (
          <div
            className={`flex flex-row items-center ${
              prevProject
                ? "[flex:50%;] justify-end"
                : " [flex:100%;] justify-center"
            }  text-white pl-2`}
          >
            <div className="flex flex-col justify-center items-center">
              <span>NEXT PROJECT</span>
              <h1 className="text-lg">{nextProject.fullName}</h1>
            </div>
            <CgArrowLongRight
              className="cursor-pointer text-2xl ml-3"
              onClick={() => {
                router.push(`/project/${nextProject.slug}`);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;

export const getServerSideProps = async (ctx) => {
  const slug = ctx.query.slug;
  const project = getProjectBySlug(slug);
  const prevProject = getPrevsiousProject(slug);
  const nextProject = getNextProject(slug);
  return {
    props: {
      project,
      prevProject,
      nextProject,
    },
  };
};
