import React from 'react'
// import ContactCard from './ContactCard'
import Product from './Product'
import productsData from './productsData'

function App(){
  const productComponents = productsData.map(product => <Product key={product.id} product={product} />)
  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App