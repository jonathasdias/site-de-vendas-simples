import { useEffect } from "react";
import ApiAllProducts from "../../components/Api/ApiAllProducts";
import FormSearch from "./FormSearch";
import { Section, ProductStyled } from "./ProductsStyled";
import { contexts } from "../../components/Contexts/Context";

export default function Products() {

    const {products, setProducts} = contexts();

    useEffect(()=> {

        async function DatasApi() {
            const datas = await ApiAllProducts();
            setProducts(datas);
            console.log(datas);
        }
        DatasApi();

    },[]);

    return(
        <>
            <FormSearch/>

            <h1>Seus Produtos</h1>
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