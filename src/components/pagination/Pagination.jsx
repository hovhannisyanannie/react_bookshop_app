import React from 'react';
import "./pagination.css"

const Pagination = ({pages, currentPage, setCurrentPage}) => {

    const pageNumbers=[];
    for(let i=1;i<=pages;i++){
      pageNumbers.push(i);
    }
  return (
    <div className='pagination'>
          <button  
          disabled={currentPage===1}
          onClick={()=>setCurrentPage(page=>page-1)}
          className='previous'>
          <i className="fa-solid fa-angles-left"></i>      
          </button>
        {pageNumbers.map(page=>
            <div onClick={()=>setCurrentPage(page)} key={page} className={currentPage===page? "page active":"page"}>
                {page}
            </div>    
            )}
            <button 
            onClick={()=>setCurrentPage(page=>page+1)}  
            disabled={currentPage===pages}
            className='next'>
          <i className="fa-solid fa-angles-right"></i>      
      </button>
    </div>
  )
}

export default Pagination

