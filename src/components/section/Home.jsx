export const Home =()=>{
    return <section id= "home"
    className="min-h-screen flex items-center justify-center relative"
    >
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl mt-16 md:text-7xl pb-4 font-bold mb-6 bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent leading-right">
                Hi, I'm Raghav Joshi
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a full stack developer who loves to experiment with technology.
                My goal is to create attractive web applications and optimize them
                as much as I can. My strength is I am consistent, and eager to learn
                more everytime. I have great learning skills, and I implement all my 
                learnings to the projects I make. I am creative so if I got a raw idea
                of what to make I can enhance user experience that will force them to 
                like my work.

            </p>
            <div className=" flex justify-center space-x-4">
                <a href="#projects"
                className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                >View Projects</a>
                <a href="#contact"
                className="border border-purple-500/50 text-puple-500 py-3 px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:translate-y-0.5 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                >Contact me</a>
            </div>
        </div>

    </section>
}