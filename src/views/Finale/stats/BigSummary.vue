<template>
    <div>
        <h2>Kõigi etenduste koondstatistika</h2>
        <div>
            <p>Kokku käis kümnel etendusel 880 inimest.</p>
            <p>Lisaks sellele toimus veel kümme test- ja kontrolletendust.</p>
            <h3 class="title">Kapslite jaotus:</h3>
            <p>Kapslitesse jaotati, et saali mahuks:</p>
            <table class="colors-table shadow">
                <thead>
                    <tr>
                        <td class="bg-violet">Violett</td>
                        <td class="bg-lime">Laim</td>
                        <td class="bg-turq">Turkiis</td>
                        <td class="bg-silver">Hobevalge</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ violetCapsules }}</td>
                        <td>{{ limeCapsules }}</td>
                        <td>{{ turqCapsules }}</td>
                        <td>{{ silverCapsules }}</td>
                    </tr>
                </tbody>
            </table>

            <p>Publiku tegelikud tulemused:</p>
            <table class="colors-table shadow">
                <thead>
                    <tr>
                        <td class="bg-violet">Violett</td>
                        <td class="bg-lime">Laim</td>
                        <td class="bg-turq">Turkiis</td>
                        <td class="bg-silver">Hobevalge</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ violetActual }}</td>
                        <td>{{ limeActual }}</td>
                        <td>{{ turqActual }}</td>
                        <td>{{ silverActual }}</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="title">Kaptenite kukutamine</h3>
            <small
                >Selline infoke. Ma arvasin, et palju rohkem kukutati, nii
                imelik...</small
            >
            <div>
                Eesmark oli kapteneid kukutada. Aga noh. Elu ei lahe alati nii.
            </div>
            <p>Kapteneid kukutati kokku 12 korda.</p>
            <table class="colors-table shadow">
                <thead>
                    <tr>
                        <td>KP</td>
                        <td class="bg-violet">Violett</td>
                        <td class="bg-lime">Laim</td>
                        <td class="bg-turq">Turkiis</td>
                        <td class="bg-silver">Hobevalge</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 28" :key="'killed' + captainWasKilled[i]">
                        <td v-if="captainWasKilled[i]">{{ i }}. jaanuar</td>
                        <td v-if="captainWasKilled[i]">
                            {{ captainWasKilled[i].violet ? 'kukutati' : '-' }}
                        </td>
                        <td v-if="captainWasKilled[i]">
                            {{ captainWasKilled[i].lime ? 'kukutati' : '-' }}
                        </td>
                        <td v-if="captainWasKilled[i]">
                            {{ captainWasKilled[i].turq ? 'kukutati' : '-' }}
                        </td>
                        <td
                            v-if="captainWasKilled[i]"
                            :class="captainWasKilled[i].silver"
                        >
                            {{ captainWasKilled[i].silver ? 'kukutati' : '-' }}
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 class="title">Tooted</h3>
            <small
                >Mihkel, vali siit, milliseid tahad jätta vms. Tegin näidiseid
                ka, et saaks mingeid kommentaare panna jms. Aga neid voiks palju
                vahem olla.</small
            >
            <div class="products-wrap">
                <div
                    class="product shadow"
                    v-for="product in products"
                    :key="product.title"
                >
                    <img
                        width="60"
                        :src="`/humanity-icons/${product.imageUrl}`"
                        alt=""
                    />
                    <div class="product-name">
                        {{ product.title }} x {{ product.count }}
                        <div class="product-note">{{ product.note }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { products } from '@/views/Finale/stats/prods';
import { captainWasKilled } from '@/views/Finale/stats/captains';

export default {
    computed: {
        violetCapsules() {
            return [16, 17, 16, 18, 16, 18, 22, 11, 19, 15].reduce((a, b) => {
                return a + b;
            }, 0);
        },
        limeCapsules() {
            return [19, 21, 26, 15, 27, 23, 19, 27, 26, 27].reduce((a, b) => {
                return a + b;
            }, 0);
        },
        turqCapsules() {
            return [18, 23, 27, 20, 26, 25, 22, 20, 27, 27].reduce((a, b) => {
                return a + b;
            }, 0);
        },
        silverCapsules() {
            return [19, 27, 27, 19, 27, 26, 22, 27, 27, 26].reduce((a, b) => {
                return a + b;
            }, 0);
        },

        violetActual() {
            return [4, 11, 8, 3, 14, 13, 7, 9, 6, 5].reduce((a, b) => {
                return a + b;
            }, 0);
        },
        limeActual() {
            return [28, 26, 34, 22, 30, 28, 28, 41, 30, 47].reduce((a, b) => {
                return a + b;
            }, 0);
        },
        turqActual() {
            return [14, 16, 18, 17, 22, 14, 16, 11, 27, 14].reduce((a, b) => {
                return a + b;
            }, 0);
        },
        silverActual() {
            return [30, 30, 37, 26, 35, 36, 34, 24, 36, 29].reduce((a, b) => {
                return a + b;
            }, 0);
        },
        products() {
            let sortedProducts = products.sort((a, b) => b.count - a.count);
            console.log(sortedProducts);
            return sortedProducts;
        },
        captainWasKilled() {
            return captainWasKilled;
        },
    },
};
</script>

<style lang="scss">
.colors-table {
    width: 100%;
}

.bg-violet {
    background-color: #de90fc;
}
.bg-lime {
    background-color: #b1f6a9;
}
.bg-turq {
    background-color: #7ef6ec;
}
.bg-silver {
    background-color: #b9b9b9;
}

.title {
    margin-top: 4rem;
}
.products-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.product {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0.5rem;
    width: 20rem;

    img {
        padding: 0.25rem 1rem 0.25rem 0.25rem;
    }

    .product-name {
        font-weight: bold;
        width: 100%;
        text-align: left;
        .product-note {
            font-size: 0.75rem;
            width: 100%;
        }
    }
}

.shadow {
    background-color: white;

    -webkit-box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.2);
    box-shadow: -2px -1px 60px -12px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
}
</style>
