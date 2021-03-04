import bootstrap from 'bootstrap';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Category from '../Category/Category.jsx';

//import './NavBar.css'

const NavBar = ({ onSearch }) => {
    return (
        <div>
            <nav class="navbar sticky-top navbar-dark bg-warning">
                <div class="container-fluid">
                    <div>
                        
                        <a class="navbar-brand" href="http://localhost:3000/"> <img src="./logoHenry.png" alt="logoHenry" class="henry-img"></img> Henry Labs Challenge</a>
                    </div>
                    <SearchBar onSearch={onSearch}/>
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar 
