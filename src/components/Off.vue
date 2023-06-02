<template>
  <section>
    <aside id="lhs">
      <Blinds />
    </aside>
    <main @click="$emit('pwrOn')">
      <h1>Welcome to the Boardroom</h1>
      <h3>What would you like to do today.</h3>
      <small>Device ip: {{ ipAdd }}</small>
      <small>Device MAC: {{ macAdd }}</small>

      <CoffeLoad
        id="coffee"
        v-if="loading" />

      <div
        class="btns"
        v-if="!loading">
        <button>
          <font-awesome-icon
            icon="fa-solid fa-display"
            size="xl" />
          <h4 class="container">In room Presentation</h4>
        </button>
        <button>
          <font-awesome-icon
            icon="fa-solid fa-users"
            size="xl" />
          <h4 class="container">
            a meeting with <br />
            Zoom / Teams
          </h4>
        </button>
      </div>
    </main>
    <aside id="rhs">
      <Lights />
    </aside>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  import Lights from './Lights.vue'
  import Blinds from './Blinds.vue'
  import CoffeLoad from './Reuse/CoffeLoad.vue'

  import { useCrestronFB } from '../use/useCrestronFB'

  const ipAdd = ref(''),
    // macAdd = ref(''),
    { stringFB: macAdd } = useCrestronFB('Csig.MAC_Address_fb'),
    loading = ref(true)

  CrComLib.subscribeState('s', 'Csig.Ip_Address_fb', s => {
    ipAdd.value = s
  })
  // CrComLib.subscribeState('s', 'Csig.MAC_Address_fb', s => {
  //   macAdd.value = s
  // })
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
