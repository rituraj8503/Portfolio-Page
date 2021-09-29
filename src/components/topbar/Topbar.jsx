import React from 'react'
import "./topbar.scss"
import {Person, Mail, Notes} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">RS</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+81-70-2910-3712</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>rituraj8@uw.edu</span>
                    </div>
                    <a href="https://drive.google.com/file/d/1Zc1owzoI5ICWD7SzNFQZd5gfGOv8BkXF/view?usp=sharing"><div className="itemContainer">
                        <Notes className="icon"/>
                        <span>Resume</span>
                    </div></a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
