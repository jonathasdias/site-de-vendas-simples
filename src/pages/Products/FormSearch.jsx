import styled from "styled-components";
import { contexts } from '../../components/Contexts/Context';
import ApiAllProducts from "../../components/Api/ApiAllProducts";

const Form = styled.form`
    padding: 22px 10px;

    div {
        display: flex;
        justify-content: center;

        input {
            padding: 12px;
            border: none;
            border-radius: 1rem 0 0 1rem;
            width: 40rem;
            font-size: 1em;
        }
        
        button {
            padding: 0 1rem;
            border: none;
            border-radius: 0 1rem 1rem 0;
            cursor: pointer;
            font-size: 1em;

            &:hover {
                background-color: rgb(231, 227, 227);
            }
        }
    }
`

export default function FormSearch() {

    const { setProducts, searchProduct, setSearchProduct, setCurrentPage,totalPages, setTotalPages } = contexts();

    async function search(e) {
        e.preventDefault();

        if(searchProduct !== '') {
            setCurrentPage(1);
            const datas = await ApiAllProducts(searchProduct, 0);
            setProducts(datas.results);
            setTotalPages(Math.ceil(datas.paging.total/datas.paging.limit))
            return;
        }
    }

    return(
        <Form onSubmit={search}>
            <div>
                <input type="search" name="search" onChange={(e)=> setSearchProduct(e.target.value)} placeholder="Procure seu produto..."/>
                <button type="submit">Search</button>
            </div>
        </Form>
    )
}