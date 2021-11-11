import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import {v4 as uuid} from "uuid"

export default function Projects() {
    
    const projectData = [
        { id: "1", name: "Linkedin - clone", img: "linkedin-project.png", gh:"https://github.com/Deependra-Negi/LinkedIn-project", url:"https://linkedin-clone-sigma.vercel.app/", desc: "A professional networking & career development plateform. A collaborative project, developed along with 2 team members in 6 days.", stack:"React, Redux, NodeJS, Express, MongoDB"},
        { id: "2", name: "Streamline (Hackathon)", img: "streamline.png", gh:"https://github.com/Deependra-Negi/HighDash_Hackathon-/", url:"https://streamline-acp24.vercel.app/", desc: "A live show hosting and streaming platform. A 48 hours hackathon, organized by Masai School. Developed the project along with 3 team members. Secured 1st position.", stack:"React, Redux, NodeJS, Express, MongoDB"},
        { id: "3", name: "Orbitz.com - clone", img: "orbitz1.png", gh:"https://github.com/Deependra-Negi/orbitz-clone", url:"https://orbitz.netlify.app/", desc: "A travel fare aggregator website, used for booking hotel rooms. A collaborative project, developed along with 3 team members in 6 days.", stack:"React, Redux, MaterialUI, Styled-Components"},
        { id: "4", name: "Angel.co - clone", img: "angel1.png", gh:"https://github.com/Deependra-Negi/project-angel", url:"https://angellist.netlify.app/", desc: "Website for startups to hire, and job-seekers looking to work at startups. A collaborative project, developed along with 3 team members in 6 days.", stack:"React, Redux, MaterialUI, Styled-Components"},
        { id: "5", name: "Internshala - clone", img: "internshala2.png", gh:"https://github.com/Deependra-Negi/internshala_project", url:"https://pulkit0111.github.io/internshala_project/", desc: "An online internship and training platform. A collaborative project, developed along with 3 team members in 10 days.", stack:"HTML, CSS, JavaScript"}
    ];

    return (
        <Cont id='projects' key={uuid()}>
            <Heading>Projects</Heading>
            <ProjectsCont>
                <Project data={projectData}/>
            </ProjectsCont>
        </Cont>
    )
}

const Cont = styled.div`
    background-color: #cce8ffb8;
    position: relative;
`
const Heading = styled.div`
    padding-top: 5rem;
    text-align:center ;
    font-size: 2rem;
    font-weight: 300;
`
const ProjectsCont = styled.div`
    margin: 5rem auto 0;
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 1264px) {
        margin: 2rem auto 0;
        width: 80vw;
    }
    @media (max-width: 768px) {
        margin: 2rem auto 0;
        width: 90vw;
        padding-bottom: 3rem;
    }
    @media (max-width: 500px) {
        margin: auto;
        width: 100vw;
        padding-bottom: 3rem;
    }
`