<template>
    <!-- PC Games -->
    <div class="row">
        <div class="col">
            <h2>PC Games</h2>
            <!-- <img :src="gameList[0].thumbnail" alt="">
            <p class="text-primary">{{ gameList[0].title }}</p> -->
        </div>
    </div>

    <!-- Browser Games -->
    <div class="row">
        <div class="col">
            <h2>Browser Games</h2>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import freeToGameRepo from '../../api/freeToGameRepository.js';

export default {
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

        })

        // expose to template and other options API hooks
        return {
            gameList: gameList
        }
    },

}

</script>

<style>

</style>