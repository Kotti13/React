import React from 'react';
import PropTypes from 'prop-types'
// import { prototype } from 'ws';

function ProductDetails({deepName,deepPrice,deepDescription}) {
  // console.log(props)
  return (
   <section>
<h3 style={{color:"red"}}>{deepName}</h3>
<h6>{deepPrice}</h6>
<p>{deepDescription}</p>
    
   </section>
  )
}

export default ProductDetails;
ProductDetails.defaultProps={
  deepName:"Samsung",
  deepPrice:20000,
  deepDescription:"12Gb Ram"


}

ProductDetails.propTypes={
  deepName:PropTypes.string.isRequired,
  deepPrice:PropTypes.number.isRequired,
  deepDescription:PropTypes.string.isRequired
}
