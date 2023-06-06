<template>
  <section id="wrapper">
    <div id="mode">
      <VCMain v-if="VCMainFB" />
      <PresAV
        class="marg-LR"
        v-if="presFB" />
      <Room v-if="roomFB" />
      <Microphone v-if="micFB" />
    </div>

    <aside id="rhs">
      <button
        @touchstart="dHoldStart($event, '51')"
        @touchend="dHoldEnd($event, '51')"
        @mousedown="dHoldStart($event, '51')"
        @mouseup="dHoldEnd($event, '51')"
        class="">
        <font-awesome-icon icon="fa-solid fa-volume-high" />
      </button>
      <div class="barcontainer">
        <div
          class="bar"
          :class="{ muted: isMuted }"></div>
      </div>

      <button
        @touchstart="dHoldStart($event, '52')"
        @touchend="dHoldEnd($event, '52')"
        @mousedown="dHoldStart($event, '52')"
        @mouseup="dHoldEnd($event, '52')">
        <font-awesome-icon icon="fa-solid fa-volume-low" />
      </button>
      <button
        @click="dPulse('53')"
        :class="{ mute: isMuted }">
        <font-awesome-icon icon="fa-solid fa-volume-xmark" />
      </button>
    </aside>
  </section>
</template>

<script setup>
  // vue imports
  import { computed, ref } from 'vue'

  // import componets/pages
  import VCMain from './VCMain.vue'
  import PresAV from './Present/PresAV.vue'
  import Room from './Room.vue'
  import Microphone from './Microphone.vue'

  // import Crestron functions
  import { useCrestronFB } from '../use/useCrestronFB'
  import { useCrestronAct } from '../use/useCrestronAct'

  // use Crestron functions
  const { dPulse, dHoldStart, dHoldEnd } = useCrestronAct(),
    { digFB: vcDailFB } = useCrestronFB('34'),
    { digFB: vcContentFB } = useCrestronFB('37'),
    { digFB: vcCamsFB } = useCrestronFB('36'),
    { digFB: vcPreFB } = useCrestronFB('39'),
    { anFB: volFb } = useCrestronFB('2'),
    { digFB: presFB } = useCrestronFB('23'),
    { digFB: roomFB } = useCrestronFB('24'),
    { digFB: isMuted } = useCrestronFB('53'),
    { digFB: micFB } = useCrestronFB('26')

  // computed refs
  const VCMainFB = computed(
      () =>
        vcDailFB.value || vcContentFB.value || vcCamsFB.value || vcPreFB.value
    ),
    volCSS = computed(() => {
      return `${(volFb.value / 65535) * 100}%`
    })
</script>

<style lang="scss" scoped>
  @import '../assets/colors';

  #wrapper {
    grid-area: sec;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: ' main rhs';
    @media screen and (max-width: 641px) {
      grid-template-columns: 1fr 5em;
    }

    grid-template-columns: 1fr 10em;

    #rhs {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    #rhs {
      border-left: solid 0.5px $light;
      border-color: var(--TX-Color);
      padding: 1em;

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
    }
  }
  .mute {
    background: $fail;
  }

  .barcontainer {
    height: 50%;
    width: 3em;
    margin: 1em auto;
    display: flex;
    border: solid 1px;
    border-color: var(--TX-Color);
    border-radius: 0.5em;

    .bar {
      background: $PMCC-Grad-vert;
      width: 100%;
      height: v-bind(volCSS);
      border-radius: 0.5em;
      margin-top: auto;

      &.muted {
        background: $fail;
      }
    }
  }
</style>
