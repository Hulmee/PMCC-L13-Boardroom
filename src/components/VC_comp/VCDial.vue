<template>
  <section
    id="manDial"
    class="">
    <div
      id="webCof"
      class="">
      <button
        @click="dPulse('75')"
        :disabled="!webCofEn">
        Dial PMCC Teams
        <small>@meet.petermac.org.au</small>
      </button>
      <button
        @click="dPulse('76')"
        :disabled="!webCofEn">
        Dial PMCC Zoom
        <small>@zoomcrc.com</small>
      </button>
      <button
        @click="dPulse('77')"
        :disabled="!webCofEn">
        Dial UoM Zoom
        <small>@zmau.us</small>
      </button>
    </div>
    <div
      id="num"
      class="container">
      <Numpad />
    </div>
    <div id="rhBtns">
      <button @click="dPulse('106')">
        <font-awesome-icon :icon="['fas', 'delete-left']" />
      </button>
      <button @click="dPulse('107')">CLEAR</button>
      <button @click="dPulse('141')">
        <font-awesome-icon icon="fa-solid fa-keyboard" />
      </button>
    </div>
    <button
      @click="dPulse('103')"
      class="container"
      id="call">
      <font-awesome-icon :icon="['fas', 'phone']" />
      <h3>call</h3>
    </button>
    <button
      @click="dPulse('104')"
      class="container"
      id="end">
      <font-awesome-icon :icon="['fas', 'phone-slash']" />
      <h3>Hang up</h3>
    </button>
  </section>
</template>

<script setup>
  // import subPages
  import Numpad from '../Reuse/Numpad.vue'
  // import Crestron Logic
  import { useCrestronFB } from '../../use/useCrestronFB'
  import { useCrestronAct } from '../../use/useCrestronAct'

  // use Crestron logic
  const { dPulse } = useCrestronAct(),
    { digFB: webCofEn } = useCrestronFB('74')
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';
  #manDial {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
  #webCof {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 3/7;
    padding: 0.25em 0 1em 0;
    button {
      height: 100%;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &:first-child {
        border-top-right-radius: 0.5em;
        border-top-left-radius: 0.5em;
      }
      &:last-child {
        border-bottom-right-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
      }
    }
  }
  #rhBtns {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-column: 4/5;
    grid-row: 3/7;
    padding: 0.25em 0 1em 0;
    button {
      height: 100%;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &:first-child {
        border-top-right-radius: 0.5em;
        border-top-left-radius: 0.5em;
        svg {
          font-size: 2em;
        }
      }
      &:last-child {
        border-bottom-right-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
        svg {
          font-size: 2em;
        }
      }
    }
  }

  #num {
    grid-column: 2/4;
    grid-row: 2/7;
  }
  #call {
    flex-direction: column;
    color: $success;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    grid-column: 2/3;
    grid-row: 7/8;
    margin: 0.25em 1px 0.25em 0.5em;
    &:active {
      background: $success;
      color: var(--TX-Color);
    }
  }
  #end {
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    flex-direction: column;
    color: $fail;
    grid-column: 3/4;
    grid-row: 7/8;
    margin: 0.25em 0.5em 0.25em 1px;
    &:active {
      background: $fail;
      color: var(--TX-Color);
    }
  }
  input {
    border: solid 1px;
    border-color: var(--TX-Color);
  }
</style>
