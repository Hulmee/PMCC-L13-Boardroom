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
      <OnHeader />
    </header>
    <Off v-if="page == 1" />
    <Mode v-if="page == 2" />
    <On v-if="page == 3" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import Off from './components/Off.vue'
  import On from './components/On.vue'
  import Mode from './components/Mode.vue'
  import OnHeader from './components/OnHeader.vue'

  const page = ref(1)

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
    grid-template-rows: 5em auto;
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
        width: 25%;
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
