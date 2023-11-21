import React from 'react'
import { mFetch } from '../../util/mFetch'
import { useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        mFetch()
        .then (resultado => {setProducts(resultado)})
        .catch (error => console.log(error))
        .finally(()=> setIsLoading(false))
    })

    return (
        <div id='products-section'>
            <h2 className='products-section-title'>Productos Destacados</h2>
            <div className='cards-layout'>
                { isLoading ?
                  <img src="loader.gif" alt="" />  
                  :
                  products.map( (product) => <ItemCard key={product.id} productInfo={product}/>)
            }
            </div>
        </div>
    )
}

export default ItemListContainer