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
    width: 90%;
    max-width: $breakpoint-lg;
    background: $white;
    height: 80vh;
    box-shadow: inset 0 0 20px $black;
    display: flex;
    justify-content: center;
    overflow: auto;
    padding-bottom: 50px;
  }
</style>