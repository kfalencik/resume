<template>
  <section section="gallery">
    <h3 class="h3">Case studies.</h3>
    <div class="grid">
      <div class="grid__item">
        <iframe src="https://player.vimeo.com/video/399125187" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>  
        <h3>Unilever - Every U Does Good</h3>
      </div>
      <div class="grid__item">
        <iframe src="https://player.vimeo.com/video/399125561" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> 
        <h3>Expedia - Canary Islands</h3>
      </div>
      <div class="grid__item">
        <iframe src="https://player.vimeo.com/video/399125510" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <h3>Iconari</h3>
      </div>
      <div class="grid__item">
        <iframe src="https://player.vimeo.com/video/399125410" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <h3>Unilever - Teamap</h3>
      </div>
      <div class="grid__item">
        <iframe src="https://player.vimeo.com/video/399125497" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> 
        <h3>Inkdependent - Tattoo studio</h3> 
      </div>
      <div class="grid__item">
        <iframe src="https://player.vimeo.com/video/399125524" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <h3>Expedia - Visit Toronto</h3>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;

    &__item {
      width: calc(50% - 20px);
      margin: 15px 10px;
      padding: 10px;
      background: $black;
      padding-bottom: 20px;
      box-shadow: 0 0 53px $black;
      position: relative;

      @media (max-width: $breakpoint-md) {
        width: 100%;
        margin: 15px 0;
      }

      h3 {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -20px;
        height: 30px;
        background-color: $black;
        color: $white;
        text-align: center;
        font-size: 14px;
      }

      iframe {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }
</style>
