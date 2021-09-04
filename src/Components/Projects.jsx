import React, {useState} from 'react'
import styled from 'styled-components'
import Skill from './Skill'



export default function Projects() {
    
    const [data, setData] = useState([
        { name: "Orbitz.com - clone", url: "html.svg" },
        { name: "angel.co - clone", url: "css.svg" },
        { name: "Internshala - clone", url: "js.svg" }
])
    return (
        <Cont>
            <Heading>Projects</Heading>
            <ProjectsCont>
                <Skill data={data}/>
            </ProjectsCont>
        </Cont>
    )
}

const Cont = styled.div`
    background-color: #cce8ffb8;
    //height: 100vh;
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
`