import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import {AiFillHeart } from "react-icons/ai"
import styled from "styled-components"
const Info=styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:gray;
z-index:3;
display:flex;
align-items:center;
justify-content:center;
opacity:0;
tansition: all 0.5s ease;
`
const Container=styled.div`
flex:1;
cursor:pointer;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
// background-color:red;
position:relative;
&:hover ${Info}{
    opacity:0.5;
}
`
const Circle=styled.div`
width:200px;
height:200px;
border-radius:50%;

z-index:2;
position:absolute;
`
const Image=styled.img`
height:75%;
z-index:2;
`

const Icon=styled.div`
width:40px;
height:40px;
background-color:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
&:hover{
background-color:#e9f5f5;
transform:scale(1,1);
}
`
const Product = ({item}) => {

  return (
   <>
   <Container>
    <Circle></Circle>
    <Image src={item.img}></Image>
    <Info>
        <Icon>
            <BsCart2></BsCart2>
        </Icon>
        <Icon>
            <BiSearch></BiSearch>
        </Icon>
        <Icon>
        <AiFillHeart></AiFillHeart>
        </Icon>
    </Info>
   </Container>
   </>
  )
}

export default Product