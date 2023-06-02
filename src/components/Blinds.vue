<template>
  <h3>Blinds</h3>
  <div class="btns">
    <button>
      <font-awesome-icon icon="fa-solid fa-caret-up" />
      <h5>Raise Blinds</h5>
    </button>
    <button>
      <font-awesome-icon icon="fa-regular fa-square" />
      <h5>Stop Blinds</h5>
    </button>
    <button>
      <font-awesome-icon icon="fa-solid fa-caret-down" />
      <h5>Lower Blinds</h5>
    </button>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  @import '../assets/colors';
  .btns {
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 0.5em 0;

    button {
      height: 30%;
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
      &:active {
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
