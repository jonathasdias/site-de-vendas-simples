import { contexts } from '../Context/Context';
import ApiAllProducts from "../Api/ApiAllProducts";
import { useRef } from "react";
import { GoSearch } from "react-icons/go";
import { Form } from './FormSearchStyled';

export default function FormSearch() {

    const { setProducts, searchProduct, setSearchProduct, setCurrentPage, setTotalPages, setIsLoading } = contexts();
    const inputSearch = useRef();

    async function search(e) {
        e.preventDefault();

        if(searchProduct !== '') {
            setIsLoading(true);
            setCurrentPage(1);
            const datas = await ApiAllProducts(searchProduct, 0);
            inputSearch.current.value = '';
            setProducts(datas.results);
            setTotalPages(Math.ceil(datas.paging.total/datas.paging.limit))
            setIsLoading(false);
            return;
        }
    }

    return(
        <Form onSubmit={search}>
            <div>
                <input type="search" name="search" ref={inputSearch} onChange={(e)=> setSearchProduct(e.target.value)} placeholder="Procure seu produto..."/>
                <button type="submit" aria-label="Pesquisar"><GoSearch aria-hidden="true"/></button>
            </div>
        </Form>
    )
}