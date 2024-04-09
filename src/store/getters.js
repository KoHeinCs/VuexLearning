
export const saleProducts = state => state.products.map(product => {
    return {
        name: '**' + product.name + '**',
        price: product.price / 2
    }
})