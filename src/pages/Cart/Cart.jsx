import { useEffect } from "react";
import { SectionProducts, SectionPayment, Product, Wapper, SectionQuantity, ButtonRemove } from "./CartStyled";
import { contexts } from "../../components/Contexts/Context";

export default function Cart() {

    const { productsCart, setProductsCart } = contexts();

    const totoalPrice = productsCart.reduce((accumulator,currentValue)=> {
        return parseFloat(accumulator) + (parseFloat(currentValue.price) * parseInt(currentValue.product_quantity));
    },0);

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
        <Wapper>
            <SectionProducts>
                {productsCart.map((product)=> (
                    <Product key={product.id}>
                        <figure>
                            <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="Imagem do produto"/>
                        </figure>

                        <div>
                            <p>{product.title}</p>

                            <p>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>

                            <ButtonRemove onClick={()=> removeProduct(product.id)}>Remover</ButtonRemove>

                            <SectionQuantity>
                                <button onClick={()=> fewerProducts(product.id)}>-</button>
                                <span>{product.product_quantity}</span>
                                <button onClick={()=> moreProducts(product.id)}>+</button>
                            </SectionQuantity>
                        </div>

                    </Product>
                ))}
            </SectionProducts>

            <SectionPayment>

                <p>Valor Total: <span>{totoalPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></p>

                <p>Taxa: <span>00,00</span></p>

                <p>Desconto: <span>00,00</span></p>

                <button>Pagamento</button>

            </SectionPayment>

        </Wapper>
    )
}