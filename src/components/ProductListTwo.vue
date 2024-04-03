<template>
    <div id="product-list-two">
        <h2>
            Product List Two
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
    name: 'ProuductListTwo',
    props: ['products']
}
</script>

<style scoped>
/* Styling for the product list container */
#product-list-two {
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Styling for the heading */
#product-list-two h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
}

/* Styling for the list */
#product-list-two ul {
    list-style-type: none;
    padding: 0;
}

/* Styling for each list item */
#product-list-two li {
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
}

/* Styling for product name */
#product-list-two .name {
    font-weight: bold;
    color: #333;
}

/* Styling for product price */
#product-list-two .price {
    margin-left: 10px;
    color: #555;
}
</style>