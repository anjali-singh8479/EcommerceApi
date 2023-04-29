import React from 'react'
import styled from "styled-components"
const Container=styled.div`
width:100vw;
height:100vh;
display:flex;

align-items:center;
justify-content: center;
`
const Wrapper=styled.div`
padding:40px;
width:40%



`
const Title=styled.h1`
font-size:24px;
font-weight:300;
`

const Form=styled.form`
display:flex;
flex-direction:column;
flex-wrap:wrap`
const Input=styled.input`
flex:1;
margin:20px 10px 0px 0px;
min-width:40%;
padding:10px;
outline:none;`

const Button=styled.button`
width:40%;
border:none;
padding:5px ;
background-color:teal;
color:white;
margin:20px 0`
const Link=styled.a`
cursor:pointer;
color:teal;
margin:5px;
font-size:12px;

`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"></Input>
                <Input placeholder="password"></Input>
                <Button>Login</Button>
            </Form>
           
            <Link>Do you not remember your password</Link>
            <Link>Create an new account</Link>

        </Wrapper>
    </Container>
  )
}

export default Login