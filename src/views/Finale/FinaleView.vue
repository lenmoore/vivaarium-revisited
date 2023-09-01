<template>
    <div class="finale-container">
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
                :to="{ name: 'video-player' }"
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
</template>

<script>
export default {
    data() {
        return {
            showMenuMobile: true,
        };
    },
};
</script>
<style lang="scss">
.finale-container {
    height: 100%;
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
