<template>
  <div
    id="main"
    class="theme"
    :class="{ dark: darkMode, light: !darkMode }">
    <header :class="{ lightBB: !darkMode }">
      <div
        @click="darkMode = !darkMode"
        class="logos">
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
    <On v-if="page == 3" />
  </div>
  <div class="popups">
    <Timeout v-if="false" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import Off from './components/Off.vue'
  import On from './components/On.vue'
  // import Mode from './components/Mode.vue'
  import OnHeader from './components/OnHeader.vue'
  import Timeout from './components/Modal/Timeout.vue'

  const page = ref(1)

  const darkMode = ref(false)
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
    header {
      height: 100%;
      grid-area: head;

      background: var(--TX-Color);
      color: var(--BG-Color);
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
