import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023-running</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Unianimous It"
            subTitle="intern"
            result="Success"
            des="The intern period is nice and a growing scale of my skill. It helps to know the new feature and technologies."
          />
          <ResumeCard
            title="Unianimous It"
            subTitle="Web Developer"
            result="Success"
            des="working with a nice team is the blessing for a software enginner. I did that here"
          />
          <ResumeCard
            title="IT company"
            subTitle="jr. software enginner"
            result="Success"
            des="I am working on this company now and i am happy to be work here."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023-running</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Software Engineer"
            subTitle="IT company (jan 2024- present)"
            result="Success"
            des="It company is an software company in Bangladesh. It is very comfortable to work here and very enjoyable."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="unianimous it team - (march 2023 - jan 2024)"
            result="Success"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Bangladesh isn't easy"
          />
          <ResumeCard
            title="Front-end Developer intern"
            subTitle="unianimous It(jan 2023- march 2023)"
            result="Success"
            des="The Bangladesh has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
