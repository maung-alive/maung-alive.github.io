import React from 'react'
import Project from '../components/Project'
import ShannKoeMeePNG from '../assets/shannkoemee.png'
import OSLikeWebPNG from '../assets/os-like-web.png'

function Projects() {
    return (
        <div className="w-full h-screen md:overflow-hidden pt-10 xl:pt-20 md:pt-28 md:pb-40">
            <p className="text-3xl font-medium pb-8 animate-opacity">Hobby Projects</p>
            <section className="grid md:grid-cols-2 gap-y-40 justify-evenly w-full md:h-screen md:overflow-auto pb-40 md:pb-0">
                <Project
                    img={ShannKoeMeePNG}
                    title="Shann Koe Mee"
                    description="A web application that allows users to play shann koe mee alone."
                    github={`https://github.com/maung-alive/shannkoemee`}
                    demo={`https://maung-alive.github.io/shannkoemee/`}
                />
                <Project
                    img={OSLikeWebPNG}
                    title="OpreationSystem in Web Browser"
                    description="A web application that simulates an operating system in the browser."
                    github={`https://github.com/maung-alive/os-like-web`}
                    demo={`https://maung-alive.github.io/os-like-web/`}
                />
            </section>
        </div>
    )
}

export default Projects