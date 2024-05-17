import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

function sendEmail() {
	const [ isSending, setIsSending ] = useState(false);
	const [ success, setSuccess ] = useState(false);
    const [ data, send ] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    useEffect(() => {
		if(!data.from_name || !data.from_email || !data.message ) {
			setSuccess("Fields are required!")
			setTimeout(() => { setSuccess(false) }, 5000)
			return;
		}
		
		setIsSending(true);
        emailjs.sendForm('service_5a42vu6', 'template_znntt8x', data, {
            publicKey: 'AXKX4oroEoTa_9utO',
        })
		.then(() => {
				setIsSending(false);
				setSuccess(true);
			},
			(error) => {
				setIsSending(false);
				setSuccess(error)
			},
        )
		.finally(() => {
			setTimeout(() => { setSuccess(false) }, 5000)
		})    
    }, [data]);

	return [ isSending, success, send ];
}

export default sendEmail