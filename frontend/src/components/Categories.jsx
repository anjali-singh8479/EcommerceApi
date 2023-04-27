import React from 'react'
import styled from "styled-components"
import { categories } from '../data'
import CategoriesItem from './CategoriesItem'
const Container=styled.div`
display:flex;
padding:20px;
justify-content:space-between
`
const Categories = () => {
  return (
   <>
   <Container>
    {categories.map((item)=>(
        <CategoriesItem item={item}></CategoriesItem>
    ))}
   </Container>
   {/* <div>
   {categories.map((item)=>(
        <CategoriesItem item={item}></CategoriesItem>
    ))}
   </div> */}
   </>
  )
}

export default Categories