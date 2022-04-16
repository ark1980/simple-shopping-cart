import React, { useContext } from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import { appContext } from '../context/app-context'

const Home = () => {
  const { data } = useContext(appContext);
  
  console.log('FROM HOME PAGE',data);
  
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  )
}

export default Home