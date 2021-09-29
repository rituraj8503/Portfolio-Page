import React, { useState } from 'react';
import "./contact.scss";

export default function Contact() {

    const [message, setMessage] = useState(false);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://formsubmit.co/rituraj8@uw.edu", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                message: content
            })
        });
        console.log(response);
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
                    <input type="email" name="email" placeholder="Email" onChange={(e) => setName(e.target.value)}/>
                    <textarea name="message" placeholder="Message" onChange={(e) => setContent(e.target.value)}></textarea>
                    {message && <span>Thanks, I will reply ASAP :)</span>}
                </form> 
                <a href={`mailto:rituraj8@uw.edu?subject=Email Subject&body=${content}`}><button name="submit" type="submit">Send</button></a>
            </div>
        </div>
    )
}
