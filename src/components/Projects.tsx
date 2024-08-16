import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Bus ticketing system"
            des="A Proper Bus Ticketing system landing  page is done by me . it is on work soon it will be a proper bus ticketing online system"
            src={projectOne}
          />
          <ProjectsCard
            title="Expense tracker"
            des=" you will track the full month expense here.Which will be help you to avoid the extra expenses."
            src={projectTwo}
          />
          {/* <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          /> */}
          {/* <ProjectsCard
            title="Bus ticketing system"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          /> */}
          <ProjectsCard
            title="inventory managemanet system"
            des=" An Inventory Management System (IMS) is a software or a combination of technology and processes used to monitor and manage the flow of goods and materials."
            src={projectOne}
          />
          {/* <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          /> */}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
