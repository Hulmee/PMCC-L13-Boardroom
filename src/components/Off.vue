<template>
  <section>
    <aside id="lhs">
      <Blinds />
    </aside>
    <main @click="$emit('pwrOn')">
      <h1>Welcome to the Boardroom</h1>
      <h3>System ready. Touch screen to start.</h3>
      <progress
        value="32767"
        max="65535"></progress>
    </main>
    <aside id="rhs">
      <Lights />
    </aside>
  </section>
</template>

<script setup>
  import Lights from './Lights.vue'
  import Blinds from './Blinds.vue'
</script>

<style lang="scss" scoped>
  @import '../assets/colors';

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

  progress {
    border-radius: 7px;
    width: 75%;
    height: 1.5em;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }
  progress::-webkit-progress-bar {
    border-radius: 7px;
  }
  progress::-webkit-progress-value {
    background: $PMCC-Grad;
    border-radius: 7px;
  }
</style>
