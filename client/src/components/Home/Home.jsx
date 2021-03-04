import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer.jsx'

import React from 'react';

const Home = () => {
    return (
        <div className='home-img'>
            <img src="./img/518054.jpg" alt="ROMPIO" className="bk-img"/>
            <div >
                <Link to='/catalogue'>
                    <button class="btn btn-primary btn-lg btn-acomprar" type="button">A comprar!</button> 
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;