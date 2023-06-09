<template>
  <section>
    <aside id="lhs">
      <Blinds />
    </aside>
    <main @click="$emit('pwrOn')">
      <h1>Welcome to the Boardroom</h1>
      <h3>{{ subHeading }}</h3>

      <CoffeLoad
        id="coffee"
        v-if="loading" />

      <div
        class="btns"
        v-if="!loading">
        <button @click="dPulse('31')">
          <font-awesome-icon
            icon="fa-solid fa-display"
            size="xl" />
          <h4 class="container">In room Presentation</h4>
        </button>
        <button @click="dPulse('32')">
          <font-awesome-icon
            icon="fa-solid fa-users"
            size="xl" />
          <h4 class="container">
            a meeting with <br />
            Zoom / Teams
          </h4>
        </button>
      </div>
      <div v-if="!isWebXpanel">
        <small>Device ip: {{ ipAdd }}</small>
        |
        <small>Device MAC: {{ macAdd }}</small>
      </div>
    </main>
    <aside id="rhs">
      <Lights />
    </aside>
  </section>
</template>

<script setup>
  // import from vue
  import { ref } from 'vue'

  // import components/pages
  import Lights from './Reuse/Lights.vue'
  import Blinds from './Reuse/Blinds.vue'
  import CoffeLoad from './Reuse/CoffeLoad.vue'

  // import Crestron Logic
  import { useCrestronFB } from '../use/useCrestronFB'
  import { useCrestronAct } from '../use/useCrestronAct'

  // use Crestron logic
  const { stringFB: macAdd } = useCrestronFB('Csig.MAC_Address_fb'),
    { stringFB: ipAdd } = useCrestronFB('Csig.Ip_Address_fb'),
    { stringFB: subHeading } = useCrestronFB('1'),
    { digFB: loading } = useCrestronFB('13'),
    { dPulse } = useCrestronAct(),
    isWebXpanel = ref(WebXpanel.isActive)
  // if (WebXpanel.isActive) isWebXpanel.value = true
  // if (!WebXpanel.isActive) isWebXpanel.value = false
  console.log(isWebXpanel.value)
</script>

<style lang="scss" scoped>
  @import '../assets/colors';
  #coffee {
    margin-top: 10em;
  }
  section {
    grid-area: sec;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: 'lhs  main rhs';
    @media screen and (max-width: 641px) {
      grid-template-columns: 7em 1fr 7em;
    }
    grid-template-columns: 12em 1fr 12em;
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      * {
        margin-top: 1em;
      }
      *:last-child {
        margin: auto 0;
      }
    }
    #lhs,
    #rhs {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    #rhs {
      border-left: solid 0.5px;
      border-color: var(--TX-Color);
    }
    #lhs {
      border-right: solid 0.5px;
      border-color: var(--TX-Color);
      padding-bottom: 1em;
    }
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75%;
    button {
      min-height: 25%;
      max-height: 100px;
      // min-width: 200px;
      width: 200px;

      justify-content: center;
      align-items: center;
      display: grid;
      grid-template-areas:
        'icon'
        'lab';
      grid-template-rows: 1fr 1fr;
      border: solid 1px;
      border-color: var(--TX-Color);
      border-radius: 0.2em;
      padding: 0.5em;
      margin: 0.5rem 1px;
      @media screen and (min-width: 641px) {
        padding: 1em 0.75em;
        svg {
          font-size: 2em;
        }
      }
      &:first-child {
        border-top-left-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
      }
      &:last-child {
        border-top-right-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
      }
      &:active {
        background: $PMCC-Grad;
        color: $light;
      }
      h4 {
        margin: 1em 0;
        grid-area: lab;
        min-height: 50px;
      }
      svg {
        margin-top: 0.5em;
        grid: icon;
        width: 100%;
      }
    }
  }
</style>
