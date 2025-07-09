export const About =()=>{
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind",
        "Recoil"
    ]
      const backendSkills = [
        "Node.js",
        "ExpressJS",
        "JavaScript",
        "MongoDB",
        "Postgress",
        "JWT",
        "AWS",
        "ZOD"
    ]
    return <section id= "about"
    className="min-h-sccreen flex items-center justify-center py-20"
    >
     <div className="max-w-3xl mx-auto px-4">
       <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent text-center">About Me</h2>
       <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <p className="text-gray-300 mb-6">
            Passionate developer with expertise in buiding scalable
            and responsive web applications and creating innovative solutions.

        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                    {
                        frontendSkills.map((tech, key)=>(
                            <span 
                            key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                            hover:shadow-[0_2px_8px_rgba(168,85,247,0.5)] transition">
                                {tech}
                            </span>
                        ))
                    }
                </div>
                
            </div>
             <div className="rounded-xl p-6 hover:-translate-y-1 border border-white/10 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                    {
                        backendSkills.map((tech, key)=>(
                            <span 
                            key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                            hover:shadow-[0_2px_8px_rgba(168,85,247,0.5)] transition">
                                {tech}
                            </span>
                        ))
                    }
                </div>
                
            </div>
        </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Education</h3>

        </div>
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">Experience</h3>

        </div>

       </div>
     </div>
    </section>
}