<template>
    <div class="cart-page">
        <h2>Shopping Cart</h2>
        <RouterLink :to="{ name: 'products' }">Shop</RouterLink>

        <ul class="cart-wrapper">
            <li class="item-in-cart" v-for="item in cart" :key="item.id">
                {{ item.title }} - {{ item.price }}€
                <button @click="removeFromCart(item)">
                    {{ $t('Remove') }}
                </button>
            </li>
        </ul>
        <div v-if="cart && cart.length === 0">
            {{ $t('Your cart is empty.') }}
        </div>
        <div v-else>
            {{ $t('Total Items') }}: {{ cart.length }}
            <button @click="submit">{{ $t('Submit Cart') }}</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from './store';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const localCart = JSON.parse(localStorage.getItem('cart_items'));
store.state.cart = localCart;
const cart = computed(() => store.state.cart);

const removeFromCart = (item) => {
    store.removeFromCart(item);
};

async function submit() {
    await store.submitCart();
    await router.push({ name: 'quiz.intro' });
}
</script>
<style lang="scss">
.cart-page {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.cart-wrapper {
    width: 30rem;
    text-align: left;
    list-style: none;
    border: 1px solid red;
    .item-in-cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem;
        font-size: 2rem;

        button {
            margin-left: 1rem;
        }
    }
}
</style>
