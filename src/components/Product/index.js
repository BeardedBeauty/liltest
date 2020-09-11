import React from "react";
import './style.css';

function Product(props) {
    return (
        <div className="product">
            <div className="extras">
                <p className="prodDesc">{props.info}</p>
                <p className={props.bogo ? "priceBogo" : "price"}>{props.price}</p>
                <div className="add" onClick={() => alert(`"${props.title}" has been added to your cart`)}>
                    <p>add to cart</p>
                </div>
            </div>
            {props.bogo && <div className="bogo">BOGO</div>}
            <img src={props.image} className="productImage" alt="prodimg" />
            <p className="prodType">{props.type}</p>
            <p className="prodTitle">{props.title}</p>
        </div>
    )
}

export default Product;