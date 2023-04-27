import React from 'react'
import styled from "styled-components"
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
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
    // <div>
    //     <img src={item.img}></img>
    //     <div>
    //         <h1>{item.title}</h1>
    //         <button>h</button>
    //     </div>
    // </div>
  )
}

export default CategoriesItem