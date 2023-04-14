<template>
    <!-- Slider main container -->
    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><div style="background: green;">Hello World</div></div>
            <div class="swiper-slide"><div style="background: green;">Hello World</div></div>
            <div class="swiper-slide"><div style="background: green;">Hello World</div></div>
            <div class="swiper-slide"><div style="background: green;">Hello World</div></div>
            <div class="swiper-slide"><div style="background: green;">Hello World</div></div>
            <div class="swiper-slide"><div style="background: green;">Hello World</div></div>
        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
export default {
    props: {
        gameList: {
            type: Array,
            required: true
        }
    },

    setup(props) {
        console.log(props);
    }
}
</script>

<style scoped>
.swiper {
    /* background: #ffffff; */
    width: 600px;
    height: 300px;
}
</style>