import React from 'react'
import styled from 'styled-components'

const handleCode = (el) => {
    window.location.href = el.gh;
}
const handleSite = (el)=>{
    window.location.href = el.url;
}
export default function Project({data}) {
    return (
        <>
            {data.map((el) => (
            <Cont key={el.id}>
                <ImgCont>
                    <img src={el.img} alt="" />
                </ImgCont>
                <Name>
                    <div className="name" onClick={handleSite}>{el.name}</div>
                    <div className="btn">
                        <Code onClick={()=>handleCode(el)}>Code</Code>
                        <Site onClick={()=>handleSite(el)}>Site</Site>
                    </div>
                </Name>   
            </Cont>
            ))}
        </>
    )
}

const Cont = styled.div`
    padding-bottom: 1rem;
    margin: 2rem;
    border-radius: 0.3rem;
    background-color: #fff;
    width: 80%;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: transform 250ms;
    :hover {
    transform: translateY(-2px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 6px -1px, rgba(0, 0, 0, 0.3) 0px 2px 6px -1px;
    }
    @media (max-width: 1264px) {
        width: 85%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`
const ImgCont = styled.div`
    cursor: pointer;
    align-self: center;
    max-width: 100%;
    border-bottom: 1px solid gray;
    img{
        width: 100%;
    }
`
const Name = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    margin-top: 0.5rem;
        .name{
            text-align: center;
            cursor: pointer;    
            padding: 0.5rem 0.5rem;
            font-size: 1rem;
            box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
            :hover{
            box-shadow: rgba(62, 62, 105, 0.15) 0px 3px 6px 0px, rgba(37, 37, 37, 0.05) 0px 1px 3px 0px;
            }
        }
        .btn{
            display: flex;
            justify-content: space-between;
        }
`
const Code = styled.div`
    padding: 0.5rem 0.6rem 0 0.5rem;
    border-right: 1px solid gray;
    cursor: pointer;
    :hover{
        background-image: linear-gradient(to right, #fff,#fafafa, #f7f7f7);
    }
`
const Site = styled.div`
    padding: 0.5rem 0.5rem 0 0.5rem;
    cursor: pointer;
    :hover{
        background-image: linear-gradient(to right, #f7f7f7,#fafafa, #fff);
    }
`

