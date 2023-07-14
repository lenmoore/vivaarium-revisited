<template>
    <div>
        <h2>Shopping Cart</h2>
        <RouterLink :to="{ name: 'products' }">Shop</RouterLink>

        <ul>
            <li v-for="item in cart" :key="item.id">
                {{ item.title }} - ${{ item.price }}
                <button @click="removeFromCart(item)">Remove</button>
            </li>
        </ul>
        <div v-if="cart.length === 0">Your cart is empty.</div>
        <div v-else>
            Total Items: {{ cart.length }}
            <button @click="submitCart">Submit Cart</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from './store';

const store = useStore();

const cart = computed(() => store.state.cart);

const removeFromCart = (item) => {
    store.addToCart(item);
};

const submitCart = () => {
    store.submitCart();
};
</script>
