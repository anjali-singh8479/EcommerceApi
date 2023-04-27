import React from 'react'
import styled from "styled-components"
const Container=styled.div`
height:30px;
background-color:teal;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
color:white;
font-weight:600
`
const Announcement = () => {
  return (
   <Container>Super Deal free shiping on Orders Over 500</Container>
  )
}

export default Announcement