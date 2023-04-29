import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from "styled-components"
import {IoIosAdd} from "react-icons/io"
import {IoRemove} from "react-icons/io5"
const Container=styled.div``
const Wrapper=styled.div`
padding:20px`
const Title=styled.h1`
font-size:40px;
font-weight:300; 
text-align:center`
const Top=styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:40px`
const Bottom=styled.div`
display:flex;
align-items:center`
const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type==="filled" && "none"};
background-color:${props=>props.type==="filled" ? "black":"transparent"};
color:${props=>props.type==="filled" ? "white":"black"}`
const TopTexts=styled.div``
const TopText=styled.span`
text-decoration:underline;
margin:10px;
padding:10px`
const Info=styled.div`
flex:3;
;
`
const Summary=styled.div
`
flex:1;
padding:60px 20px;
border:1px solid gray;
display:flex;
flex-direction:column;
align-items:Center;
border-radius:10px;
justify-content:space-between;
`
const Product=styled.div`
display:flex;
padding:20px 0`
const ProductDetails=styled.div`
flex:2;
display:flex;
// align-items:center;
`
const Details=styled.div`
padding:60px;
display:flex;
flex-direction:column;
justify-content:space-around;`
const Image=styled.img`
width:200px;
height:200px`
const ProductName=styled.div``
const ProductSize=styled.div``
const ProductId=styled.div``
const ProductColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}`
const PriceDetails=styled.div`
margin-right:10px;
padding:60px;`
const ProductAmount=styled.div`

font-size:24px;
margin:5px;
`
const ProductPrice=styled.div`
font-size:30px;
font-weight:5px`
const ProductAmountDetail=styled.div`
display:Flex;
align-items:center; `
const SummaryTitle=styled.h1`
font-size:24px;
font-weight:400;`
const SummaryItem=styled.div`
display:flex;
justify:content:space-between;

margin:10px 0;
font-weight:${props=>props.type==="total" && "500"};
font-size:${props=>props.type==="total" && "24px"}
`
const SummaryItemText=styled.div`
padding-right:10px;
font-weight:300`
const SummaryItemPrice=styled.div`
font-weight:200`
const Button=styled.button`
width:100%;
pading:10px 0px;
margin:10px;
background-color:black;
color:white`
const Cart = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your wishlist(0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetails>
                    <Image src="https://tse3.mm.bing.net/th?id=OIP.lOs2qTpuEe5JgxxPAAlqRwHaHa&pid=Api&P=0"></Image>
                    <Details>
                      <ProductName><b>Product:</b> JESSIE THUNDER</ProductName>
                      <ProductId><b>ID:</b>5673881736</ProductId>
                      <ProductColor color="black"></ProductColor>
                      <ProductSize><b>Size:</b>38</ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountDetail>
                    <IoIosAdd/>
                    <ProductAmount>2</ProductAmount>
                    <IoRemove/>
                    </ProductAmountDetail>
                    <ProductPrice>$20</ProductPrice>
                  </PriceDetails>
                 
                </Product>
                <hr></hr>
                <Product>
                  <ProductDetails>
                    <Image src="https://tse3.mm.bing.net/th?id=OIP.R3ginsuMOYW0Ppl33bahCwHaHa&pid=Api&P=0"></Image>
                    <Details>
                      <ProductName><b>Product:</b> JESSIE THUNDER</ProductName>
                      <ProductId><b>ID:</b>5673881736</ProductId>
                      <ProductColor color="black"></ProductColor>
                      <ProductSize><b>Size:</b>38</ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountDetail>
                    <IoIosAdd/>
                    <ProductAmount>2</ProductAmount>
                    <IoRemove/>
                    </ProductAmountDetail>
                    <ProductPrice>$20</ProductPrice>
                  </PriceDetails>
                  
                </Product>
              

              </Info>
              <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                      <SummaryItemText>SubTotal</SummaryItemText>
                      <SummaryItemPrice>$20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Estimated shipping</SummaryItemText>
                      <SummaryItemPrice>$10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type="total">
                      <SummaryItemText>Total</SummaryItemText>
                      <SummaryItemPrice>$ 30</SummaryItemPrice>
                    </SummaryItem>
                   <Button>CHECKOUT</Button>
                  </Summary>
              
             
            </Bottom>
        </Wrapper>
        <Footer></Footer>
    </Container>
  ) 
}

export default Cart