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
          v-if="darkMode"
          class=""
          src="./assets/Logo/Logo.png" />
        <img
          v-else
          src="./assets/Logo/logo_dark.png" />
        <img
          class=""
          src="./assets/Logo/UoM_black.png" />
      </div>
      <OnHeader v-if="onFB" />
    </header>

    <Off v-if="offFB" />
    <On v-if="onFB" />
    <Shutdown v-if="shutdownFB" />
    <Timeout v-if="timeoutFB" />
    <Keyboard v-if="KeyboardFB" />
  </div>
  <!-- <div class="popups">
  </div> -->
</template>

<script setup>
  // vue imports
  import { ref } from 'vue'

  // import componets/pages
  import Off from './components/Off.vue'
  import On from './components/On.vue'
  import OnHeader from './components/OnHeader.vue'
  import Timeout from './components/Modal/Timeout.vue'
  import Shutdown from './components/Modal/Shutdown.vue'
  import Keyboard from './components/Modal/Keyboard.vue'

  // import Crestron functions
  import { useCrestronFB } from './use/useCrestronFB'
  import { useCrestronAct } from './use/useCrestronAct'

  // register Crestron feedback
  const { digFB: offFB } = useCrestronFB('15'),
    { digFB: onFB } = useCrestronFB('16'),
    { digFB: timeoutFB } = useCrestronFB('18'),
    { digFB: shutdownFB } = useCrestronFB('17'),
    { digFB: KeyboardFB } = useCrestronFB('141')

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
