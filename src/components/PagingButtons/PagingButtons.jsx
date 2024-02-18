import { useState, useEffect } from "react";
import { contexts } from "../Context/Context";
import { ContainerBtnsPage } from "./PagingButtonsStyled";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function PagingButtons() {

    const { currentPage, setCurrentPage, totalPages } = contexts();
    const [visiblePages, setVisiblePages] = useState([]);
    const btnsPerPage = 6;

    useEffect(() => {
        const generateVisiblePages = () => {
          const pages = [];
          const startPage = Math.max(1, currentPage - Math.floor(btnsPerPage / 2));
          const endPage = Math.min(totalPages, startPage + btnsPerPage - 1);
    
          for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
          }
    
          setVisiblePages(pages);
        };
    
        generateVisiblePages();
    }, [currentPage, totalPages]);

    function handleNextPage() {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    function handlePrevPage() {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    function handlePageClick(page) {
        setCurrentPage(page);
    }

    return(
        <ContainerBtnsPage>
            <button onClick={handlePrevPage} aria-label="Página anterior"><FaAngleLeft aria-hidden="true"/></button>
                {visiblePages.map((page)=> (
                    <button key={'page'+page} aria-label={"Pagina " + page} style={{ fontWeight: page === currentPage ? 'bolder' : 'normal', backgroundColor: page === currentPage ? 'gray' : '' }} onClick={() => handlePageClick(page)}>
                        {page}
                    </button>
                ))}
            <button onClick={handleNextPage} aria-label="Próxima página"><FaAngleRight aria-hidden="true"/></button>
        </ContainerBtnsPage>
    )
}