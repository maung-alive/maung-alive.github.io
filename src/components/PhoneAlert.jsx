import React, { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const PhoneAlert = ({ success }) => (
    <div className={`phone-alert duration-[4s]`}>
        <span className={`icon ${success == true ? "bg-green-500" : "bg-gray-500"}`}>
            <FaQuoteLeft className="inline text-gray-100" />
        </span>
        <p className="heading">
            {success == true ? "Success" : "Error"}
        </p>
        <p className="body">
            {success == true ? "Sent message to Pyae Phyo Paing" : success}
        </p>
    </div>
)

export default PhoneAlert