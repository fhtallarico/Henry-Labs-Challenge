import React, { useState } from "react";
import './Filter.css'

const Filter = (props) => {



    if (props.totalPosts > 0) {
        return (
            <div>
                <form class="d-flex -">
                    <select class="filtro-select" 
                            value={props.condition}
                            onChange={props.filterProducts}>
                        <option selected>Condicion</option>
                        <option value="new">Nuevo</option>
                        <option value="used">Usado</option>
                    </select>
                </form>
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

export default Filter