

export const reducePrice = (store, payload) => {
    setTimeout(function () {
        store.commit('reducePrice', payload)
    }, 2000)

}