<template>
  <form
    @submit.prevent
    class="">
    <input
      id="txt"
      type="text"
      disabled
      v-model="sNum" />
    <button
      v-focus
      @keypress="test($event)"
      @click="dPulse('121')"
      class="npKey"
      id="np1">
      1
    </button>
    <button
      @click="dPulse('122')"
      class="npKey"
      id="np2">
      2
    </button>
    <button
      @click="dPulse('123')"
      class="npKey"
      id="np3">
      3
    </button>
    <button
      @click="dPulse('124')"
      class="npKey"
      id="np4">
      4
    </button>
    <button
      @click="dPulse('125')"
      class="npKey"
      id="np5">
      5
    </button>
    <button
      @click="dPulse('126')"
      class="npKey"
      id="np6">
      6
    </button>
    <button
      @click="dPulse('127')"
      class="npKey"
      id="np7">
      7
    </button>
    <button
      @click="dPulse('128')"
      class="npKey"
      id="np8">
      8
    </button>
    <button
      @click="dPulse('129')"
      class="npKey"
      id="np9">
      9
    </button>
    <button
      @click="dPulse('131')"
      class="npKey"
      id="np10">
      *
    </button>
    <button
      @click="dPulse('130')"
      class="npKey"
      id="np11">
      0
    </button>
    <button
      @click="dPulse('132')"
      class="npKey"
      id="np12">
      #
    </button>
  </form>
</template>

<script setup>
  // imports from vue
  import { computed, ref } from 'vue'

  // import Crestron Logic
  import { useCrestronFB } from '../../use/useCrestronFB'
  import { useCrestronAct } from '../../use/useCrestronAct'

  // use Crestron logic
  const { stringFB: numDial } = useCrestronFB('10'),
    { dPulse } = useCrestronAct(),
    test = e => {
      console.log(e.keyCode)
      console.log(e.key)
    }

  // formate dail string for display
  const sNum = computed(() => {
    return numDial.value.replace(/^(.{3})(.{3})(.{3}(.*))$/, '$1 $2 $3 ')
  })
  const vFocus = {
    mounted: el => el.focus(),
  }
</script>

<style lang="scss" scoped>
  form {
    width: 100%;
    padding: 1em;
    height: 100%;
    display: grid;
    grid-template-areas:
      'txt txt txt'
      'np1 np2 np3'
      'np4 np5 np6'
      'np7 np8 np9'
      'npSt np0 npHa';
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  input,
  button {
    border: solid 1px;
    border-color: var(--TX-Color);
    border-radius: 0.2em;

    &.npKey {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
    &#txt {
      text-align: center;
      grid-area: txt;
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }
    &#np1 {
      grid-area: np1;
    }
    &#np2 {
      grid-area: np2;
    }
    &#np3 {
      grid-area: np3;
    }
    &#np4 {
      grid-area: np4;
    }
    &#np5 {
      grid-area: np5;
    }
    &#np6 {
      grid-area: np6;
    }
    &#np7 {
      grid-area: np7;
    }
    &#np8 {
      grid-area: np8;
    }
    &#np9 {
      grid-area: np9;
    }
    &#np12 {
      border-bottom-right-radius: 0.5em;
    }
    &#np11 {
      grid-area: np0;
    }
    &#np10 {
      border-bottom-left-radius: 0.5em;
      grid-area: npSt;
    }
  }
</style>
