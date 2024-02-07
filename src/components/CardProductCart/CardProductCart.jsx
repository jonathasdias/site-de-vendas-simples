import { useEffect } from "react";
import { contexts } from "../Context/Context";
import { SectionProducts, Product, LinkProducts, ButtonRemove, SectionQuantity, H1Alert } from "./CardProductCartStyled";

export default function CartProductCart() {

    const { productsCart, setProductsCart } = contexts();

    function removeProduct(id) {
        const newProductsCart = productsCart.filter(item=> item.id !== id);
        setProductsCart(newProductsCart);
        localStorage.setItem('cart', JSON.stringify(newProductsCart));
    }

    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(productsCart));
    },[productsCart]);

    function moreProducts(id) {
        setProductsCart(
            productsCart.map((product)=> 
                product.id === id && product.product_quantity < product.initial_quantity ? { ...product, product_quantity 
                : product.product_quantity + 1 } : product
            )
        )
    }

    function fewerProducts(id) {
        setProductsCart(
            productsCart.map((product)=> 
                product.id === id && product.product_quantity > 1 ? { ...product, product_quantity: product.product_quantity - 1 } 
                : product
            )
        )
    }

    return(
        <SectionProducts>
            {productsCart.length > 0 ? productsCart.map((product)=> (
                <Product key={product.id}>
                    <figure>
                        <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="Imagem do produto"/>
                    </figure>

                    <div>
                        <p>{product.title}</p>

                        <p>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                        
                        <p>Estoque: {product.initial_quantity}</p>

                        <ButtonRemove onClick={()=> removeProduct(product.id)}>Remover</ButtonRemove>

                        <SectionQuantity>
                            <button onClick={()=> fewerProducts(product.id)}>-</button>
                            <span>{product.product_quantity}</span>
                            <button onClick={()=> moreProducts(product.id)}>+</button>
                        </SectionQuantity>
                    </div>

                </Product>
                
            )) : <H1Alert>Carrinho vázio, adicione seus produtos aqui: <LinkProducts to='/'>Seus produtos</LinkProducts></H1Alert>}
        </SectionProducts>
    )
}