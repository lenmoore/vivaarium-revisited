<template>
    <div class="container milk">
        <h2 style="margin-top: 4rem" class="title">
            {{ $t('Kõigi etenduste koondstatistika') }}
        </h2>

        <div>
            <div v-if="lang === 'et'">
                <p>
                    Kümne ametliku etenduse jooksul (18.-28.01.2023) külastas
                    Vivaariumit 880 inimest ja nende valikutest moodustus
                    kõnekas statistika.
                </p>
                <h3 class="space-top title">Kapslite jaotus</h3>
                <p>
                    Kuna kapslites oli piiratud ruum, siis jaotas Vivaariumi
                    algoritm inimesi kapslitesse järgmiselt:
                </p>
            </div>
            <div v-else>
                <p>
                    During the ten official performances (January 18-28, 2023),
                    Vivaarium was visited by 880 people, and their choices
                    resulted in significant statistics.
                </p>
                <h3 class="space-top title">Distribution of Capsules</h3>
                <p>
                    Since there was limited space in the capsules, Vivaarium's
                    algorithm distributed people into capsules as follows:
                </p>
            </div>

            <div class="single-doughnut">
                <Doughnut :data="capsulesDivisionDoughnutInfo" />
            </div>

            <table class="colors-table milk">
                <thead>
                    <tr>
                        <td class="bg-violet">{{ $t('violett') }}</td>
                        <td class="bg-lime">{{ $t('laim') }}</td>
                        <td class="bg-turq">{{ $t('türkiis') }}</td>
                        <td class="bg-silver">{{ $t('hõbevalge') }}</td>
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

            <p class="space-top">
                {{
                    $t(
                        'Tegelikkuses aga jaotus külastajaskond oma vaadetelt hoopis nii:'
                    )
                }}
            </p>
            <div class="single-doughnut">
                <Doughnut :data="capsulesActualDoughnutInfo"></Doughnut>
            </div>
            <table class="colors-table milk">
                <thead>
                    <tr>
                        <td class="bg-violet">{{ $t('violett') }}</td>
                        <td class="bg-lime">{{ $t('laim') }}</td>
                        <td class="bg-turq">{{ $t('türkiis') }}</td>
                        <td class="bg-silver">{{ $t('hõbevalge') }}</td>
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
            <p>
                {{
                    $t(
                        'Ütleb see midagi eestlaste või VATi publiku kohta? Kes teab.'
                    )
                }}
            </p>

            <h3 class="title">{{ $t('Tooted') }}</h3>
            <h4>
                {{ $t('Kõige populaarsemad poest valitud esemed olid:') }}
            </h4>
            <div class="products-wrap">
                <div class="product milk" v-for="i in 9" :key="i + 'popular'">
                    <img
                        width="60"
                        :src="`/humanity-icons/${products[i].imageUrl}`"
                        alt=""
                    />
                    <div class="product-name">
                        {{ $t(products[i].title) }} x {{ products[i].count }}
                    </div>
                </div>
            </div>

            <h4>
                {{ $t('Kõige ebapopulaarsemad poest valitud esemed olid:') }}
            </h4>
            <div class="products-wrap">
                <div v-for="i in [53, 54, 55, 56, 57, 58]" :key="i + 'popular'">
                    <div v-if="i >= products.length - 6" class="product milk">
                        <img
                            width="60"
                            :src="`/humanity-icons/${products[i].imageUrl}`"
                            alt=""
                        />
                        <div
                            v-if="i >= products.length - 6"
                            class="product-name"
                        >
                            {{ $t(products[i].title) }} x
                            {{ products[i].count }}
                        </div>
                    </div>
                </div>
            </div>

            <p v-if="lang === 'et'" class="padding">
                Vahel oldi valikutes vägagi resoluutsed. Üks vanapaar valis
                poest kahe peale vaid teadusartiklite kogu ja 100 liitrit
                viskit. Nad selgitasid tiimile hiljem, et kõik muud valikud olid
                mõttetud.
            </p>
            <p v-else class="padding">
                At times, the choices were quite resolute. One elderly couple
                chose to buy only a collection of scientific articles and 100
                liters of whiskey from the store. They later explained to the
                team that all other choices were pointless.
            </p>

            <h3 class="title" v-if="lang === 'et'">
                Küsimustikkudest saime kena ülevaate, kuidas osalejad suhtuvad
                nii inimkonda, loodusesse kui tulevikku.
            </h3>
            <h3 class="title" v-else>
                From the questionnaires, we gained a good overview of how
                participants view humanity, nature, and the future.
            </h3>

            <div class="questions-block">
                <div
                    class="quiz-answers"
                    :key="question.question"
                    v-for="question in questionsPreCapsule"
                >
                    <strong>{{ $t(question.question) }} </strong>
                    <Doughnut :data="questionDoughnutData(question)" />
                </div>
            </div>

            <h3 v-if="lang === 'et'" class="padding">
                Kapslite sees läksid küsimused juba tõsisemaks. Tunnistame, et
                kaptenid manipuleerisid vajadusel hääletustulemustega, et nende
                missioon ikka jätkuks. Samas on põnev vaadata, kuidas inimesed
                päriselt hääletasid.
            </h3>
            <h3 v-else>
                Inside the capsules, the questions became more serious. We admit
                that the captains occasionally manipulated the voting results to
                ensure the continuity of their mission. However, it's
                fascinating to see how people actually voted.
            </h3>
            <div class="questions-block">
                <div
                    class="quiz-answers"
                    :key="question.question"
                    v-for="question in capsuleQuestions"
                >
                    <strong>{{ $t(question.question) }} </strong>
                    <Doughnut :data="questionDoughnutData(question)" />
                </div>
            </div>

            <div class="padding" v-if="lang === 'et'">
                <h3 class="title">
                    Mõnda tulemust ei moonutanud kaptenid aga kunagi.
                </h3>
                <p>
                    Nii oli see näiteks vastutöötaja karistamise puhul. Seal jäi
                    alati peale grupi tahe. Valdavalt valiti karistuseks
                    ühiskondlikult kasulik töö. Kahel juhul aga otsustati ausalt
                    ja tulemusi muutmata hukkamise kasuks. Violettide kapslis
                    pakuti osaleja poolt karistuseks välja sundpaaritamine.
                </p>

                <p>
                    Ka kaptenite mahahääletamine oli alati aus. See oli ka meie
                    tiimi eesmärk - me tahtsime, et inimesed hakkaksid oma
                    kapteni vastu mässama. Me tahtsime, et kaptenid kukuksid
                    igal õhtul.
                </p>
                <p>
                    Meie suureks üllatuseks aga läks mahahääletamine läbi vaid
                    <strong>12 korral 40st (30%)</strong>.
                </p>
            </div>

            <div class="padding" v-else>
                <h3 class="title">
                    However, some results were never distorted by the captains.
                </h3>
                <p>
                    This was the case, for example, in the punishment of
                    saboteurs. The group's will always prevailed. Mostly, a
                    socially useful work sentence was chosen as the punishment.
                    In two cases, however, execution was honestly chosen without
                    altering the results. In the Violet capsule, one participant
                    suggested forced pairing as a punishment.
                </p>
                <p>
                    Even the voting off of captains was always fair. This was
                    our team's goal - we wanted people to rebel against their
                    captains. We wanted the captains to fall every night.
                </p>
                <p>
                    To our surprise, however, the voting off only passed
                    <strong>12 out of 40 times (30%)</strong>.
                </p>
            </div>

            <table class="colors-table shadow">
                <thead>
                    <tr>
                        <td>KP</td>
                        <td class="bg-violet">{{ $t('violett') }}</td>
                        <td class="bg-lime">{{ $t('laim') }}</td>
                        <td class="bg-turq">{{ $t('türkiis') }}</td>
                        <td class="bg-silver">{{ $t('hõbevalge') }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>3/10</td>
                        <td>6/10</td>
                        <td>3/10</td>
                        <td>3/10</td>
                    </tr>
                    <tr v-for="i in 28" :key="'killed' + captainWasKilled[i]">
                        <td v-if="captainWasKilled[i]">
                            {{ i }}. {{ $t('jaanuar') }}
                        </td>
                        <td v-if="captainWasKilled[i]">
                            {{
                                captainWasKilled[i].violet
                                    ? $t('kukutati')
                                    : '-'
                            }}
                        </td>
                        <td v-if="captainWasKilled[i]">
                            {{
                                captainWasKilled[i].lime ? $t('kukutati') : '-'
                            }}
                        </td>
                        <td v-if="captainWasKilled[i]">
                            {{
                                captainWasKilled[i].turq ? $t('kukutati') : '-'
                            }}
                        </td>
                        <td
                            v-if="captainWasKilled[i]"
                            :class="captainWasKilled[i].silver"
                        >
                            {{
                                captainWasKilled[i].silver
                                    ? $t('kukutati')
                                    : '-'
                            }}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="title"></div>
            <p v-if="lang === 'et'" class="padding">
                Paistab, et oma juhtide mahahääletamine (isegi, kui nad seda
                ilmselgelt vääriks) on eestlastele hirmus raske. Või äkki
                maarjamaalastele meeldivadki fanaatilised liidrid? Kes teab. Kes
                teab. Kes teab…
            </p>
            <p v-else class="padding">
                It seems that voting out their leaders (even if they clearly
                deserve it) is terribly difficult for Estonians. Or maybe the
                people of the land of Mary actually like fanatical leaders? Who
                knows. Who knows. Who knows...
            </p>
        </div>
    </div>
</template>

<script>
import { products } from '@/views/Finale/stats/prods';
import { captainWasKilled } from '@/views/Finale/stats/captains';
import { questionnairesAmounts } from '@/views/Finale/stats/questions';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { capsuleQuestions } from '@/views/Finale/stats/capsule-questions';
import { capsuleQuestionsEn } from '@/views/Finale/stats/capsule-questions-en';
import { questionnairesAmountsEn } from '@/views/Finale/stats/questions-en';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
    components: {
        Doughnut,
    },
    computed: {
        lang() {
            return sessionStorage.getItem('lang') || 'et';
        },
        capsulesDivisionDoughnutInfo() {
            return {
                labels: [
                    this.$t('violett'),
                    this.$t('laim'),
                    this.$t('türkiis'),
                    this.$t('hõbevalge'),
                ],
                datasets: [
                    {
                        backgroundColor: [
                            '#de90fc',
                            '#b1f6a9',
                            '#33cfe8',
                            '#a8a8a8',
                        ],
                        data: [
                            this.violetCapsules,
                            this.limeCapsules,
                            this.turqCapsules,
                            this.silverCapsules,
                        ],
                    },
                ],
            };
        },
        capsulesActualDoughnutInfo() {
            return {
                labels: ['Violett', 'Laim', 'Turkiis', 'hõbevalge'],
                datasets: [
                    {
                        backgroundColor: [
                            '#de90fc',
                            '#b1f6a9',
                            '#33cfe8',
                            '#a8a8a8',
                        ],
                        data: [
                            this.violetActual,
                            this.limeActual,
                            this.turqActual,
                            this.silverActual,
                        ],
                    },
                ],
            };
        },
        questionsPreCapsule() {
            return this.lang === 'et'
                ? questionnairesAmounts
                : questionnairesAmountsEn;
        },
        capsuleQuestions() {
            return this.lang === 'et' ? capsuleQuestions : capsuleQuestionsEn;
        },
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
    methods: {
        getQuestionSum(question) {
            let sum = 0;
            question.options.forEach((o) => {
                o.count.forEach((c) => {
                    sum += c;
                });
            });
            return sum / 100;
        },
        questionDoughnutData(question) {
            let chartConfig = {
                labels: question.options.map((o) => o.text),
                datasets: [
                    {
                        backgroundColor: [
                            '#9ee0c1',
                            '#d39a91',
                            '#9acdd5',
                            '#849dd2',
                        ],
                        data: [],
                    },
                ],
            };

            question.options.forEach((option) => {
                chartConfig.datasets[0].data.push(
                    option.count.reduce((a, b) => a + b)
                );
            });

            return chartConfig;
        },
    },
};
</script>

<style lang="scss">
.colors-table {
    width: 90%;
    margin: 1.5rem auto;
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

.container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: rgba(246, 246, 246, 0.68);

    p {
        max-width: 800px;
        margin: auto;
        padding-bottom: 1rem;
        line-height: 1.5;
    }

    h1,
    h2,
    h3 {
        padding-bottom: 1rem;
    }

    .padding {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
}

.questions-block {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .quiz-answers {
        padding: 1rem;
        max-width: 20rem;
    }
}

.space-top {
    margin-top: 4rem !important;
}

.single-doughnut {
    margin: auto;

    div {
    }

    max-width: 400px;
    width: 100%;
}
</style>
