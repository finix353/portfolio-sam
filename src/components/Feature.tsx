import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Website Stratagy"
            des="i will provide you the strategy that how the wenbsite will form for your business or company etc."
            icon={null}
          />
          {/* <Card
            title="App Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<AiFillAppstore />}
          /> */}
          {/* <Card
            title="SEO Optimisation"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiProgress />}
          /> */}
          {/* <Card
            title="Mobile Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaMobile />}
          /> */}
          {/* <Card
            title="UX Design"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiAntdesign />}
          /> */}
          <Card
            title="Hosting Websites"
            des="your website will be hosted in a proper domain .using your company name or so on."
            icon={<FaGlobe />}
          />
          <Card
          title="Web development"
          des="you will get a proper responsive website,using html,css,js,js-dom,react"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
