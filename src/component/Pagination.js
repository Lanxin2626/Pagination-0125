import React from "react";

const Pagination = ({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage
}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumbers.push(i);
    }
    console.log(pageNumbers);
    return <nav className="pagination">
        {pageNumbers.map((pageNumber,i) => (
            <li key={`${i}`-`${pageNumber}`} className="page-item">
                <a 
                className={
                    `page-link ${currentPage === pageNumber ? "active-page" : ""}`
                } 
                onClick={()=>paginate(pageNumber)}>{pageNumber}
                </a>
            </li>
        )

        )}
    </nav>;
}
export default Pagination;