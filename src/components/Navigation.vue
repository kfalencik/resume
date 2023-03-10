<script setup lang="ts">
import { onMounted, ref } from "vue";

const menu = ref([
  { section: "intro", title: "Hi!" },
  { section: "about", title: "About." },
  { section: "story", title: "Story." },
  { section: "education", title: "Education." },
  { section: "experience", title: "Experience." },
  { section: "outro", title: "Outro." },
]);
const active = ref("intro");

const slideTo = function (section: string) {
  const sectionContainer = document.querySelector(`section[section="${section}"]`)!;
  sectionContainer.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

onMounted(() => {
  const container = document.querySelector(".modal")!;
  const navLinks = document.querySelectorAll(".menu a")!;

  container.addEventListener("scroll", () => {
    const fromTop = container.scrollTop;
    navLinks.forEach((link) => {
      const section = link.getAttribute("section") as string;
      const sectionContainer = document.querySelector(`section[section="${section}"]`)! as HTMLElement;
      if (sectionContainer.offsetTop <= fromTop + 200) {
        active.value = section;
      }
    });
  });
});
</script>

<template>
  <nav class="menu">
    <a
      :href="`#${item.section}`"
      class="menu__item"
      :class="{ 'menu__item--active': active === item.section }"
      v-for="(item, index) in menu"
      :key="index"
      :section="item.section"
      @click.stop.prevent="slideTo(item.section)"
      >{{ item.title }}</a
    >
  </nav>
</template>

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

  @media (max-width: $breakpoint-sm) {
    width: 100%;
  }

  &__item {
    cursor: pointer;
    padding: 5px 10px;
    color: $white;
    text-decoration: none;
    transition: all 0.5s ease;

    &--active,
    &:hover {
      color: $yellow;
    }
  }
}
</style>
