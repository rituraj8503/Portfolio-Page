import React, { useEffect, useRef } from 'react';
import "./intro.scss";
import { init } from 'ityped'

export default function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, {
             strings: ['Computer Science Student', 'UWの学生', 'Un étudiant d\'informatique à UW', "Can speak 5 languages"],
             backDelay: 1500,
             backSpeed: 60,
             showCursor: false, 
            })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/rituraj.png" alt="..."/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Rituraj Sohoni</h1>
                    <span ref={textRef}></span>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
