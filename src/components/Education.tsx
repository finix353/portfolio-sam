import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012-running</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education session</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Textile Enginnering"
            subTitle="NITER(university of Dhaka) (2022-running)"
            result="3.20/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Govt. Sarada Sundari Mohila College, Faridpur (2019-2021)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Faridpur Govt. Girls High School (2017-2019)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

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
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Bangladesh isn't easy."
          />
          <ResumeCard
            title="Front-end Developer intern"
            subTitle="unianimous It(jan 2023- march 2023)"
            result="Bangladesh"
            des="The Bangladesh economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
