<template>
  <section class="page">
    <h1 class="sr-only">Kevin Falencik - resume</h1>
    <Background />
    <Navigation />
    <Modal />
  </section>
</template>

<script>
import Background from '~/components/Background.vue'
import Modal from '~/components/Modal.vue'
import Navigation from '~/components/Navigation';

export default {
  components: {
    Background,
    Modal,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
  .page {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;

    @media (max-width: $breakpoint-sm) {
      display: block;
      height: 100%;
    }
  }
</style>