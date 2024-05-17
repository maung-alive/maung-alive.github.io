import React from 'react'

function PhoneFrame({ children }) {
    return (
        <div className="group relative w-full md:w-[300px] md:aspect-[10/20] md:border-[6px] bg-white border-black md:rounded-3xl overflow-hidden">
            <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 border-b border-x border-gray-200 rounded-b-xl bg-black z-40 justify-center items-center gap-x-2">
                <div className="w-8 h-3 bg-slate-900 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-950 rounded-full"></div>
            </div>
            {children}
        </div>
    )
}

export default PhoneFrame