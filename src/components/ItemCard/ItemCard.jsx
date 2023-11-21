import React from 'react'

const ItemCard = (props) => {
    const { id, brand, model, liquidCapacity, batery, puffs, charger, productImage } = props.productInfo;

    return (
        <div className='Item-card'>
            <img src={productImage} alt={`${brand} ${model}`} />
            <h3 className='product-title'>{brand} {model}</h3>
            <p>Capacidad Liquida: {liquidCapacity}ml</p>
            <p>Bateria: {batery}mAh</p>
            <p>Puffs: {puffs}</p>
            <p>Cargador: {charger} (no incluido)</p>
        </div>
    )
}

export default ItemCard