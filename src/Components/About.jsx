import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <SecCont>
            <ContBg>
                <Cont>
                    <Left>
                        <Para>Hi I'm</Para>
                        <Header>Deependra Negi</Header>
                        <Para>Full-Stack Web Developer, living in Uttarakhand(India)</Para>
                        <ContactBtn>Contact me</ContactBtn>
                    </Left>
                    <Right>
                        {/* <img src="dpkbg.png" alt="" /> */}
                        <img src="placeholder.svg" alt="" />
                    </Right>
                </Cont>
                <AboutCont>
                    <Heading>About Me</Heading>
                    <AboutPara>
                        From designing components in Solidworks to building components in React, the journey has been great. <br />
                        I was fascinated with the fact that how brand new products are being created with all the opensource technology available, and how it is transforming billions of lives within a very short time period.
                         I wanted to be a part of this, hence I joined a coding bootcamp for the Full Stack Web Development course, and here I'm today.
                    </AboutPara>
                </AboutCont>
            </ContBg>
        </SecCont>
    )
}

const SecCont = styled.div`
    color:#0f1108;

`
const ContBg = styled.div`
    background-image: url('hero3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y:center;
    height: 170vh;

`
const Cont = styled.div`
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6rem 4rem;
    div{
        margin: 1rem;
    }
`
const Header = styled.div`
    font-size: 7rem;
    font-weight: 200;
`
const Para = styled.div`
    font-size: 1.2rem;
    padding-left:0.5rem;
    //font-weight: 200;
`
const ContactBtn = styled.button`
font-size: 1rem;
width: 10rem;
height:3rem;
background: none;
border-style: none;
cursor: pointer;
margin-top: 5rem;
margin-left: 1rem;
box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;
//apply mask on hover
:hover{
    background: #d6ffe0;
    transition: 0.3s ease-in-out;
}
:active{
    position: relative;
    top: 1px;
    left: 1px;
    width: 9.8rem;
    height: 2.8rem;
}
`
const Right = styled.div`
width: 25rem;
padding-right: 10rem;
padding-top: 5rem;
    img{
        width: 100%;
    }
`
const AboutCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12rem;
    padding:0 4rem;
`
const Heading = styled.div`
    text-align:center ;
    font-size: 2rem;
    font-weight: 300;
    //color: #a0f1a4c7;
`
const AboutPara = styled.div`
    font-size: 1rem;
    line-height: 1.8rem;
    margin-top: 2rem;
    margin-left: 22rem;
    padding:0 5rem;
    //color: #80AB82;
`
