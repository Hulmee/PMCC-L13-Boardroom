<template>
  <h3>Lights</h3>
  <div class="btns">
    <button
      @click="lightClicked(4)"
      :class="{ active: activeLight === 4 }">
      <font-awesome-icon icon="fa-solid fa-lightbulb" />
      <h5>High</h5>
    </button>
    <button
      @click="lightClicked(3)"
      :class="{ active: activeLight === 3 }">
      <font-awesome-icon icon="fa-solid fa-lightbulb" />
      <h5>Low</h5>
    </button>
    <button
      @click="lightClicked(2)"
      :class="{ active: activeLight === 2 }">
      <font-awesome-icon icon="fa-solid fa-lightbulb" />
      <h5>Present</h5>
    </button>
    <button
      @click="lightClicked(1)"
      :class="{ active: activeLight === 1 }">
      <font-awesome-icon icon="fa-regular fa-lightbulb" />
      <h5>Off</h5>
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const activeLight = ref(1),
    lightClicked = n => {
      activeLight.value = n
    }
</script>

<style lang="scss" scoped>
  @import '../assets/colors';

  .btns {
    height: 85%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0.5em 0;

    button {
      height: 25%;
      border: solid 1px;
      border-color: var(--TX-Color);
      border-radius: 0.2em;
      padding: 1px 0.75px;
      margin: 1px 0.5rem;
      @media screen and (min-width: 641px) {
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
  h3 {
    padding: 0.5em 0;
    text-align: center;
  }
</style>
