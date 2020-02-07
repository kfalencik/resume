<template>
  <div class="modal">
    <Resume />
  </div>
</template>

<script>
import Resume from './Resume';

export default {
  components: {
    Resume
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    z-index: 9999;
    position: relative;
    width: 100%;
    max-width: $breakpoint-lg;
    background: $white;
    height: calc(100vh - 200px);
    box-shadow: inset 0 0 20px $black;
    border: 10px solid #fff;
    display: flex;
    justify-content: center;
    overflow: auto;
    padding-bottom: 50px;
  }
</style>