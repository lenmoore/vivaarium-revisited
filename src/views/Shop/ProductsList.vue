<template>
    <div>
        <h1>{{ $t('Humanity shop') }}</h1>
        <RouterLink :to="{ name: 'cart' }">Cart</RouterLink>
        <ul class="product-list">
            <li class="product" v-for="product in products" :key="product.id">
                <img width="200" :src="product.image" alt="" />
                <div class="title">
                    <span> {{ product.title }} - ${{ product.price }} </span>
                    <div v-if="isInCart(product)">
                        {{ $t('Already in cart') }}
                    </div>
                    <div v-else-if="cartFull">
                        {{ $t('Cart full') }}
                    </div>
                    <button v-else @click="addToCart(product)">
                        {{ $t('Add to Cart') }}
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from './store';

const store = useStore();

const products = computed(() => store.state.products);

const localCart = JSON.parse(localStorage.getItem('cart_items'));
store.state.cart = localCart;
const cart = computed(() => store.state.cart);
const isInCart = (product) => {
    console.log(cart);
    return cart.value.find((prod) => prod.title === product.title) != null;
};
const cartFull = computed(() => cart.value?.length >= 9);
const addToCart = (product) => {
    store.addToCart(product);
};
</script>

<style lang="scss">
.product-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    .product {
        width: 300px;
        margin: 1rem;
        padding: 1rem;
        border: 1px solid transparent;
        border-radius: 1rem;

        .title {
            display: flex;
            flex-direction: column;
        }
        &:hover {
            border: 1px solid turquoise;
        }
    }
}
</style>
