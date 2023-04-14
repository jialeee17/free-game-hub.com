<template>
    <!-- PC Games -->
    <div class="section section-recommended-games py-4">
        <div class="row">
            <div class="col">
                <h2 class="title text-white">Recommended for you</h2>
                <AppSwiper :gameList="gameList"/>
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

            const response = freeToGameRepo.getGameList();

            response
                .then((response) => {
                    if (response.status === 200) {
                        if (response.data) {
                            gameList.value = response.data;
                        }
                    }
                })
                .catch((e) => {
                    console.error(e);
                })

            const swiper = new Swiper('.swiper', {
                // Optional parameters
                // direction: 'vertical',
                // loop: true,
                grid: {
                    rows: 3,
                    cols: 3
                },
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

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