<template>
    <div>
        <h2>Products</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - ${{ product.price }}
                <button @click="addToCart(product)">Add to Cart</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from './store';

const store = useStore();

const products = computed(() => store.state.products);

const addToCart = (product) => {
    store.addToCart(product);
};
</script>
