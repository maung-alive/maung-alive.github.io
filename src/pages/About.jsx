import React from 'react'
import PhoneFrame from '../components/PhoneFrame'
import Django from '../icons/Django'
import Python from '../icons/Python'
import Javascript from '../icons/Javascript'
import Mongo from '../icons/Mongo'
import ReactIcon from '../icons/React'

function About() {
    return (
        <>
            <div className="absolute top-32 left-40 -rotate-45 animate-position">
                <Django />
            </div>
            <div className="absolute top-32 left-[75%] rotate-12 animate-position">
                <Python />
            </div>
            <div className="absolute top-[60%] left-60 -rotate-12 animate-position">
                <Javascript />
            </div>
            <div className="absolute top-[70%] left-[65%] rotate-6 animate-position">
                <Mongo />
            </div>
            <div className="absolute top-[40%] left-[85%] rotate-6 animate-position">
                <ReactIcon />
            </div>
            <PhoneFrame>
                <div className="w-full h-full pt-14 px-2 group flex flex-col items-start">
                    <p className="text-3xl font-medium text-red-600 mx-auto">
                        About
                        <div className="mt-2 group-hover:w-2/3 mx-auto rounded-full w-0 bg-red-700 duration-200 pt-1"></div>
                    </p>
                    <p className="py-4 text-lg text-gray-800 text-center">
                        As a full-stack developer, I specialize in both the MERN stack (MongoDB, Express.js, React.js, Node.js) and Django. My profession is to create robust, scalable, and efficient web applications to meet client needs.<br />
                        <span className="text-red-500 font-medium block py-3">You can see my projects <a href="https://github.com/maung-alive" target='_blank' className="text-red-700 underline">here</a></span>
                        I'm also passionate about coding modern designs, blending creativity with technical expertise to create sleek, user-friendly interfaces.
                    </p>
                </div>
            </PhoneFrame>
        </>
    )
}

export default About