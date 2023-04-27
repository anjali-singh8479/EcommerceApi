import React from 'react'
import styled from "styled-components"

const Container=styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
`
const Title=styled.h1`
font-size:50px;
margin-bottom:20px;

`
const Description=styled.div`
font-size:24px;
font-weight:300;
margin-bottom:12px;

`
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid gray;
border-radius:8px;
`
const Input=styled.input`
border:none;
padding:10px;
outline:none;
border-radius:10px 0 0 8px;
&:active{
    border:none;
}
`
const Button=styled.button`
border:none;
padding:0 40px;
background-color:teal;
color:white;
font-size:20px;
font-weight:400;
border-radius:0 8px 8px 0;
`

const Newsletter = () => {
  return (
   <Container>
    <Title>Newletter</Title>
    <Description>Get timely updates from your favourite products</Description>
    <InputContainer>
    <Input placeholder="Your Email"></Input>
    <Button>
        send
    </Button>
    </InputContainer>
   </Container>
  )
}

export default Newsletter