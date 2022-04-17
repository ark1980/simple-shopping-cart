import React from 'react'
import Product from './Product'
import styled from 'styled-components'

const StyledProducts = styled.div`
  width: 75%;
  height: 100%;
  background-color: #f5f3f4;
`


const ProductList = () => {
  return (
    <StyledProducts>
      <Product />
    </StyledProducts>
  )
}

export default ProductList