import React from 'react'

function Project({ img, title, description, demo, github }) {
    return (
        <div className="w-[250px] lg:w-[300px] xl:w-[400px] xl:h-[300px] aspect-[4/3] even:mt-10 animate-fadein">
            <img src={img} alt={title} className="drop-shadow-2xl w-full aspect-video object-cover" />
            <div className="pt-4 px-1">
                <p className="text-xl xl:text-2xl pb-2 font-medium">{title}</p>
                <p className="text-lg xl:text-xl text-gray-800">{description}</p>

                <div className="flex gap-x-4 pt-4">
                    <a href={github} target='_blank' className="text-blue-600 hover:text-blue-400">Github</a>
                    <a href={demo} target='_blank' className="text-blue-600 hover:text-blue-400">Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default Project