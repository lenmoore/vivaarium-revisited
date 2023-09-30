<template>
    <div class="finale-container" v-if="lang === 'et'">
        <button
            class="menu-btn"
            id="menu-mobile"
            v-if="!showMenuMobile"
            @click="showMenuMobile = true"
        >
            menüü
        </button>
        <div class="menu" :class="{ open: showMenuMobile }">
            <img
                v-if="showMenuMobile"
                src="/android-chrome-512x512.png"
                alt=""
                height="200"
                width="200"
            />
            <RouterLink
                class="menu-btn"
                :to="{ name: 'overview.about' }"
                @click="showMenuMobile = false"
                >Vivaariumist</RouterLink
            >
            <RouterLink
                class="menu-btn"
                :to="{ name: 'overview.dramaturg' }"
                @click="showMenuMobile = false"
                >Tagasiside</RouterLink
            >
            <RouterLink
                class="menu-btn"
                :to="{ name: 'overview.stats' }"
                @click="showMenuMobile = false"
                >Statistika</RouterLink
            >
            <RouterLink
                class="menu-btn"
                :to="{ name: 'overview.viva' }"
                @click="showMenuMobile = false"
                >Tasku-Vivaariumist
            </RouterLink>
            <RouterLink
                class="menu-btn"
                :to="{ name: 'video-player', query: { code: 'v1' } }"
                @click="showMenuMobile = false"
            >
                Tagasi kapslisse
            </RouterLink>
            <button
                class="dnone"
                v-if="showMenuMobile"
                @click="showMenuMobile = false"
            >
                Sulge
            </button>
        </div>
        <RouterView />

        <div class="footer">
            <div class="py-2">
                Koduleht: <a href="www.vatteater.ee">www.vatteater.ee</a>
            </div>
            <div class="py-2">
                E-post:
                <a href="vat@vatteater.ee" type="email">vat@vatteater.ee</a>
            </div>
            <div class="py-2">
                Leia meid
                <a href="https://www.facebook.com/teatervat">Facebookist</a>,
                <a href="https://www.instagram.com/vatteater/">Instagramist</a>,
                TikTokist
            </div>
        </div>
    </div>
    <div v-else class="finale-container">
        <button
            class="menu-btn"
            id="menu-mobile"
            v-if="!showMenuMobile"
            @click="showMenuMobile = true"
        >
            menu
        </button>
        <div class="menu" :class="{ open: showMenuMobile }">
            <img
                v-if="showMenuMobile"
                src="/android-chrome-512x512.png"
                alt=""
                height="200"
                width="200"
            />
            <RouterLink
                class="menu-btn"
                :to="{ name: 'overview.about' }"
                @click="showMenuMobile = false"
                >About Vivarium</RouterLink
            >
            <RouterLink
                class="menu-btn"
                :to="{ name: 'overview.dramaturg' }"
                @click="showMenuMobile = false"
                >Feedback</RouterLink
            >
            <RouterLink
                class="menu-btn"
                :to="{ name: 'overview.stats' }"
                @click="showMenuMobile = false"
                >Statistics</RouterLink
            >
            <RouterLink
                class="menu-btn"
                :to="{ name: 'overview.viva' }"
                @click="showMenuMobile = false"
                >Pocket Vivarium
            </RouterLink>
            <RouterLink
                class="menu-btn"
                :to="{ name: 'video-player', query: { code: 'v1' } }"
                @click="showMenuMobile = false"
            >
                Back to the Capsule
            </RouterLink>
            <button
                class="dnone"
                v-if="showMenuMobile"
                @click="showMenuMobile = false"
            >
                Close
            </button>
        </div>
        <RouterView />

        <div class="footer">
            <div class="py-2">
                Website: <a href="www.vatteater.ee">www.vatteater.ee</a>
            </div>
            <div class="py-2">
                Email:
                <a href="vat@vatteater.ee" type="email">vat@vatteater.ee</a>
            </div>
            <div class="py-2">
                Find us on
                <a href="https://www.facebook.com/teatervat">Facebook</a>,
                <a href="https://www.instagram.com/vatteater/">Instagram</a>,
                TikTok
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenuMobile: true,
        };
    },
    computed: {
        lang() {
            return sessionStorage.getItem('lang') || 'et';
        },
    },
};
</script>
<style lang="scss">
.finale-container {
    height: 100%;
    p,
    h2,
    h3,
    h4 {
        max-width: 800px !important;
        width: 100%;
        margin: auto;
    }

    padding: 1rem 1rem 5rem;

    .container {
        padding-bottom: 10rem;
    }
}
#menu-mobile {
    display: none;
}
@media screen and (max-width: 450px) {
    #menu-mobile {
        display: block;
        color: white;
        font-size: 1.5rem;
    }
}
.menu {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding-top: 1rem;
    justify-content: flex-start;

    @media screen and (max-width: 450px) {
        display: none;

        &.open {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            z-index: 2;
            width: 100%;
            button {
                color: white;
            }
        }
    }
    a {
        color: black;
        padding: 1rem;
        background-color: lightgoldenrodyellow;
        margin: 0.5rem;
        @media screen and (max-width: 450px) {
            width: 30%;
        }
    }
}

.dnone {
    display: none;
    @media screen and (max-width: 450px) {
        display: block;
    }
}
.footer {
    border-top: 1px solid grey;
    margin-top: 20rem;
    bottom: 0;
    padding: 1rem;
}
</style>
