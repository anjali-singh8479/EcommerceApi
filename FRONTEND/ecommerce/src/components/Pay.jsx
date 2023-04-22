import React, { useEffect, useState } from 'react'
import "../../src/app.css"
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"


const stripekey=("pk_test_51MzNwYSBlkWeU7h8iKH12pgmzoYG5n2r4pKkGTCptweBoi251za5y7fp9L2fVDQuudYrgn9fk4lwaqJABWnQYaNw00WoRTMmoR")
const Pay = () => {
const[stripepayment,setstripepayment]=useState(null)
const ontoken=(token)=>{
    setstripepayment(token)
console.log(token)
  }
  useEffect(()=>{
    const makereq=async()=>{
      try{
        const res=await axios.post("http://localhost:5000/checkout/payment",{
            tokenid:stripepayment.id,amount:200
        })
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
     stripepayment && makereq()
  },[stripepayment])
    return (
   <StripeCheckout name="anjali shop" 
   billingAddress
   shippingAddress
   description='your total is 500'
   amount={2000}
   token={ontoken}
   stripeKey={stripekey}
   >
      <button className='pay-button'>
            pay
        </button>
   </StripeCheckout>
      
   
  )
}

export default Pay