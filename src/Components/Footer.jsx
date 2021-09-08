import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function footer() {
    return (
        <Cont>
            <FooterCont>
                <IconsCont>
                    <a href="mailto:916deepaknegi@gmail.com"><EmailIcon className="icon" /></a>
                    <a href="https://twitter.com/Idpknegi"><TwitterIcon className="icon" /></a>
                    <a href="https://www.linkedin.com/in/deependra-negi/"><LinkedInIcon className="icon" /></a>
                    <a href="https://github.com/Deependra-Negi"><GitHubIcon className="icon" /></a>
                </IconsCont>
                <HrLine/>
                <FooterLine>
                    <p>No © copyright issues | Designed & developed with <FavoriteIcon className="love"/> by Deependra. </p>                    
                </FooterLine>
            </FooterCont>
        </Cont>
    )
}

const Cont = styled.div`
    background-color: #080808;
    width: 100%;
`
const FooterCont = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 5rem;
    @media (max-width: 768px) {
        width: 85%;
        padding: 1rem 2rem;
    }
    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem 1.2rem;
    };
`
const IconsCont = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    @media (max-width: 480px) {
        padding: 1rem 0;
    };
    .icon{
        color: #fcfcfc;
        font-size: 2rem;
        cursor: pointer;
    }
`
const HrLine = styled.div`
    border-bottom: 1px solid #fcfcfc ;
    margin-top: 1rem;
`
const FooterLine = styled.div`
    text-align: center;
    color: #fcfcfc;
    margin: 1.5rem 0 0.4rem 0;
    .love{
        font-size: 1rem;
        color: red;
    }
`
