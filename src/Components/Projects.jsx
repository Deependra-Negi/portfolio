import React from 'react'
import styled from 'styled-components'
import Project from './Project'



export default function Projects() {
    
    const projectData = [
        { name: "Orbitz.com - clone", url: "orbitz1.png" },
        { name: "Angel.co - clone", url: "angel1.png" },
        { name: "Internshala - clone", url: "internshala2.png" }
    ];

    return (
        <Cont>
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
    margin: 5rem auto;
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 1264px) {
        margin: 2rem auto;
        width: 80vw;
    }
    @media (max-width: 768px) {
        margin: 2rem auto;
        width: 90vw;
    }
    @media (max-width: 500px) {
        margin: auto;
        width: 100vw;
    }
`