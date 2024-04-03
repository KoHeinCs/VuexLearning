<template>
    <div id="product-list-one">
        <h2>
            Product List One
        </h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price"> ${{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'ProuductListOne',
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
}
</script>

<style scoped>
/* Styling for the product list container */
#product-list-one {
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Styling for the heading */
#product-list-one h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
}

/* Styling for the list */
#product-list-one ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 0;
    list-style: none;
    /* Remove bullet points */
}

/* Styling for each list item */
#product-list-one li {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
}

/* Styling for product name */
#product-list-one .name {
    font-weight: bold;
    color: #333;
}

/* Styling for product price */
#product-list-one .price {
    margin-left: 10px;
    color: #555;
}
</style>