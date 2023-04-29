import React from 'react'
import styled from "styled-components"
const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
// flex-direction:column;
align-items:center;
justify-content: center;
`
const Wrapper=styled.div`
padding:60px



`
const Title=styled.h1`
font-size:24px;
font-weight:300;
`

const Form=styled.form`
display:flex;
flex-wrap:wrap`
const Input=styled.input`
flex:1;
margin:20px 10px 0px 0px;
min-width:40%;
padding:10px;
outline:none;`
const Agreement=styled.div`
font-size:12px;
margin:20px 0`
const Button=styled.button`
width:40%;
border:none;
padding:10px ;
background-color:teal;
color:white;`
const Register = () => {
  return (
   <Container>
    <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="First name"></Input>
            <Input placeholder="last name"></Input>
            <Input placeholder="username"></Input>
            <Input placeholder="email"></Input>
            <Input placeholder="password"></Input>
            <Input placeholder="confirm passsword"></Input>
            <Agreement>By registering I agree to the terms and conditions above mentioned. I details entered by me are true to my information</Agreement>
            
        </Form>
        <Button>Register</Button>
    </Wrapper>
   </Container>
  )
}

export default Register