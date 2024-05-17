import React from 'react'
import PhoneFrame from '../components/PhoneFrame'
import Python from '../icons/Python'
import Javascript from '../icons/Javascript'
import Django from '../icons/Django'
import { FaFacebook, FaGithub } from 'react-icons/fa'

function Home() {
    return (
        <div className='w-full h-screen md:flex items-center justify-center relative overflow-hidden'>
            <p className="text-9xl absolute -top-56 right-0 opacity-30">Web<br />Developer</p>
            <p className="text-9xl absolute -bottom-10 left-0 opacity-30">Web<br />Developer</p>
            <PhoneFrame>
                <div className="w-full h-full pt-14 px-2 group flex flex-col items-start">
                    <p className="text-xl font-medium text-gray-600">I am</p>
                    <p className="text-3xl font-medium text-red-600">
                        Pyae Phyo Paing
                        <div className="mt-2 group-hover:w-2/3 rounded-e-full w-0 bg-red-700 duration-200 pt-1"></div>
                    </p>
                    <p className="py-4 text-lg text-gray-800">
                        I am a passionate developer specializing in Python (Django), JavaScript (MERN Stack), and other web technologies.
                        Always continuously exploring new advancements and refining skills.
                    </p>
                    <div className="mt-20 border-t-2  w-full pt-4">
                        <p className="text-lg hover:text-blue-400 text-blue-600 flex items-center gap-x-2"><FaFacebook /><a href="https://www.facebook.com/maung.alive">Facebook</a></p>
                        <p className="text-lg hover:text-slate-300 text-slate-600 flex items-center gap-x-2 pt-4"><FaGithub /><a href="https://www.facebook.com/maung.alive">Github</a></p>
                    </div>
                </div>
            </PhoneFrame>
        </div>
    )
}

export default Home