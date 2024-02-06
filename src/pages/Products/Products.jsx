import { useEffect, useState } from "react";
import ApiAllProducts from "../../components/Api/ApiAllProducts";
import FormSearch from "./FormSearch";
import { Section, ProductStyled, H1, ContainerBtnsPage } from "./ProductsStyled";
import { contexts } from "../../components/Contexts/Context";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


export default function Products() {

    const {products, setProducts, searchProduct, currentPage, setCurrentPage, totalPages, setTotalPages} = contexts();
    const [visiblePages, setVisiblePages] = useState([]);
    const btnsPerPage = 6;

    useEffect(()=> {

        async function DatasApi() {
            const datas = await ApiAllProducts(searchProduct, currentPage);
            setProducts(datas.results);
            setTotalPages(Math.ceil(datas.paging.total/datas.paging.limit))
            console.log(datas);
        }
        DatasApi();

    },[currentPage]);

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
        <>
            <FormSearch/>

            <H1>Seus Produtos</H1>

            <ContainerBtnsPage>
                <button onClick={handlePrevPage}><FaAngleLeft /></button>
                    {visiblePages.map((page)=> (
                        <button style={{ fontWeight: page === currentPage ? 'bolder' : 'normal', backgroundColor: page === currentPage ? 'gray' : '' }} onClick={() => handlePageClick(page)}>
                            {page}
                        </button>
                    ))}
                <button onClick={handleNextPage}><FaAngleRight /></button>
            </ContainerBtnsPage>

            <Section>
                {products.map((product)=> (

                    <ProductStyled to={'/products/' + product.id} key={product.id}>
                        <figure>
                            <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="imagem do produto"/>
                        </figure>
                        
                        <h4>{product.title}</h4>

                        <p>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    </ProductStyled>

                ))}
            </Section>

        </>
    )
}