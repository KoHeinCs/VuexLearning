

export const  reducePriceMutation = (state,payload) => state.products.forEach(product => product.price -= payload)