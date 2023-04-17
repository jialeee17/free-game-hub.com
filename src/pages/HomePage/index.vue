<template>
    <!-- PC Games -->
    <div class="section section-recommended-games py-4">
        <div class="row">
            <h2 class="title text-white">Recommended for you</h2>
            <div class="col" v-for="game in gameList" :key="game.id">
                <!-- <pre style="background: white;">
                    {{ gameList }}
                </pre> -->
                <img :src="game.thumbnail" alt="">
                <div style="background: white;">
                    <p>Game: {{ game.title }}</p>
                    <p>Description: {{ game.short_description }}</p>
                </div>
                <!-- <AppSwiper :gameList="gameList"/> -->
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Swiper, { Grid, Pagination } from 'swiper';
import 'swiper/css';

import freeToGameRepo from '../../api/freeToGameRepository.js';
import AppSwiper from '../../components/ui/AppSwiper.vue';

export default {
    name: 'HomePage',

    components: {
        AppSwiper
    },

    setup() {
        /* -------------------------------------------------------------------------- */
        /*                                    NOTE                                    */
        /* -------------------------------------------------------------------------- */
        // 1. 'this' keyword is not applicable within the 'setup()' function.

        /* -------------------------------------------------------------------------- */
        /*                                  RESOURCES                                 */
        /* -------------------------------------------------------------------------- */
        // 1. https://vuejs.org/api/composition-api-setup.html

        // ref() is a function to declare a reactive data in the component.
        // Vue will keep track on the data for any changes.
        let gameList = ref([]);

        onMounted(() => {

            /* ------------------------ Returned Data (Game List) ----------------------- */
            // developer: "Blizzard Entertainment"
            // freetogame_profile_url: "https://www.freetogame.com/overwatch-2"
            // game_url: "https://www.freetogame.com/open/overwatch-2"
            // genre: "Shooter"
            // id: 540
            // platform: "PC (Windows)"
            // publisher: "Activision Blizzard"
            // release_date: "2022-10-04"
            // short_description: "A hero-focused first-person team shooter from Blizzard Entertainment."
            // thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg"
            // title: "Overwatch 2"

            freeToGameRepo.getGameList().then(response => {

                            if (response.status === 200) {

                                if (response.data) {

                                    gameList.value = response.data;

                                }

                            }

                        }).catch(error => {

                            console.error(error);

                        });

            // const swiper = new Swiper('.swiper', {
            //     // Optional parameters
            //     // direction: 'vertical',
            //     // loop: true,
            //     grid: {
            //         rows: 3,
            //         cols: 3
            //     },
            //     // Navigation arrows
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            //     },
            // });

        })

        // expose to template and other options API hooks
        return {
            gameList: gameList
        }
    },

}

</script>

<style lang="scss" scoped>
.section {
    &.section-recommended-games {
        .title {
            font-size: 1.125rem;
        }
    }
}
</style>