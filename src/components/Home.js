import React from 'react'
import ProductList from './ProductList'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const Home = () => {

  const StyledHome = styled.div`
    width: 100%;
    height: calc(100vh - 130px);
    display: flex;
    
  `
  
  return (
    <StyledHome>
      <Sidebar />
      <ProductList />
    </StyledHome>
  )
}

export default Home