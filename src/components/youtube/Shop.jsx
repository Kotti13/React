import React, { useState } from 'react'
import Productitem from './Productitem';

function Shop() {
    let [product,setProduct]=useState({name:"samsung",price:10000,description:"8gb Ram"});
  return (
    <div>
        <h1>Welcome to my shop</h1>
        <Productitem product={product}/>
      
    </div>
  )
}

export default Shop
