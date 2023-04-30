import React from 'react'
import styled from "styled-components"
import { categories } from '../data'
import CategoriesItem from './CategoriesItem'
import {mobile} from "../responsive"
const Container=styled.div`
display:flex;
padding:20px;
justify-content:space-between;
@media only screen and (max-width: 380px) {
padding:0px;
flex-direction:column;  
}
}
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