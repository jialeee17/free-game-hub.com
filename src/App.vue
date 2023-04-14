<template>
  <TheScreenLoader />

  <div>
    <TheHeader />

    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import { onMounted }from 'vue';
import TheHeader from './components/layouts/TheHeader.vue';
import TheScreenLoader from './components/layouts/TheScreenLoader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheScreenLoader
  },

  setup() {
    // Composition API...
    onMounted(() => {
      setTimeout(() => {
        $(".screen").hide();
      }, 1000);
    })
  }
}
</script>

<style lang="scss">

</style>
