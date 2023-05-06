import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from "../components/Newsletter"
import styled from "styled-components"
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
const Container=styled.div``
const Title=styled.h1`
margin:20px;
@media only screen and (max-width: 380px) {
  display:flex;
  align-items:center;
  justify-content:center;
  
 }`
const FilterContainer=styled.div`
display:flex;

justify-content:space-between`
const Filter=styled.div`
 margin:20px;
 display:flex;
 
 @media only screen and (max-width: 380px) {
  margin:20px;
  flex-direction:column;
 }`
 const FilterText=styled.div`
 font-size:20px;
 font-weight:600;
 margin-right:20px;
 @media only screen and (max-width: 380px) {
  margin-right:10px;
  font-size:18px;
 }
 `
 const Select=styled.select`
padding:10px;
margin-right:10px;
@media only screen and (max-width: 380px) {
  border:1px solid gray;
  padding:5px 10px;
  margin:5px 0;
 }
 `
 const Option=styled.option`
 @media only screen and (max-width: 380px) {
  margin:20px;
  padding:0px;
  font-size:10px;
  border:none;
  outline:none;
 
 }`
const ProductList = () => {
  const location =useLocation();
  const cat=location.pathname.split("/")[2]
 const [filters,setfilters]=useState({});
const [sort,setsort]=useState("newest")
 const handlefilter=(e)=>{
  const value=e.target.value;
  setfilters({...filters,[e.target.name]:value})
 }
 console.log(filters)
 console.log(sort)
  return (
    <>
   <Container>
    <Navbar></Navbar>
    <Announcement/>
    <Title>{cat}</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter products:</FilterText>
        <Select name="color" onChange={handlefilter}>
          <Option disabled selected>Color</Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Orange</Option>
          <Option>Blue</Option>
          <Option>Peach</Option>
        </Select>
        <Select name="size" onChange={handlefilter}>
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
        <Select onChange={e=>setsort(e.target.value)}>
        
          <Option value="newest"> newest first</Option>
          <Option value="asc">Price(asc)</Option>
          <Option value="desc">Price(desc)</Option>
          
        </Select>
      </Filter>
    </FilterContainer>
    <Products cat={cat} filters={filters} sort={sort}/>
    <Newsletter/>
   </Container>
   <Footer/>
    </>
  )
}

export default ProductList