import { SectionPayment, Wapper } from "./CartStyled";
import { contexts } from "../../components/Context/Context";
import CartProductCart from "../../components/CardProductCart/CardProductCart";

export default function Cart() {

    const { productsCart } = contexts();

    const totoalPrice = productsCart.reduce((accumulator,currentValue)=> {
        return parseFloat(accumulator) + (parseFloat(currentValue.price) * parseInt(currentValue.product_quantity));
    },0);

    return(
        <Wapper>

            <CartProductCart/>

            <SectionPayment>

                <p>Valor Total: <span>{totoalPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></p>

                <p>Taxa: <span>00,00</span></p>

                <p>Desconto: <span>00,00</span></p>

                <button>Pagamento</button>

            </SectionPayment>

        </Wapper>
    )
}