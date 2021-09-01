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

`
const NavCont = styled.div`
    display: flex;
`
const Logo = styled.div`

`
const Menu = styled.div`
    display: flex;
`
const Projects = styled.div`

`
const Contact = styled.div`

`