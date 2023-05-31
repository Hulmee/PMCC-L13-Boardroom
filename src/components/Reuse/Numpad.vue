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
      class="npKey"
      id="np1">
      1
    </button>
    <button
      class="npKey"
      id="np2">
      2
    </button>
    <button
      class="npKey"
      id="np3">
      3
    </button>
    <button
      class="npKey"
      id="np4">
      4
    </button>
    <button
      class="npKey"
      id="np5">
      5
    </button>
    <button
      class="npKey"
      id="np6">
      6
    </button>
    <button
      class="npKey"
      id="np7">
      7
    </button>
    <button
      class="npKey"
      id="np8">
      8
    </button>
    <button
      class="npKey"
      id="np9">
      9
    </button>
    <button
      class="npKey"
      id="np10">
      *
    </button>
    <button
      class="npKey"
      id="np11">
      0
    </button>
    <button
      class="npKey"
      id="np12">
      #
    </button>
  </form>
</template>

<script setup>
  import { computed, ref } from 'vue'

  const numDial = ref('97125270288@zoomcrc.com')
  const sNum = computed(() => {
    return numDial.value.replace(/^(.{3})(.{3})(.{3}(.*))$/, '$1 $2 $3 ')
  })
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
