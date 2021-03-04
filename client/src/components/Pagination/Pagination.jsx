import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, nextPage, prevPage }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (totalPosts > 0) {
        return (
            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a onClick={() => prevPage()} class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
                    </li>
                    {
                        pageNumbers.map(number => {
                            return (
                                <li key={number} class="page-item">
                                    <a onClick={() => paginate(number)} href="#" class="page-link">
                                        {number}
                                    </a>
                                </li>
                            )
                            
                        })
                    }
                    <li class="page-item">
                        <a onClick={() => nextPage()} class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>
                    </li>
                </ul>
            </nav>
        )
    }
    else {
        return (
            <div>
                
            </div>
        )
    }
    
}

export default Pagination;