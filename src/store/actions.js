

export const reducePrice = (store, payload) => {
    setTimeout(function () {
        store.commit('reducePriceMutation', payload)
    }, 2000)

}