import React from "react";
import './Sort.css'

const Sort = (props) => {

    if(props.totalPosts > 0) {
        return (
        
            <div class="container">
                <select 
                    class="slct"
                    value={props.sort}
                    onChange={props.sortProducts}>
                    <option selected>Ordenar por precio</option>
                    <option value="desc">Descendente</option>
                    <option value="asce">Ascendente</option>
                </select>
            </div>
        )
    }
    else {
        return (
            <div>

            </div>
        )
    }
}

export default Sort;
