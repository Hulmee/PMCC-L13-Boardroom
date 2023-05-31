<template>
  <section id="vcCon">
    <div
      id="contBts"
      class="">
      <button>
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>PMCC PC</h3>
      </button>
      <button>
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>UoM PC</h3>
      </button>
      <button>
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Front Table Input</h3>
      </button>
      <button>
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Rear Table Input</h3>
      </button>
      <button>
        <font-awesome-icon :icon="['fab', 'chromecast']" />
        <h3>Barco Clickshare</h3>
      </button>
      <button class="active">
        <h3>No Content</h3>
      </button>
    </div>
    <button id="layout">
      <h3>VC Layout</h3>
    </button>
  </section>
</template>

<script setup>
  //
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
