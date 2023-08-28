<template>
    <div class="finale-container">
        <div class="menu">
            <RouterLink :to="{ name: 'overview.about' }">Etendusest</RouterLink>
            <RouterLink :to="{ name: 'overview.dramaturg' }"
                >moned kysimused akki vms</RouterLink
            >
            <RouterLink :to="{ name: 'overview.stats' }"
                >Etenduste statistika</RouterLink
            >
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
export default {};
</script>
<style lang="scss">
.finale-container {
    height: 100%;
}
.menu {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a {
        color: black;
        padding: 1rem;
        @media screen and (max-width: 450px) {
            width: 30%;
        }
    }
}
.footer {
    border-top: 1px solid grey;
    margin-top: 20rem;
    bottom: 0;
    padding: 1rem;
}
</style>
