<template>
  <section id="pre-route">
    <div id="pre-source1">
      <button
        id="PMCC"
        class="">
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>PMCC PC</h3>
      </button>
      <button id="UoM">
        <font-awesome-icon :icon="['fas', 'computer']" />
        <h3>UoM PC</h3>
      </button>
      <button
        id="clichshare"
        class="active">
        <font-awesome-icon :icon="['fab', 'chromecast']" />
        <h3>Barco Clickshare</h3>
      </button>
    </div>
    <div id="pre-source2">
      <button id="table1">
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Front Table Input</h3>
      </button>
      <button id="table2">
        <font-awesome-icon :icon="['fas', 'laptop']" />
        <h3>Rear Table Input</h3>
      </button>
    </div>
    <div id="pre-output">
      <button>
        <h3>Left LCD</h3>
      </button>
      <button>
        <h3>Right LCD</h3>
      </button>
      <button>
        <h3>Table Monitors</h3>
      </button>
    </div>
  </section>
</template>

<script setup>
  //
</script>

<style lang="scss" scoped>
  #pre-route {
    padding: 0 1.5em;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 0.5fr repeat(6, 1fr);

    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 641px) {
      grid-template-rows: 0.5em repeat(5, 1fr) 0.5em;
    }
    #pre-source1 {
      display: flex;
      flex-direction: column;
      grid-row: 2/7;
      grid-column: 1/2;
      button {
        height: 30%;
      }
      :first-child {
        margin-top: auto;
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
      }
      :last-child {
        margin-bottom: auto;
        border-bottom-left-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
      }
    }
    #pre-source2 {
      display: flex;
      flex-direction: column;

      grid-row: 2/7;
      grid-column: 2/3;
      button {
        height: 30%;
      }
      :first-child {
        margin-top: auto;
        border-top-right-radius: 0.5em;
      }
      :last-child {
        margin-bottom: auto;
        border-bottom-right-radius: 0.5em;
      }
    }
    #pre-output {
      display: flex;
      flex-direction: column;
      grid-row: 2/7;
      grid-column: 4/5;
      button {
        height: 30%;
      }
      :first-child {
        margin-top: auto;
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
      }
      :last-child {
        margin-bottom: auto;
        border-bottom-left-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
      }
    }
  }
</style>
