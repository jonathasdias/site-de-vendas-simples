async function ApiAllProducts(searchProduct) {    
    try {
        const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchProduct}&limit=20`);
        const datas = await res.json();
        return datas.results;
    
    }catch(error) {
        console.error(error);
    }
}
export default ApiAllProducts;