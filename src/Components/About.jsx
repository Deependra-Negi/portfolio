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
                        <ContactBtn> <a href="https://www.linkedin.com/in/deependra-negi/">Contact me</a></ContactBtn>
                    </Left>
                    <Right>
                        {/* <img src="dpkbg.png" alt="" /> */}
                        {/* <img src="placeholder.svg" alt="" /> */}
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
    width: 100%;
`
const ContBg = styled.div`
    background-image: url('hero3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:100% 30%;
    margin-bottom: 8rem;
    width: 100%;
    @media (max-width: 768px) {
        margin-bottom: 3rem;
    }
`
const Cont = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 768px) {
        width: 100%;
        margin: auto;
    }
`

const Left = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 60%;
    padding: 6rem 4rem;
    @media (max-width: 768px) {
        padding: 0.3rem 1rem;
        width: 100%;
    }
    
    div{
        margin: 1rem;
        @media (max-width: 768px) {
        margin: 0.3rem;
    }
    }
`
const Header = styled.div`
    width: 100%;
    font-size: 5.2rem;
    font-weight: 200;
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`
const Para = styled.div`
    font-size: 1.2rem;
    padding-left:0.5rem;
    //font-weight: 200;
`
const ContactBtn = styled.button`
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
  0 100px 80px rgba(0, 0, 0, 0.12);
  a{
      text-decoration: none;
      font-size: 1rem;
      color:#0f1108;
      :visited{
          color: inherit;
      }
  }
@media (max-width: 768px) {
    margin-top:1.5rem;
    margin-left: 0.3rem;
}
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
padding-top: 5rem;
@media (max-width: 768px) {
    width: 100%;
    padding: 0 3rem;
}

    img{
        width: 100%;
        padding: 2rem;
    }
`
const AboutCont = styled.div`
    width: 100%;
    margin-top: 10rem;
    padding:0 4rem;
    @media (max-width: 768px) {
        padding: 0 2rem;
        margin-top: 6rem;
    }
`
const Heading = styled.div`
    width: 100%;
    text-align:center ;
    font-size: 2rem;
    font-weight: 300;
    //color: #a0f1a4c7;
`
const AboutPara = styled.div`
    width: 100%;
    font-size: 1rem;
    line-height: 1.8rem;
    margin-top: 2rem;
    padding:0 15rem;
    //color: #80AB82;
    @media (max-width: 1020px) {
        padding:0 5rem;
    }
    @media (max-width: 768px) {
        padding: 0;
        line-height: 1.2rem;
    }
`
