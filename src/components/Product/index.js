import React from "react";
import './style.css';
import "./stars.scss";

function Product(props) {
    // All product info comes from App.js State
    return (
        <div className="product">
            {/* product image */}
            {props.bogo && <div className="bogo">BOGO</div>}
            <img src={props.image} className="productImage" alt="prodimg" />

            {/* Rating */}
            <div className="ratingBox">
                <div className="ratecontainercenter" onClick={() => alert(`${props.review} reviews with an average of ${props.rate} stars`)}>
                    <div className="Stars" style={{ "--rating": props.rate }}></div>
                    <div className="reviews">{`(${props.review})`}</div>
                </div>
            </div>

            {/* Titles */}
            <div className="titles">
                <p className="prodType">{props.type}</p>
                <p className="prodTitle">{props.title}</p>
            </div>

            {/* product descriptions */}
            <div className="extras">
                <p className="prodDesc">{props.info}</p>
                <p className={props.bogo ? "priceBogo" : "price"}>{props.price}</p>
                <div className="add" onClick={() => alert(`"${props.title}" has been added to your cart`)}>
                    <p>add to cart</p>
                </div>
            </div>
        </div>
    )
}

export default Product;