<template>
  <section id="preview">
    <div id="source">
      <button id="PMCC">
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>PMCC PC</h3>
      </button>
      <button id="UoM">
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>UoM PC</h3>
      </button>
      <button id="table1">
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Front Table Input</h3>
      </button>
      <button id="table2">
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Rear Table Input</h3>
      </button>
      <button id="clichshare">
        <font-awesome-icon :icon="['fab', 'chromecast']" />
        <h3>Barco Clickshare</h3>
      </button>
      <button id="confPri">
        <font-awesome-icon :icon="['fas', 'users']" />
        <h3>Confrence Primary</h3>
      </button>
      <button id="confSec">
        <font-awesome-icon :icon="['fas', 'users']" />
        <h4>Confrence Secondary</h4>
      </button>
      <button id="noCon">
        <h4>No Content</h4>
      </button>
    </div>
    <div id="outputs">
      <button>Left LCD</button>
      <button>Right LCD</button>
      <button>Table Monitors</button>
    </div>
  </section>
</template>

<script setup>
  //
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';
  #preview {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(4, 1fr);
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
      }
      #UoM {
        grid-area: UoM;
      }
      #table1 {
        grid-area: FT;
      }
      #table2 {
        grid-area: RT;
      }
      #clichshare {
        grid-area: CS;
      }
      #confPri {
        grid-area: C1;
      }
      #confSec {
        grid-area: C2;
      }
      #noCon {
        grid-area: noCon;
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
      }
    }
  }
</style>
