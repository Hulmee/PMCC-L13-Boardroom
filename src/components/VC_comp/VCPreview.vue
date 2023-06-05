<template>
  <section id="preview">
    <div id="source">
      <button
        id="PMCC"
        @click="dPulse('330')"
        :class="{ active: pmccFB }">
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>PMCC PC</h3>
      </button>
      <button
        id="UoM"
        @click="dPulse('331')"
        :class="{ active: uomFB }">
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>UoM PC</h3>
      </button>
      <button
        id="table1"
        @click="dPulse('332')"
        :class="{ active: frontFB }">
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Front Table Input</h3>
      </button>
      <button
        id="table2"
        @click="dPulse('333')"
        :class="{ active: rearFB }">
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Rear Table Input</h3>
      </button>
      <button
        id="clichshare"
        @click="dPulse('334')"
        :class="{ active: clickFB }">
        <font-awesome-icon :icon="['fab', 'chromecast']" />
        <h3>Barco Clickshare</h3>
      </button>
      <button
        id="confPri"
        @click="dPulse('335')"
        :class="{ active: vcPriFB }">
        <font-awesome-icon :icon="['fas', 'users']" />
        <h3>Confrence Primary</h3>
      </button>
      <button
        id="confSec"
        @click="dPulse('336')"
        :class="{ active: vcSecFB }">
        <font-awesome-icon :icon="['fas', 'users']" />
        <h3>Confrence Secondary</h3>
      </button>
      <button
        id="noCon"
        @click="dPulse('337')"
        :class="{ active: blankFB }">
        <h3>No Content</h3>
      </button>
    </div>
    <div id="outputs">
      <button
        @click="dPulse('340')"
        :class="{ active: leftFB }">
        <h3>Left LCD</h3>
      </button>
      <button
        @click="dPulse('341')"
        :class="{ active: rightFB }">
        <h3>Right LCD</h3>
      </button>
      <button
        @click="dPulse('342')"
        :class="{ active: tableFB }">
        <h3>Table Monitors</h3>
      </button>
    </div>
  </section>
</template>

<script setup>
  // import Crestron Logic
  import { useCrestronFB } from '../../use/useCrestronFB'
  import { useCrestronAct } from '../../use/useCrestronAct'

  // use Crestron logic
  const { dPulse } = useCrestronAct(),
    { digFB: pmccFB } = useCrestronFB('330'),
    { digFB: uomFB } = useCrestronFB('331'),
    { digFB: frontFB } = useCrestronFB('332'),
    { digFB: rearFB } = useCrestronFB('333'),
    { digFB: clickFB } = useCrestronFB('334'),
    { digFB: vcPriFB } = useCrestronFB('335'),
    { digFB: vcSecFB } = useCrestronFB('336'),
    { digFB: blankFB } = useCrestronFB('337'),
    { digFB: leftFB } = useCrestronFB('340'),
    { digFB: rightFB } = useCrestronFB('341'),
    { digFB: tableFB } = useCrestronFB('342')
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';
  #preview {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 0.5fr repeat(5, 1fr);

    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 641px) {
      grid-template-rows: 0.5em repeat(4, 1fr) 0.5em;
    }
    #source {
      grid-row: 2/6;
      grid-column: 1/3;
      display: grid;
      grid-template-areas:
        'pmcc t0'
        'UoM C1'
        'CS C2'
        'FT noCon'
        'RT b0';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(5, 1fr);
      #PMCC {
        grid-area: pmcc;
        border-top-right-radius: 0.5em;
        border-top-left-radius: 0.5em;
      }
      #UoM {
        grid-area: UoM;
      }
      #table1 {
        grid-area: FT;
      }
      #table2 {
        grid-area: RT;
        border-bottom-right-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
      }
      #clichshare {
        grid-area: CS;
      }
      #confPri {
        grid-area: C1;
        border-top-right-radius: 0.5em;
      }
      #confSec {
        grid-area: C2;
      }
      #noCon {
        grid-area: noCon;
        border-bottom-right-radius: 0.5em;
      }
      @media screen and (max-width: 641px) {
        button {
          h3 {
            font-size: 0.75em;
          }
        }
      }
    }
    #outputs {
      grid-row: 2/6;
      grid-column: 4/5;
      display: flex;
      flex-direction: column;
      button {
        height: 100%;
        &:first-child {
          border-top-left-radius: 0.5em;
          border-top-right-radius: 0.5em;
        }
        &:last-child {
          border-bottom-left-radius: 0.5em;
          border-bottom-right-radius: 0.5em;
        }
        @media screen and (max-width: 641px) {
          h3 {
            font-size: 0.75em;
          }
        }
      }
    }
  }
  button {
    text-align: center;
  }
</style>
