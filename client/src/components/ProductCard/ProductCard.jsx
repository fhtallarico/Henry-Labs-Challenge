import React from 'react';
import './ProductCard.css';


const ProductCard = (props) => {
    return (
        <div class="card text-center shadow p-3 mb-5 bg-body rounded card-container" style={{width: "18rem"}}>
            <div class="align-middle img-container">
                <img src={props.thumbnail} class="card-img-top prod-thumbnail align-middle" alt="..."/>    
            </div>
            <div class="card-body d-inline-block">
                <div>
                    <h5 class="card-title text-truncate">{props.title}</h5>
                </div>
                <div>
                    <p class="card-text">{props.currency_id} {props.price}</p>
                    <p class="card-text">Cantidad: {props.available_quantity}</p>
                </div>
                <div class="btn-div">
                    <a href={props.permalink} class="btn btn-warning align-bottom ml-btn" target="_blank">Ver en ML</a>
                </div>
                <div>
                    <span class="badge rounded-pill bg-primary">{props.condition}</span>
                </div>

            </div>
    </div>
    )
    
}



export default ProductCard