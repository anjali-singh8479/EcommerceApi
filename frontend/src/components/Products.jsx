import React from 'react'
import styled from "styled-components"
import { popularProducts } from '../data'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Product from './Product'
const Container=styled.div`
padding: 20px 20px;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`

const Products = ({ cat, filter, sort }) => {
  const [product, setproduct] = useState([]);
  const [filterproducts, setfilterproducts] = useState([]);
  useEffect(() => {
    console.log("work");
    const getproducts = async () => {
      try {
        console.log("work api");
        const res=await axios.get("http://localhost:3000/api/products/allproducts")
        // const res = await axios.get(
        //   cat
        //     ? `http://localhost:5000/api/products/allproducts?cat=${cat}`
        //     : `http://localhost:5000/api/products/allproducts`
        // );
        setproduct(res.data);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    getproducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setfilterproducts(
        product.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, cat, filter]);
  useEffect(()=>{
if(sort==="newest"){
 setfilterproducts((prev)=>
[...prev].sort((a,b)=>a.createdAt-b.createdAt))
  }
  else if (sort==="asc"){
    setfilterproducts((prev)=>
[...prev].sort((a,b)=>a.price-b.price))
  }
  else if(sort==="desc"){
    setfilterproducts((prev)=>
[...prev].sort((a,b)=>b.price-a.price))
  }
},[sort])
  return (
    <Container>
        { cat ? filterproducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        )) :popularProducts.slice(0,8).map((item)=>(
          <Product item={item} key={item.id}></Product>
      ))}
    </Container>
  )
}

export default Products