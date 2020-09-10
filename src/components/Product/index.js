import React from "react";
import './style.css';

function Product(props) {
    return (
        <div className="product">
            <img src={props.image} className="productImage" />
            <p className="prodType">{props.type}</p>
            <p className="prodTitle">{props.title}</p>
            <p className="prodDesc">{props.info}</p>
            <p className={props.bogo ? "priceBogo" : "price"}>{props.price}</p>
        </div>
    )
}

export default Product;