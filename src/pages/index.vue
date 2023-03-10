<template>
  <section class="page">
    <h1 class="sr-only">Kevin Falencik - Resume</h1>
    <Background />
    <Navigation />
    <Modal />
  </section>
</template>

<style lang="scss">
body {
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-family: $font-text;
  font-size: 16px;
  line-height: 1.8;
  scroll-behavior: smooth;
}
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
