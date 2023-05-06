import React from 'react'
import styled from "styled-components"
import {mobile} from "../responsive"
import {Link} from "react-router-dom"
const Container=styled.div`
height:70vh;
flex:1;
margin:3px;
position:relative;

`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
@media only screen and (max-width: 380px) {
  height:30vh
}
`
const Info=styled.div`
position:absolute;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title=styled.h1`
color:white;
margin-bottom:20px;
`
const Button=styled.button`
border:none;
padding:6px 10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;

`
const CategoriesItem = ({item}) => {
  return (
   <Link to={`/products/${item.cat}`}>
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
   </Link>
   
  )
}

export default CategoriesItem