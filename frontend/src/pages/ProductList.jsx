import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from "../components/Newsletter"
import styled from "styled-components"
import Footer from '../components/Footer'
const Container=styled.div``
const Title=styled.h1`
margin:20px`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between`
const Filter=styled.div`
 margin:20px;
 display:flex`
 const FilterText=styled.div`
 font-size:20px;
 font-weight:600;
 margin-right:20px
 `
 const Select=styled.select`
padding:10px;
margin-right:10px
 `
 const Option=styled.option``
const ProductList = () => {
  return (
    <>
   <Container>
    <Navbar></Navbar>
    <Announcement/>
    <Title>Dresses</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter products:</FilterText>
        <Select>
          <Option disabled selected>Color</Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Orange</Option>
          <Option>Blue</Option>
          <Option>Peach</Option>
        </Select>
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
      <Filter>
        <FilterText>Sort products:</FilterText>
        <Select>
        
          <Option> newest first</Option>
          <Option>Price(asc)</Option>
          <Option>Price(desc)</Option>
          
        </Select>
      </Filter>
    </FilterContainer>
    <Products/>
    <Newsletter/>
   </Container>
   <Footer/>
    </>
  )
}

export default ProductList