import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiIdProducts from "../../components/Api/ApiIdProducts";
import { FaCartPlus } from "react-icons/fa6";
import { SectionDetails } from "./ProductsDetailsStyled";
import { contexts } from "../../components/Context/Context";

export default function ProductsDetails() {

    const [product, setProduct] = useState([]);
    const { productsCart, setProductsCart } = contexts();
    const { id } = useParams();

    useEffect(()=> {

        async function DatasApi() {
            const datas = await ApiIdProducts(id);
            setProduct(datas);
        }
        DatasApi();

    },[id]);

    function addCart(product) {
        const newProductsCart = productsCart.filter(item=> item.id !== product.id);
        setProductsCart([...newProductsCart, {...product, product_quantity: 1}]);
        localStorage.setItem('cart', JSON.stringify([...newProductsCart, {...product, product_quantity: 1}]));
    }

    return(
        <SectionDetails>
                <figure>
                    <img src={product.thumbnail && product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="imagem do produto"/>
                </figure>

                <section>
                    <h1>{product.title}</h1>
                    <p>Quantidade: {product.initial_quantity}</p>
                    <h4>{product.price && product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h4>
                    <button onClick={()=> addCart(product)}><FaCartPlus/></button>
                </section>
        </SectionDetails>
    )
}