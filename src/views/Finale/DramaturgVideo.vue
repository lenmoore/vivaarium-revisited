<template>
    <div v-if="lang === 'et'">
        <div><h1>Tagasiside</h1></div>
        <div class="give-feedback-wrapper shadow">
            <p>
                <strong>Hea Audiitor</strong>, nüüd oled sa piisavalt näinud ja
                uurinud, et pisut tagasisidet anda.
            </p>
            <p>Iga sinu mõte on meile äärmiselt oluline.</p>
            <p>Sina arvamused jäävad anonüümseks.</p>
            <p>
                KUI sa aga tahad endast märki maha jätta (näiteks soovid, et me
                mõnele su küsimusele vastaks), siis täida küsimustikus ära ka
                nime ja kontaktmeili lahter.
            </p>
            <div>
                <a
                    target="_blank"
                    href="https://forms.monday.com/forms/b454b9d9e9cff90b90571ceb024abb57?r=euc1"
                    >Taida siin.</a
                >
            </div>
        </div>
        <div class="make-donation-block">
            Soovid kohe midagi ette võtta? Aita hoida Eesti loodust ja anneta
            <a href="https://elfond.ee/toeta">Eestimaa Looduse Fondile</a>.
        </div>
    </div>
    <div v-else>
        <div><h1>Feedback</h1></div>
        <div class="give-feedback-wrapper shadow">
            <p>
                <strong>Dear Auditor</strong>, now you have seen and explored
                enough to provide some feedback.
            </p>
            <p>Your thoughts are extremely important to us.</p>
            <p>Your opinions will remain anonymous.</p>
            <p>
                However, if you wish to leave a mark (for example, if you want
                us to respond to a question), please also fill in the name and
                contact email fields in the questionnaire.
            </p>
            <div>
                <a
                    target="_blank"
                    href="https://forms.monday.com/forms/b454b9d9e9cff90b90571ceb024abb57?r=euc1"
                    >Fill it out here.</a
                >
            </div>
        </div>
        <div class="make-donation-block">
            Do you want to take action right away? Help preserve Estonian nature
            and donate to the
            <a href="https://elfond.ee/toeta">Estonian Fund for Nature</a>.
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        lang() {
            return sessionStorage.getItem('lang') || 'et';
        },
    },
};
</script>

<style lang="scss">
.give-feedback-wrapper {
    padding: 2rem;
    line-height: 1.5;
    p {
        padding-bottom: 1rem;
    }
}
.make-donation-block {
    margin-top: 5rem;
}
</style>
