import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiIdProducts from "../../components/Api/ApiIdProducts";
import { FaCartPlus } from "react-icons/fa6";
import { SectionDetails } from "./ProductsDetailsStyled";
import { contexts } from "../../components/Contexts/Context";

export default function ProductsDetails() {

    const [product, setProduct] = useState([]);
    const { productsCart, setProductsCart } = contexts();
    const { id } = useParams();

    useEffect(()=> {

        async function DatasApi() {
            const datas = await ApiIdProducts(id);
            setProduct(datas);
            console.log(datas);
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
            {/* <h1>Products details page {id}</h1> */}
                <figure>
                    <img src={product.thumbnail} alt="imagem do produto"/>
                    {/* <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="imagem do produto"/> */}
                </figure>
                <section>
                    <p>{product.title}</p>
                    <p>Quantidade: {product.initial_quantity}</p>
                    <h4>{product.price}</h4>
                    <button onClick={()=> addCart(product)}><FaCartPlus/></button>
                </section>
        </SectionDetails>
    )
}