<template>
  <div>
    <TheHeader />

    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>

</style>
