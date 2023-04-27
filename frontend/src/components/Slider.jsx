import React, { useState } from "react";

import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { sliderItems } from "../data";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: coral;

  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  tramsition:all 1.5s ease;
  transform: translateX(${props=>props.sliderindex*-100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color:#${(props=>props.background)}
`;

const Imgcontainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const Infocontainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
margin:50px px
font-size:20px;
font-weight:500;
letter-spacing:3px;
`;

const Button = styled.button`
  padding: 8px 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
    const [sliderindex,setsliderindex]=useState(0);
    const handleclick=(direction)=>{
        if(direction==="left"){
            setsliderindex(sliderindex >0 ?sliderindex-1 :2)
        }
        else{
            setsliderindex(sliderindex<2 ?sliderindex+1 :0)
        }
    }
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={()=>handleclick("left")}>
          <IoMdArrowDropleft />
        </Arrow>
        <Wrapper sliderindex={sliderindex}>
            {sliderItems.map((items)=>(
                 <Slide background={items.bg}>
                 <Imgcontainer>
                  <Image src={items.img}></Image>
                  </Imgcontainer>
                  <Infocontainer>
                      <Title>{items.title}</Title>
                      <Desc>{items.desc}</Desc>
                      <Button>Shop Now</Button>
                  </Infocontainer>
                 </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleclick("right")}>
          <IoMdArrowDropright />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
