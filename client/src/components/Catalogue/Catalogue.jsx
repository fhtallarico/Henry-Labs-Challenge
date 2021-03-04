import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import Pagination from '../Pagination/Pagination.jsx';
import Filter from '../Filter/Filter.jsx';
import Sort from '../Sort/Sort';
import Footer from '../Footer/Footer.jsx'


import './Catalogue.css'

const Catalogue = () => {
    const [products, setProducts] = useState([]);
    const [productsResult, setProductsResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(30);
    const [condition, setCondition] = useState("");
    const [sort, setSort] = useState("");


    const onSearch = (kw) => {
            fetch(`http://localhost:3001/api/search?q=${kw}`)
            .then (res => res.json())
            .then (result => {
                setProductsResult(result);
                setProducts(result);
            })
            .catch(err => console.log(err))
    }

    const indexOfLastProd = currentPage * postsPerPage;
    const indexOfFirstProd = indexOfLastProd - postsPerPage;
    const currentProds = products.slice(indexOfFirstProd, indexOfLastProd);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);    
    }

    const nextPage = () => {
        if (currentPage < (Math.ceil(products.length / postsPerPage))) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const filterProducts = (e) => {
        let productCondition = e.target.value;
    
        if (productCondition === "new" || productCondition === "used") {
          setCondition(productCondition);
          setProducts(
            productsResult.filter(
              (product) => product.condition.indexOf(productCondition) >= 0
            )
          );
        } else {
          setCondition(productCondition);
          setProducts(productsResult);
        }
      };
    
      const sortProducts = (e) => {
        let sortOrder = e.target.value;

        if (sortOrder === "desc") {
            setSort(sortOrder);
            setProducts(
                products.slice().sort((a,b) => (a.price < b.price) ? 1 : -1)
            )
        }
        else if(sortOrder === "asce") {
            setSort(sortOrder);
            setProducts(
                products.slice().sort((a,b) => (a.price > b.price) ? 1 : -1)
            )
        }
        else {
            setProducts(productsResult);
        }
      }

    return (
        <div class="cat-container">
            <NavBar onSearch={onSearch}/>
            <nav class="filters-nav">
                <Filter 
                    filterProducts={filterProducts}
                    condition={condition}
                    totalPosts={products.length}/>
                <Sort 
                    sortProducts={sortProducts}
                    sort={sort}
                    totalPosts={products.length}/>
            </nav>
            
            <div class="prod-container">
                <div class="prod-list">
                {currentProds?.length ? (
                    currentProds.map((product) => {
                        return (
                            <ProductCard
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            currency_id={product.currency_id}
                            available_quantity={product.available_quantity}
                            thumbnail={product.thumbnail}
                            condition={product.condition}
                            permalink={product.permalink}
                            rate={product.rate}
                            />
                        )
                    })
                ) : (
                    <div class="no-product">
                        <h1>Ingrese el producto que desea buscar...</h1>
                    </div>
                )
                    
                }
                </div>
            </div>
            <Pagination 
                postsPerPage={postsPerPage} 
                totalPosts={products.length} 
                paginate={paginate}
                prevPage={prevPage}
                nextPage={nextPage}/>
            <Footer />
        </div>
    )
}

export default Catalogue;