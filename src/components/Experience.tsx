import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023-running</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Software Engineer"
            subTitle="IT company (jan 2024- present)"
            result="Bangladesh"
            des="IT company is an software company in Bangladesh. It is very comfortable to work here and very enjoyable. "
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="unianimous it team - (march 2023 -  jan 2024)"
            result="Bangladesh"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Bangladesh isn't easy"
          />
          <ResumeCard
            title="Front-end Developer intern"
            subTitle="unianimous It(jan 2023- march 2023)"
            result="Bangladesh"
            des="The Bangladesh has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tutor"
            subTitle="ssc and hsc students"
            result="Faridpur"
            des="The time period as the tutor of the students and helping them to get the good results in the borad exam is always satisfying"
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="IT company"
            result="Bangladesh"
            des="To make the skilled people for the country is always a good and happy feeling because it will be help the country for growing economy"
          />
          <ResumeCard
            title="School Teacher"
            subTitle="sunrise pre-cadet school(2021-2022)"
            result="Bangladesh"
            des="The time i was there with the pre-school students is always feels happy for me."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
