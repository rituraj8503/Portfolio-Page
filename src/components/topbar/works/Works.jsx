import React, { useState } from 'react';
import "./works.scss";
import japan from "../../../japan.png";
import rubiks from "../../../rubiks.png";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "https://toppng.com/uploads/preview/web-development-icon-png-clipart-website-development-web-dev-icon-11562967383vhxlfmnerz.png",
            title: "Visit Japan App",
            desc: "Want to visit Japan but cannot find a good information source? Visit Japan is a centralized platform for your visit to Japan including the top cities and attractions all in English.",
            img: japan,

        },
        {
            id: "2", 
            icon: "https://i.pinimg.com/originals/08/05/a8/0805a8f92d5f8a31a15587859b965264.png",
            title: "Indian National Champion",
            desc: "Won Indian National Championship in 2019. Currently ranked #1 in India and have 13 national records",
            img: rubiks
        },
        {
            id: "3",
            icon: "https://cdn.iconscout.com/icon/free/png-512/singing-37-1115973.png",
            title: "Festival di Verona Champions",
            desc: "Won international choir championship in Verona amongst proessional choirs of all ages. Performed atop the Arena di Verona",
            img: "https://www.wowabouts.com/z-media/2018/10/Arena%20di%20Verona%202.jpg"
        }
    ]

    function handleClick(direction) {
        if (direction === "left") {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
        } else {
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
        }
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            {data.map(d => (
 
               <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="https://secure.mini.co.id/images/arrow-right.png" alt="" className="arrow left" onClick={() => handleClick("left")}/>
            <img src="https://secure.mini.co.id/images/arrow-right.png" alt="" className="arrow right" onClick={() => handleClick("right")}/>
        </div>
    )
}
