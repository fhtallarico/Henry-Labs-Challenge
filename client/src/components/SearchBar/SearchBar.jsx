import React , { useState } from 'react'
import './SearchBar.css'




export default function SearchBar({onSearch}) {
    const [kw, setKw] = useState ("");

    return (
      <div class="">
        <div class="container-fluid">
          <form class="d-flex" onSubmit={(e) => {
            e.preventDefault();
            onSearch(kw);
            setKw('');
          }}>
            <input
              class="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
              value={kw}
              onChange= {e => setKw(e.target.value)}
            />
            <button class="btn btn-outline-primary btn-search" 
              type="submit">
                <i class="material-icons">search</i>
                Buscar
            </button>
          </form>
        </div>
      </div>
      
    );
  }