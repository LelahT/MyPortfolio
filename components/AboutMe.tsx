import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          Hi! I'm{" "}
          <span className="font-bold tracking-wider text-white">
            Lelah Tehmeh
          </span>{" "}
          and I'm a freelance{" "}
          <span className="font-bold text-white">Web Designer</span>. The story starts in the summer going into my senior year of 
            college. At the time I was a pre-law major studying for the LSAT. 
            One day I came across an ad for coding and the rest was history. 
            To be honest, I fell in love. I am a problem solver at heart but
            coding allowed me to do much more. I was able to create, help others, 
            and do all that while constantly learning. I have never shied away from a 
            challenge, I can actually thrive in these environments. 
            My skills, vision, and drive work closely together to create the greatness 
            that is me. Anyways, haha It’s nice to meet you, I hope you’re ready. 

        </p>
        <div className="w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutList title="Web design" />
          <AboutList title="Graphic & print" />
          <AboutList title="iOS design" />
          <AboutList title="Front-end development" />
          <AboutList title="User experience" />
          <AboutList title="Branding" />
          <AboutList title="Back-end development" />
          <AboutList title="Responsive" />
          <AboutList title="Wordpress Website" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
