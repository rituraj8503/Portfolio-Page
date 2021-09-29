import React from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
import { useState, useEffect } from 'react';
import {
    projects,
    softwareSkills,
    volunteerAndLeadership,
    nonAcademicPursuits,
    technicalExperience
} from "../../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Projects"
        },
        {
            id: "web",
            title: "Skills"
        },
        {
            id: "mobile",
            title: "Volunteer & Leadership"
        },
        {
            id: "design",
            title: "Extracirricular"
        },
        {
            id: "content",
            title: "Tech Experience"
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(projects)
                break;
            case "web":
                setData(softwareSkills)
                break;
            case "mobile":
                setData(volunteerAndLeadership)
                break;
            case "design":
                setData(nonAcademicPursuits)
                break;
            case "content":
                setData(technicalExperience)
                break;
            default:
                setData(projects)
        }

    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => {
                    return <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                })}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <a href={d.link}><div href={d.link} className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div></a>
                ))}
            </div>
        </div>
    )
}
