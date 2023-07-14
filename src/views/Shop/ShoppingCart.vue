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
            <button @click="submit">Submit Cart</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from './store';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const cart = computed(() => store.state.cart);

const removeFromCart = (item) => {
    store.removeFromCart(item);
};

async function submit() {
    await store.submitCart();
    await router.push({ name: 'quiz.intro' });
}
</script>
