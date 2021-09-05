import React from 'react'
import styled from 'styled-components'
import Project from './Project'



export default function Projects() {
    
    const projectData = [
        { id: "1", name: "Orbitz.com - clone", img: "orbitz1.png", gh:"https://github.com/Deependra-Negi/orbitz-clone", url:"https://orbitz.netlify.app/" },
        { id: "2", name: "Angel.co - clone", img: "angel1.png", gh:"https://github.com/vshubhams/project-angel", url:"https://angellist.netlify.app/" },
        { id: "3", name: "Internshala - clone", img: "internshala2.png", gh:"https://github.com/Pulkit0111/internshala_project", url:"https://pulkit0111.github.io/internshala_project/" }
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