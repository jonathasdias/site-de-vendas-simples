async function ApiIdProducts(productId) {
    try {
        const res = await fetch(`https://api.mercadolibre.com/items/${productId}`);
        if(res.ok) {
            const datas = await res.json();
            return datas;
        }else {
            console.log('Error');
        }
    }catch(error) {
        console.error(error);
    }
}
export default ApiIdProducts;