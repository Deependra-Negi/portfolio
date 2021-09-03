import React from 'react'
import About from './About'
import Navbar from './Navbar'
import styled from 'styled-components'
import Skills from './Skills'
import Projects from './Projects'

export default function Homepage() {
    return (
        <HomepageCont>
            <Navbar/>
            <About />
            <Skills />
            <Projects/>
        </HomepageCont>
    )
}

const HomepageCont = styled.div`
`

