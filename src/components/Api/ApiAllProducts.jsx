async function ApiAllProducts(searchProduct, currentPage) {    
    try {
        const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchProduct}&limit=20&offset=${currentPage}`);
        const datas = await res.json();
        return datas;
    }catch(error) {
        console.error(error);
    }
}
export default ApiAllProducts;