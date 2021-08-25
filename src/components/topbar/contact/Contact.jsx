import React, { useState } from 'react';
import "./contact.scss";

export default function Contact() {

    const [message, setMessage] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://www.pngkey.com/png/full/410-4101239_hand-shake-svg-png-icon-free-download-people.png" alt=""/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP :)</span>}
                </form> 
            </div>
        </div>
    )
}
