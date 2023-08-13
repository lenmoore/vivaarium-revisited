<template>
    <div class="cart-page">
        <h2>Ostukorv</h2>
        <RouterLink :to="{ name: 'products' }">POOD</RouterLink>

        <ul class="cart-wrapper">
            <li class="item-in-cart" v-for="item in cart" :key="item.id">
                <div class="title">
                    <img class="image" width="100" :src="item.image" alt="" />
                    {{ item.title }}
                </div>
                <button class="btn draw-border" @click="removeFromCart(item)">
                    {{ $t('Remove') }}
                </button>
            </li>
        </ul>
        <div v-if="cart && cart.length === 0">
            {{ $t('Su korv on tühi.') }}
        </div>
        <div v-else>
            {{ $t('Asju') }}: {{ cart.length }}
            <button class="btn draw-border" @click="submit">
                Kinnita ostukorv
            </button>
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
    background-color: black;
    height: 100%;
    overflow-y: clip;
    color: white;
}
.cart-wrapper {
    width: 40rem;
    background-color: #343835;
    overflow-y: scroll;
    text-align: left;
    list-style: none;
    padding: 1rem;
    .item-in-cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem;
        font-size: 2rem;
        width: 95%;
        text-align: left;
        .title {
            display: flex;
            align-items: center;
        }
        .image {
            margin: 1rem;
        }

        button {
            margin-left: 1rem;
        }
    }
}
</style>
