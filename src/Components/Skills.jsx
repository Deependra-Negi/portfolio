import React, {useState} from 'react'
import styled from 'styled-components'
import Skill from './Skill'



export default function Skills() {
    
    const [data, setData] = useState([
        { name: "HTML", url: "html.svg" },
        { name: "CSS", url: "css.svg" },
        { name: "JavaScript", url: "js.svg" },
        { name: "React", url: "react.svg" },
        { name: "Redux", url: "redux.svg" },
        { name: "Materia UI", url: "mui.svg" },
        { name: "Node", url: "node.svg" },
        { name: "Express", url: "express.svg" },
        { name: "MySQL", url: "mysql.svg" },
        { name: "MongoDB", url: "mongo.svg" },
        { name: "Git", url: "git.svg" },
])
    return (
        <Cont>
            <Heading>Skills</Heading>
            <SkillsCont>
                <Skill data={data}/>
            </SkillsCont>
        </Cont>
    )
}

const Cont = styled.div`
    background-color: #a1f5acb8;
    height: 100vh;
    position: relative;
`
const Heading = styled.div`
    padding-top: 5rem;
    text-align:center ;
    font-size: 2rem;
    font-weight: 300;
`
const SkillsCont = styled.div`
    margin: 5rem auto;
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`