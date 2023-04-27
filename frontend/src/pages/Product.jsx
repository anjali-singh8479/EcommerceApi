import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Container=styled.div``
const Wrapper=styled.div`
display:flex;
`
const ImgContainer=styled.div`
flex:1;
margin:50px 20px;
display:flex;
align-items:center;
justify-content:center;
`

const InfoContainer=styled.div`
flex:1`
const Image=styled.img`
width:100%;
height:90vh;

object-fit:cover;`
const Title=styled.h1`
font-weight:200;
margin:20px
`
const Desc=styled.p`
margin:20px ;
`
const Price=styled.span`
font-size:40px;
font-weight:100;
margin:20px
`
const FilterContainer=styled.div`
display:flex;
margin-right:20px
`
const Filter=styled.div`
 margin:20px;
 display:flex;
 align-items:center;
 margin-right:20px`
 
 const FilterText=styled.div`
 font-size:20px;
 font-weight:600;
 margin-right:20px
 `
 const FilterColor=styled.div`
 width:20px;
 height:20px;
 border-radius:50%;
 background-color:${props=>props.color};
 margin-right: 4px
 `
 const Select=styled.select`
padding:10px;
margin:0 10px
 `
 const Option=styled.option``
 const AddContainer=styled.div`
 display:flex;
 align-items:center;
 width:50%`
 const AmountContainer=styled.div`
 display:flex;
 align-items:center;
 `
 const Amount=styled.span`
 display:flex;
 width:30px;
 height:30px;
 border-radius:10px;
 border:1px solid teal;
 align-items:center;
 justify-content:center;
 margin:5px`
 const Button=styled.button`
 padding:10px 20px;
 border:1px solid teal;
 background-color:white;
 cursor:pointer;
 font-weight:500;
 margin:0 20px;
 &:hover{
    background-color:teal;
    color:white;
 }`
const Remove=styled.div`
margin-left:20px;
`
const Add=styled.div``
const Product = () => {
  return (
   <Container>
    <Navbar></Navbar>
    <Announcement></Announcement>
    <Wrapper>
        <ImgContainer>
        <Image src="https://tse2.mm.bing.net/th?id=OIP.MEAQpU5z46g8UpDHIvypvQHaIX&pid=Api&P=0"></Image>
        </ImgContainer>
        <InfoContainer>
            <Title>Denim Jacket</Title>
            <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <Price>$44</Price>
            <FilterContainer>
      <Filter>
        <FilterText>Filter products:</FilterText>
       <FilterColor color="blue"></FilterColor>
       <FilterColor color="black"></FilterColor>
       <FilterColor color="gray"></FilterColor>
        <Select>
          <Option disabled selected>Size</Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
          <Option>XXL</Option>
        </Select>
      </Filter>
      </FilterContainer>
      <AddContainer>
        <AmountContainer>
            <Remove>-</Remove>
            <Amount>1</Amount>
            <Add>+</Add>
        </AmountContainer>
        <Button>Add to cart</Button>
      </AddContainer>
        </InfoContainer>
      
    </Wrapper>
    <Newsletter></Newsletter>
    <Footer></Footer>
   </Container>
  )
}

export default Product