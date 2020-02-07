<template>
  <nav class="menu">
    <a :href="'#' + item.section" class="menu__item" :class="{'menu__item--active': active === item.section}" v-for="(item, index) in menu" :key="index" @click.stop.prevent="slideTo(item.section)">{{item.title}}</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { section: 'intro', title: 'Hi!' },
        { section: 'about', title: 'About.' },
        { section: 'story', title: 'Story.' },
        { section: 'education', title: 'Education.' },
        { section: 'experience', title: 'Experience.' },
        { section: 'outro', title: 'Outro.' }
      ],
      active: 'intro'
    }
  },
  methods: {
    slideTo(section) {
      const container = document.querySelector(".modal")
      const sectionContainer = document.querySelector("[section='" + section +"']");
      sectionContainer.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

      this.active = section;
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    width: 90%;
    max-width: $breakpoint-lg;
    background-color: $black;
    color: $white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    position: relative;
    z-index: 50;

    &__item {
      cursor: pointer;
      padding: 5px 10px;
      color: $white;
      text-decoration: none;

      &--active {
        color: $yellow;
      }
    }
  }
</style>