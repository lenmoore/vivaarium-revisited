<template>
    <div class="shop-background">
        <header>
            <div>{{ $t('Humanity shop') }}</div>
        </header>
        <div class="infobox">
            {{ $t('infobox-humanity-shop-intro-text') }}
        </div>
        <RouterLink v-if="cart && cart.length" :to="{ name: 'cart' }"
            >Cart</RouterLink
        >
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
                    <button
                        class="btn draw-border"
                        v-else
                        @click="addToCart(product)"
                    >
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

const localCart = localStorage.getItem('cart_items');

if (!localCart) {
    localStorage.setItem('cart_items', '[]');
}
store.state.cart = JSON.parse(localCart);
console.log(localCart);
const cart = computed(() => store.state.cart);
console.log(cart);
const isInCart = (product) => {
    console.log(cart);
    return (
        cart.value &&
        cart.value?.find((prod) => prod.title === product.title) != null
    );
};
const cartFull = computed(() => cart?.value?.length >= 9);
const addToCart = (product) => {
    store.addToCart(product);
};
</script>

<style lang="scss">
@import '../../vars';

.product-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    .product {
        width: 10rem;
        margin: 1rem;
        border: 8px solid transparent;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        .title {
            display: flex;
            flex-direction: column;
        }
        &:hover {
            //border: 8px solid $turquoise;
            //background-color: white;
        }
    }
}
.infobox {
    border: 1px dotted fuchsia;
    margin: 3rem;
    padding: 1rem;
}
.hover-grey:hover {
    background-color: gray;
}
</style>
