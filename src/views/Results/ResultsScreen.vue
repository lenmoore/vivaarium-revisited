<template>
    <div class="results-wrapper">
        <h2>Violett</h2>

        <div>
            Ma tahaks siia panna veel näitleja tehtud intro kapsli iseloomu
            kohta -- video
        </div>
        <div class="percents">
            <span class="violet">XX</span>
            <span class="lime">XX</span>
            <span class="turquoise">XX</span>
            <span class="silver">XX</span>
        </div>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </p>
        <div class="cart-wrapper">
            <img
                v-for="item in cart"
                :key="item.id"
                width="100"
                :src="item.image"
                alt=""
            />
        </div>
        <RouterLink :to="{ name: 'welcome-video' }" class="btn">{{
            $t('Continue to capsule')
        }}</RouterLink>
    </div>
</template>
<script setup>
import { useStore } from '@/views/Shop/store';

const store = useStore();

import { computed } from 'vue';

const localCart = JSON.parse(localStorage.getItem('cart_items'));
store.state.cart = localCart;
const cart = computed(() => store.state.cart);
</script>
<style lang="scss">
@import '../../vars';
.results-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .percents {
        margin-top: 2rem;
        margin-bottom: 2rem;
        span {
            width: 2rem;
            margin: 1rem;
            padding: 1rem;
        }

        .violet {
            background-color: $violet;
        }
        .lime {
            background-color: $lime;
        }
        .turquoise {
            background-color: $turquoise;
        }
        .silver {
            background-color: $silver;
        }
    }
    p {
        width: 60%;
    }
}

.cart-wrapper {
    width: 30rem;
    overflow-y: scroll;
    text-align: left;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    img {
        margin: 0.5rem;
    }
}
</style>
