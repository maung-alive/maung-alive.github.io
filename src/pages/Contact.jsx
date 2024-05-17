import React, { createRef, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import PhoneAlert from '../components/PhoneAlert';
import PhoneFrame from '../components/PhoneFrame';
import sendEmail from '../hooks/sendEmail';

function ContactForm() {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const formRef = createRef();
    const [ isSending, success, send ] = sendEmail();

    const handleSubmit = (e) => {
        e.preventDefault();
        send(formRef.current);
    }

    return (
        <PhoneFrame>
            {
                success && <PhoneAlert success={success} />
            }

            <p className="text-4xl font-medium mt-24 px-4 font-nunito">
                Get In 
            </p>
            <p className="text-5xl font-bold text-red-500 px-4 font-nunito">Touch<div className="ml-2 group-hover:w-1/2 w-0 bg-red-400 pt-1 duration-300"></div></p>

            <form method="POST" ref={formRef} className="w-full mt-6 px-4">
                <div className="relative mt-2 mb-3">
                    <input
                        type="text"
                        name="from_name"
                        onChange={e => setName(e.target.value)}
                        className={`w-full py-2 outline-none px-1 peer font-roboto border-b-2 ${ name ? "border-blue-600" : "border-blue-500/50 focus:border-blue-600" }`}
                    />
                    <span className={`pointer-events-none absolute py-2 left-0 ${ name ? "top-0 text-xs" : "top-1/2 peer-focus:top-0 peer-focus:text-xs" } -translate-y-1/2 duration-300 px-1 font-roboto text-gray-400`}>
                        Name
                    </span>
                </div>
                <div className="relative mt-2 mb-3">
                    <input
                        type="text"
                        name="from_email"
                        onChange={e => setEmail(e.target.value)}
                        className={`w-full py-2 outline-none px-1 peer font-roboto border-b-2 ${ email ? "border-blue-600" : "border-blue-500/50 focus:border-blue-600" }`}
                    />
                    <span className={`pointer-events-none absolute py-2 left-0 ${ email ? "top-0 text-xs" : "top-1/2 peer-focus:top-0 peer-focus:text-xs" } -translate-y-1/2 duration-300 px-1 font-roboto text-gray-400`}>
                        Email
                    </span>
                </div>
                <div className="relative my-2">
                    <textarea
                        type="text"
                        rows="4"
                        name="message"
                        onChange={e => setMessage(e.target.value)}
                        className={`w-full py-2 outline-none px-1 peer font-roboto border-b-2  ${ message ? "border-blue-600" : "border-blue-500/50 focus:border-blue-600" }`}
                    ></textarea>
                    <span className={`pointer-events-none absolute py-2 left-0 ${ message ? "top-0 text-xs" : "top-4 peer-focus:top-0 peer-focus:text-xs" } -translate-y-1/2 duration-300 px-1 font-roboto text-gray-400`}>
                        Message
                    </span>
                </div>

                <div className="mt-10 group/btn flex items-center justify-end bg-white active:bg-gray-100"  onClick={handleSubmit}>
                    <button className="w-20 px-2 py-1 text-right font-medium">Send</button>
                    <span className="-mr-2 p-2 text-white bg-red-500 rounded-full inline-flex items-center justify-center overflow-hidden">
                        <FaPaperPlane className="absolute group-hover/btn:top-0 group-hover/btn:left-full group-hover/btn:-translate-y-full group-hover/btn:translate-x-full duration-1000 inline text-sm" />
                        <FaPaperPlane className="-translate-x-[200%] translate-y-[200%] text-black group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 duration-1000 inline text-sm" />
                    </span> 
                </div>

                {
                    isSending &&
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-x-4">
                        <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce"></div>
                    </div>
        
                }
            </form>
        </PhoneFrame>
    )
}

export default ContactForm