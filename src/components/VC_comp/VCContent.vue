<template>
  <section id="vcCon">
    <div
      id="contBts"
      class="">
      <button
        @click="dPulse('111')"
        :class="{ active: pmccFB }">
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>PMCC PC</h3>
      </button>
      <button
        @click="dPulse('112')"
        :class="{ active: uomFB }">
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>UoM PC</h3>
      </button>
      <button
        @click="dPulse('114')"
        :class="{ active: frontFB }">
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Front Table Input</h3>
      </button>
      <button
        @click="dPulse('115')"
        :class="{ active: rearFB }">
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Rear Table Input</h3>
      </button>
      <button
        @click="dPulse('113')"
        :class="{ active: clickFB }">
        <font-awesome-icon :icon="['fab', 'chromecast']" />
        <h3>Barco Clickshare</h3>
      </button>
      <button
        @click="dPulse('116')"
        :class="{ active: noneFB }">
        <h3>No Content</h3>
      </button>
    </div>
    <button
      id="layout"
      @click="dPulse('105')"
      :class="{ active: layFB }">
      <h3>VC Layout</h3>
    </button>
  </section>
</template>

<script setup>
  // import Crestron Logic
  import { useCrestronFB } from '../../use/useCrestronFB'
  import { useCrestronAct } from '../../use/useCrestronAct'

  // use Crestron logic
  const { dPulse } = useCrestronAct(),
    { digFB: pmccFB } = useCrestronFB('111'),
    { digFB: uomFB } = useCrestronFB('112'),
    { digFB: frontFB } = useCrestronFB('114'),
    { digFB: rearFB } = useCrestronFB('115'),
    { digFB: clickFB } = useCrestronFB('113'),
    { digFB: noneFB } = useCrestronFB('116'),
    { digFB: layFB } = useCrestronFB('105')
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';

  #vcCon {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(5, 1fr);
    #contBts {
      grid-column: 2/5;
      grid-row: 2/6;
      display: grid;
      grid-template-columns: 1fr 1fr;
      //   padding: 2em;
      button {
        &:first-child {
          border-top-left-radius: 0.5em;
        }
        &:nth-child(2) {
          border-top-right-radius: 0.5em;
        }
        &:nth-last-child(2) {
          border-bottom-left-radius: 0.5em;
        }
        &:last-child {
          border-bottom-right-radius: 0.5em;
        }
        &.active {
          background: $PMCC-Grad;
        }
        @media screen and (min-width: 641px) {
          svg {
            font-size: 2em;
          }
        }
        @media screen and (max-width: 641px) {
          h3 {
            font-size: 0.5em;
          }
        }
        h3 {
          margin: 0.5em;
        }
      }
    }
    #layout {
      grid-column: 3/4;
      grid-row: 7/8;
      border-radius: 0.5em;
      @media screen and (max-width: 641px) {
        h3 {
          font-size: 0.5em;
        }
      }
    }
  }
</style>
