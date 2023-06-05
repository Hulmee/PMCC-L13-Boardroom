<template>
  <section
    id="mics"
    class="">
    <div
      id="handheld"
      class="mic">
      <h3>Handheld Mic</h3>
      <button
        @mousedown="dHoldStart('54')"
        @mouseup="dHoldEnd('54')"
        class="">
        <font-awesome-icon icon="fa-solid fa-volume-high" />
      </button>
      <div class="barcontainer">
        <div
          id="handheldBar"
          class="bar"
          :class="{ muted: hhMute }"></div>
      </div>

      <button
        @mousedown="dHoldStart('55')"
        @mouseup="dHoldEnd('55')">
        <font-awesome-icon icon="fa-solid fa-volume-low" />
      </button>
      <button
        @click="dPulse('56')"
        :class="{ muted: hhMute }">
        <font-awesome-icon icon="fa-solid fa-volume-xmark" />
      </button>
    </div>
    <div
      id="Lapel"
      class="mic">
      <h3>Lapel Mic</h3>
      <button
        @mousedown="dHoldStart('57')"
        @mouseup="dHoldEnd('57')"
        class="">
        <font-awesome-icon icon="fa-solid fa-volume-high" />
      </button>
      <div class="barcontainer">
        <div
          id="lapelBar"
          class="bar"
          :class="{ muted: lpMute }"></div>
      </div>

      <button
        @mousedown="dHoldStart('58')"
        @mouseup="dHoldEnd('58')">
        <font-awesome-icon icon="fa-solid fa-volume-low" />
      </button>
      <button
        @click="dPulse('59')"
        :class="{ muted: lpMute }">
        <font-awesome-icon icon="fa-solid fa-volume-xmark" />
      </button>
    </div>
  </section>
</template>

<script setup>
  // imports from vue
  import { computed, ref } from 'vue'

  // imports Crestron Logic
  import { useCrestronFB } from '../use/useCrestronFB'
  import { useCrestronAct } from '../use/useCrestronAct'

  // use Cretron Actions
  const { dPulse, dHoldStart, dHoldEnd } = useCrestronAct()

  // register handheld Feed back
  const { anFB: handheldVol } = useCrestronFB('3'),
    { digFB: hhMute } = useCrestronFB('56'),
    handVolCSS = computed(() => {
      return `${(handheldVol.value / 65535) * 100}%`
    })

  // register lapel Feed back
  const { anFB: lapelVol } = useCrestronFB('4'),
    { digFB: lpMute } = useCrestronFB('59'),
    lapelVolCSS = computed(() => {
      return `${(lapelVol.value / 65535) * 100}%`
    })
</script>

<style lang="scss" scoped>
  @import '../assets/colors';
  #mics {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .mic {
      height: 100%;
      min-width: 150px;
      width: fit-content;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: 1em;
      margin: 2em;
    }
  }
  .barcontainer {
    height: 40%;
    width: 3em;
    margin: 1em auto;
    display: flex;
    border: solid 1px;
    border-color: var(--TX-Color);
    border-radius: 0.5em;

    .bar {
      background: $PMCC-Grad-vert;
      width: 100%;
      border-radius: 0.5em;
      margin-top: auto;
      &.muted {
        background: $fail;
      }
    }
  }
  .muted {
    background: $fail;
  }
  #handheldBar {
    height: v-bind(handVolCSS);
  }
  #lapelBar {
    height: v-bind(lapelVolCSS);
  }
  button {
    height: 5em;
    width: 5em;
    margin: 0.25em auto;
    border-radius: 0.5em;
    @media screen and (max-width: 641px) {
      height: 2.5em;
      width: 2.5em;
    }
  }
</style>
