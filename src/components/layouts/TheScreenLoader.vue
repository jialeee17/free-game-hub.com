<template>
    <div class="screen">
        <div class="loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheScreenLoader',
}
</script>

<style lang="scss" scoped>
.screen {
    background: #000000;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .loader {
        width: 100%;
        height: 15px;
        text-align: center;

        .dot {
            position: relative;
            width: 18px;
            height: 18px;
            margin: 0 5px;
            display: inline-block;

            &:first-child {

                &:before,
                &:after {
                    animation-delay: 0ms;
                }
            }

            &:last-child {

                &:before,
                &:after {
                    animation-delay: 200ms;
                }
            }

            &:before {
                content: "";
                animation-name: dotHover;
                animation-duration: 900ms;
                animation-timing-function: cubic-bezier(.82, 0, .26, 1);
                animation-iteration-count: infinite;
                animation-delay: 100ms;
                background: #6842FF;
                border-radius: 100%;
                width: 18px;
                height: 18px;
                position: absolute;
                left: 0;
            }

            &:after {
                content: "";
                animation-name: dotShadow;
                animation-duration: 900ms;
                animation-timing-function: cubic-bezier(.82, 0, .26, 1);
                animation-iteration-count: infinite;
                animation-delay: 100ms;
                background: #ffffff;
                border-radius: 100%;
                box-shadow: 0px 0px 1px black;
                width: 100%;
                height: 3px;
                opacity: .20;
                position: absolute;
                left: 0;
                bottom: -2px;
                z-index: -1;
            }
        }
    }
}

@keyframes dotShadow {
    0% {
        transform: scaleX(1);
    }

    50% {
        opacity: 0;
        transform: scaleX(.6);
    }

    100% {
        transform: scaleX(1);
    }
}

@keyframes dotHover {
    0% {
        top: 0px;
    }

    50% {
        top: -50px;
        transform: scale(1.1);
    }

    100% {
        top: 0;
    }
}

/* -------------------------------------------------------------------------- */
/*                                  Resource                                  */
/* -------------------------------------------------------------------------- */
// 1. Loading Screen: https://codepen.io/chrisamador/pen/qNYJLw
</style>