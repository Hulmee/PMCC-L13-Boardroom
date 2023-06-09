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
    <EWIS v-if="ewisFB" />
    <h1
      id="Con"
      v-if="!CrestronCon"
      class="container">
      Crestron is <span> NOT </span> connected
    </h1>
    <form
      v-if="!CrestronCon && isWebXpanel"
      @submit.prevent="XpanelCon"
      class=""
      id="Xpanel">
      <div class="container">
        <label for="CresHost">Host IP:</label>
        <input
          type="text"
          id="CresHost"
          v-model="configuration.host" />
      </div>
      <div class="container">
        <label for="CresHost">Host IPID:</label>
        <input
          type="text"
          id="CresID"
          v-model="configuration.ipId" />
      </div>
      <button>connect</button>
    </form>
  </div>
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
  import EWIS from './components/Modal/EWIS.vue'

  // import Crestron functions
  import { useCrestronFB } from './use/useCrestronFB'
  import { useCrestronAct } from './use/useCrestronAct'

  // register Crestron feedback
  const { digFB: offFB } = useCrestronFB('15'),
    { digFB: onFB } = useCrestronFB('16'),
    { digFB: timeoutFB } = useCrestronFB('18'),
    { digFB: shutdownFB } = useCrestronFB('17'),
    { digFB: KeyboardFB } = useCrestronFB('141'),
    { digFB: ewisFB } = useCrestronFB('20'),
    { digFB: CrestronCon } = useCrestronFB(
      'Csig.All_Control_Systems_Online_fb'
    ),
    isWebXpanel = ref(WebXpanel.isActive),
    XpanelCon = () => {
      WebXpanel.default.initialize(configuration.value)
    }

  const configuration = ref({
    host: '172.22.2.182',
    ipId: '0x11',
  })

  if (WebXpanel.isActive) {
    XpanelCon()
  }

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
        min-width: 15%;
        padding-left: 1em;
        img {
          height: 100%;
          padding: 0 0.5em;
          transition: display 500ms ease-in-out;
        }
      }
      &.lightBB {
        border-bottom: solid 0.5px;
        border-color: var(--TX-Color);
      }
    }
  }
  #Con {
    span {
      color: $fail;
      &::after,
      &::before {
        visibility: hidden;
        content: '_';
      }
    }
  }
  #Xpanel {
    // width: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1em;
    border: solid 1px var(--TX-Color);
    div {
      padding: 0.5em 2em;
      label {
        margin-right: 0.25em;
      }
      input {
        border-bottom: 1px solid var(--TX-Color);
        width: 7em;
      }
    }
    button {
      padding: 0.25em;
      margin: 0.5em;
    }
  }
</style>
