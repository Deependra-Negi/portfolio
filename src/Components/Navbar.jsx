import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <Nav>
            <NavCont>
                <Logo>DN</Logo>
                <Menu>
                    <Projects>Projects</Projects>
                    <Contact>Contact</Contact>
                </Menu>
            </NavCont>
        </Nav>
    )
}

const Nav = styled.div`
    border-bottom: 1px solid gray;
    height: 3.5rem;
    //width: 100vw;
    //box-shadow: rgba(109, 109, 109, 0.25) 0px 6px 12px -2px, rgba(110, 110, 110, 0.3) 0px 3px 7px -3px;
`
const NavCont = styled.div`
    padding: 0 2rem;
    color:#0f1108;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
    font-family: 'Philosopher', sans-serif;
    font-size:3rem;
    cursor: pointer;
    `
const Menu = styled.div`
    display: flex;
    font-size: 1.3rem;
    line-height: 3.5rem;
    justify-content: space-between;
    div{
        width: 5rem;
        padding: 0 1rem;
        margin: 0 2rem;
        cursor: pointer;
        :hover{
            background: #e7ffed;
        }
    }
`
const Projects = styled.div`

`
const Contact = styled.div`

`