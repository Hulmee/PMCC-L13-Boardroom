<template>
  <div
    id="main"
    class="theme"
    :class="{ dark: darkMode, light: !darkMode }">
    <header :class="{ lightBB: !darkMode }">
      <div class="logos">
        <img
          class=""
          src="./assets/Logo/Logo.png" />
        <img
          class=""
          src="./assets/Logo/UoM_black.png" />
      </div>
    </header>
    <Off v-if="false" />
    <Mode v-if="false" />
    <On />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import Off from './components/Off.vue'
  import On from './components/On.vue'
  import Mode from './components/Mode.vue'

  const darkMode = ref(true)
</script>

<style lang="scss" scoped>
  @import './assets/colors';
  #main {
    height: 100%;

    display: grid;
    grid-template-areas:
      'head'
      'sec';
    @media screen and (max-width: 641px) {
      grid-template-rows: 5em auto;
    }
    grid-template-rows: 10em auto;
    &.dark {
      --BG-Color: $dark;
      --TX-Color: $light;
      background: $dark;
      color: $light;
    }
    &.light {
      --BG-Color: $light;
      --TX-Color: $dark;
      background: $light;
      color: $dark;
    }
    header {
      height: 100%;
      grid-area: head;

      background: $light;
      display: flex;
      align-items: center;
      .logos {
        height: 75%;
        padding-left: 1em;
        img {
          height: 100%;
          padding: 0 0.5em;
        }
      }
      &.lightBB {
        border-bottom: solid 0.5px;
        border-color: var(--TX-Color);
      }
    }
  }
</style>
