<template>
  <main class="">
    <h1>What would you like to do today</h1>

    <div class="btns">
      <button>
        <font-awesome-icon
          icon="fa-solid fa-display"
          size="xl" />
        <h4 class="container">In room Presentation</h4>
      </button>
      <button>
        <font-awesome-icon
          icon="fa-solid fa-users"
          size="xl" />
        <h4 class="container">
          a meeting with <br />
          Zoom / Teams
        </h4>
      </button>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import '../assets/colors';
  main {
    // z-index: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      margin: auto;
    }
    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75%;
      button {
        min-height: 25%;
        max-height: 100px;
        // min-width: 200px;
        width: 200px;

        justify-content: center;
        align-items: center;
        display: grid;
        grid-template-areas:
          'icon'
          'lab';
        grid-template-rows: 1fr 1fr;
        border: solid 1px;
        border-color: var(--TX-Color);
        border-radius: 0.2em;
        padding: 0.5em;
        margin: 0.5rem 1px;
        @media screen and (min-width: 641px) {
          padding: 1em 0.75em;
          svg {
            font-size: 2em;
          }
        }
        &:first-child {
          border-top-left-radius: 0.5em;
          border-bottom-left-radius: 0.5em;
        }
        &:last-child {
          border-top-right-radius: 0.5em;
          border-bottom-right-radius: 0.5em;
        }
        &:active {
          background: $PMCC-Grad;
          color: $light;
        }
        h4 {
          margin: 1em 0;
          grid-area: lab;
          min-height: 50px;
        }
        svg {
          margin-top: 0.5em;
          grid: icon;
          width: 100%;
        }
      }
    }
  }
</style>
