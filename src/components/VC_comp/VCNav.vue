<template>
  <nav class="">
    <button
      @click="dPulse('34')"
      :class="{ active: dialFb }">
      <h5>Manual Dial</h5>
    </button>
    <!-- <button
      v-if="false"
      @click="navClicked(2)"
      :class="{ active: activeNav === 2 }">
      <h5>Adderess Book</h5>
    </button> -->
    <button
      @click="dPulse('36')"
      :class="{ active: vcCamsFB }">
      <h5>Cameras</h5>
    </button>
    <button
      @click="dPulse('37')"
      :class="{ active: vcContentFB }">
      <h5>Content Send</h5>
    </button>
    <button
      @click="dPulse('39')"
      :class="{ active: vcPreFB }">
      <h5>Advanced Preview</h5>
    </button>
  </nav>
  <button
    id="mic"
    :class="{ muted: vcMuteFB }"
    @click="dPulse('96')">
    <font-awesome-icon
      v-if="!vcMuteFB"
      :icon="['fas', 'microphone']" />
    <font-awesome-icon
      v-if="vcMuteFB"
      :icon="['fas', 'microphone-slash']" />
    <h5>Mic Mute</h5>
  </button>
</template>

<script setup>
  // import from vue
  import { ref } from 'vue'

  //import Crestron function
  import { useCrestronAct } from '../../use/useCrestronAct'
  import { useCrestronFB } from '../../use/useCrestronFB'

  const { dPulse } = useCrestronAct(),
    { digFB: dialFb } = useCrestronFB('34'),
    { digFB: vcContentFB } = useCrestronFB('37'),
    { digFB: vcCamsFB } = useCrestronFB('36'),
    { digFB: vcPreFB } = useCrestronFB('39'),
    { digFB: vcMuteFB } = useCrestronFB('96')
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';

  nav {
    height: 75%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0.5em 0;
    button:active {
      background: $PMCC-Grad;
      color: $light;
    }
    button:first-child {
      border-top-right-radius: 0.5em;
      border-top-left-radius: 0.5em;
    }
    button:last-child {
      border-bottom-right-radius: 0.5em;
      border-bottom-left-radius: 0.5em;
    }
  }
  h3 {
    padding: 0.5em 0;
  }

  button {
    height: 25%;
    border: solid 1px;
    border-color: var(--TX-Color);

    border-radius: 0.2em;
    padding: 1px 0.75px;
    margin: 1px 0.5rem;
    @media screen and (min-width: 641px) {
      margin: 1px 1rem;
      padding: 1em 0.75em;
      svg {
        font-size: 2em;
      }
      h5 {
        font-size: 1em;
      }
    }
    &.active {
      background: $PMCC-Grad;
      color: $light;
    }
  }
  #mic {
    margin-top: auto;
    margin-bottom: 0.5em;
    border-radius: 0.5em;
    height: auto;
    &.muted {
      background: $fail;
    }
  }
</style>
