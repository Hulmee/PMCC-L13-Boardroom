<template>
  <section
    id="onHead"
    class="">
    <nav class="">
      <button
        :class="{ active: confFB }"
        @click="dPulse('27')">
        <font-awesome-icon :icon="['fas', 'users']" />
        <h3>Conference</h3>
      </button>
      <button
        :class="{ active: persFB }"
        @click="dPulse('23')">
        <font-awesome-icon :icon="['fas', 'person-chalkboard']" />
        <h3>Presentation</h3>
      </button>
      <button
        @click="dPulse('26')"
        :class="{ active: micsFB }">
        <font-awesome-icon :icon="['fas', 'microphone']" />
        <h3>Microphones</h3>
      </button>
      <button
        @click="dPulse('24')"
        :class="{ active: roomFB }">
        <font-awesome-icon
          :icon="['fas', 'sliders']"
          rotation="90" />
        <h3>Room</h3>
      </button>
    </nav>
    <button
      @click="dPulse('22')"
      id="pwr">
      <font-awesome-icon :icon="['fas', 'power-off']" />
      <h3>power</h3>
    </button>
  </section>
</template>
<script setup>
  // import and use Crestron functions
  import { useCrestronAct } from '../use/useCrestronAct'
  import { useCrestronFB } from '../use/useCrestronFB'
  const { dPulse } = useCrestronAct(),
    { digFB: confFB } = useCrestronFB('27'),
    { digFB: persFB } = useCrestronFB('23'),
    { digFB: roomFB } = useCrestronFB('24'),
    { digFB: micsFB } = useCrestronFB('26')
</script>

<style lang="scss" scoped>
  @import '../assets/colors';

  #onHead {
    display: flex;
    color: $dark;
    width: 100%;

    nav {
      width: 100%;
      margin: 0 1em;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        height: 100%;
        width: 100%;
        border: solid 1px var(--BG-Color);
        color: var(--BG-Color);
        &:first-child {
          border-top-left-radius: 0.5em;
          border-bottom-left-radius: 0.5em;
        }
        &:last-child {
          border-top-right-radius: 0.5em;
          border-bottom-right-radius: 0.5em;
        }
        &:active {
          color: $light;
        }
        &.active {
          color: $light;
        }
      }
    }
    #pwr {
      width: 25%;
      padding: 0.25em 0.5em;
      color: $fail;
      border: solid 1px $fail;
      margin-left: auto;
      margin-right: 1em;
      border-radius: 0.5em;
      &:active {
        background: $fail;
        color: $light;
      }
    }
  }
</style>
