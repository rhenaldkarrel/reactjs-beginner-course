import React from 'react'

function Product(props){
    return (
        <div>
            <h2>Name of the product : {props.product.name}</h2>
            <p>Category: {props.product.category}</p>
            <p>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}</p>
            <hr />
        </div>
    )
}

export default Product