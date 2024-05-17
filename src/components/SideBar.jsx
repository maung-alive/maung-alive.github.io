import React from 'react'

function SideBar({ showSideBar, current, setCurrent }) {
    return (
        <div className={`w-full h-screen backdrop-blur-xl md:backdrop-blur-none fixed z-40 md:sticky ${ showSideBar ? "translate-x-0" : "-translate-x-full" } duration-500 md:translate-x-0 top-0 left-0 flex flex-col justify-center items-center px-4 gap-y-10`}>
            <p onClick={() => setCurrent(0)} className={`group flex justify-center font-[monospace] cursor-pointer text-3xl md:text-2xl lg:text-3xl ${ current == 0 && 'font-bold text-red-600' } group`}>
                <span className="block group-hover:-translate-x-4 duration-100">&lt;</span>Home <span className="block group-hover:translate-x-4 duration-100">/&gt;</span>
            </p>
            <p onClick={() => setCurrent(1)} className={`group flex justify-center font-[monospace] cursor-pointer text-3xl md:text-2xl lg:text-3xl ${ current == 1 && 'font-bold text-red-600' } group`}>
                <span className="block group-hover:-translate-x-4 duration-100">&lt;</span>About <span className="block group-hover:translate-x-4 duration-100">/&gt;</span>
            </p>
            <p onClick={() => setCurrent(2)} className={`group flex justify-center font-[monospace] cursor-pointer text-3xl md:text-2xl lg:text-3xl ${ current == 2 && 'font-bold text-red-600' } group`}>
                <span className="block group-hover:-translate-x-4 duration-100">&lt;</span>Projects <span className="block group-hover:translate-x-4 duration-100">/&gt;</span>
            </p>
            <p onClick={() => setCurrent(3)} className={`group flex justify-center font-[monospace] cursor-pointer text-3xl md:text-2xl lg:text-3xl ${ current == 3 && 'font-bold text-red-600' } group`}>
                <span className="block group-hover:-translate-x-4 duration-100">&lt;</span>Contact <span className="block group-hover:translate-x-4 duration-100">/&gt;</span>
            </p>
        </div>
    )
}

export default SideBar