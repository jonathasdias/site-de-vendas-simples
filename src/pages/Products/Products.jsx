import { useEffect } from "react";
import ApiAllProducts from "../../components/Api/ApiAllProducts";
import FormSearch from "../../components/FormSearch/FormSearch";
import { Section, ProductStyled, H1, SpanAlert, Loading } from "./ProductsStyled";
import { contexts } from "../../components/Context/Context";
import PagingButtons from "../../components/PagingButtons/PagingButtons";

export default function Products() {

    const {products, setProducts, searchProduct, currentPage, setTotalPages, isLoad, setIsLoading} = contexts();

    useEffect(()=> {

        async function DatasApi() {
            const datas = await ApiAllProducts(searchProduct, currentPage);
            setProducts(datas.results);
            setTotalPages(Math.ceil(datas.paging.total/datas.paging.limit));
            setIsLoading(false);
        }
        DatasApi();

    },[currentPage]);

    return(
        <>
            <FormSearch/>

            <H1>Seus Produtos</H1>

            {!isLoad && <PagingButtons/>}

            <Section>
                { isLoad ? (<Loading/>) : products.length > 0 ? products.map((product)=> (

                    <ProductStyled to={'/products/' + product.id} key={product.id}>
                        <figure>
                            <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="imagem do produto"/>
                        </figure>
                        
                        <p>{product.title}</p>

                        <span>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                    </ProductStyled>

                )) : <SpanAlert>Produto não encontrado</SpanAlert>}
            </Section>

            {!isLoad && <PagingButtons/>}

        </>
    )
}