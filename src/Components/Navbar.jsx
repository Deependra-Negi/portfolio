import React from 'react'
import styled from 'styled-components'

export default function Navbar() {

    return (
        <Nav>
            <NavCont>
                <Logo>DN</Logo>
                <Menu>
                    <Projects>Projects</Projects>
                    <Contact onClick={() => { window.location.href="https://www.linkedin.com/in/deependra-negi/" }}>Contact</Contact>
                </Menu>
            </NavCont>
        </Nav>
    )
}

const Nav = styled.div`
    z-index: 10;
    position: sticky;
    top: 0;
    //border-bottom: 1px solid gray;
    height: 3.5rem;
    background: rgba(1,1,1,1,1);
    backdrop-filter: saturate(150%) blur(50px);
    //background-color: #fff;
    //width: 100vw;
    //box-shadow: rgba(109, 109, 109, 0.25) 0px 6px 12px -2px, rgba(110, 110, 110, 0.3) 0px 3px 7px -3px;
`
const NavCont = styled.div`
    padding: 0 2rem;
    color:#0f1108;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 0;
    }
`
const Logo = styled.div`
    font-family: 'Philosopher', sans-serif;
    font-size:3rem;
    cursor: pointer;
    color:#0f1108;
    //color: #80AB82;
    `
const Menu = styled.div`
    display: flex;
    font-size: 1.3rem;
    line-height: 3.5rem;
    justify-content: space-between;
    div{
        font-size: 1rem;
        position: relative;
        width: 5rem;
        padding: 0 1rem;
        margin: 0 2rem;
        cursor: pointer;
        @media (max-width: 768px) {
        padding: 0;
        margin: 0%;
        }
        :hover{
            background: #e7ffed;
            transition: 0.4s;

        }
    }
    div:after{
        content: "";
        position: absolute;
        background-color: #80AB82;
        height: 3px;
        width: 0;
        left: 0;
        bottom: 0px;
        transition: 0.3s;
    }
    div:hover:after{
        width: 100%;
    }
`
const Projects = styled.div`

`
const Contact = styled.div`

`