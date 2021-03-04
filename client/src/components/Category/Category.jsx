import React, { useState } from "react";
import "./Category.css";

const Category = () => {
    const [categories, setCategories] = useState([]);

    fetch("http://localhost:3001/api/categories")
    .then (res => res.json())
    .then (response => {
        setCategories(response);
    })
    .catch(err => console.log(err));

    return (
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                        categories.map(category => {
                            return(
                                <li><a class="dropdown-item" href="/catalogue">{category.name}</a></li>
                            )
                            
                        })
                    }
                </ul>   
        </div>
    )


}

export default Category