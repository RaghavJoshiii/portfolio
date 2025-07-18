
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-transparent text-foreground"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl mt-16 md:text-7xl pb-4 font-bold mb-6 bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent leading-right">
          Hi, I'm Raghav Joshi
        </h1>
        <p className="text-foreground/70 text-lg mb-8 max-w-lg mx-auto">
          I'm a full stack developer who loves to experiment with technology.
          My goal is to create attractive web applications and optimize them
          as much as I can. My strength is I am consistent, and eager to learn
          more every time. I have great learning skills, and I implement all my
          learnings to the projects I make. I am creative so if I got a raw idea
          of what to make I can enhance user experience that will force them to
          like my work.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="cosmic-button"
          >
            View Projects
          </a>
         
            <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-primary text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 text-shadow-[0_0_10px_rgba(167,139,250,0.5)]"
            >
            Contact me
            </a>

        </div>
      </div>
    </section>
  );
};
