import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import SideBar from '../components/SideBar'
import Projects from '../pages/Projects'
import Home from '../pages/Home'
import About from '../pages/About'
import ContactForm from '../pages/Contact'

function MainLayout() {
    const pages = [
        <Home />,
        <About />,
        <Projects />,
        <ContactForm />
    ]

    const [ showSideBar, setShowSideBar ] = useState(false);
    const [ current, setCurrent ] = useState(0);

    return (
        <section className="w-full md:grid md:grid-cols-[2fr_5fr]">
            <SideBar showSideBar={showSideBar} current={current} setCurrent={setCurrent} />
            <div className="w-full h-screen md:flex items-center justify-center relative">
                {pages[current]}
            </div>

            <button onClick={() => setShowSideBar(!showSideBar)} className="z-50 md:hidden block absolute top-10 right-5 -translate-y-1/2 -translate-x-1/2">
                <FaBars className="text-2xl" />
            </button>
        </section>
    )
}

export default MainLayout