import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <SecCont>
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
        </SecCont>
    )
}

const SecCont = styled.div`
    color:#0f1108;

`
const Cont = styled.div`
    background-image: url('hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: bottom;
    display: flex;
    justify-content: space-between;
    height: 145vh;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    div{
        margin: 1rem;
    }
`
const Header = styled.div`
    font-size: 7rem;
    font-weight: 200;
`
const Para = styled.div`
    font-size: 1.5rem;
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
padding-top: 10rem;
    img{
        width: 100%;
    }
`
