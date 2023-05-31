<template>
  <section id="Cams">
    <div id="camSel">
      <button class="active">
        <h3>Front Camera</h3>
      </button>
      <button>
        <h3>Rear Camera</h3>
      </button>
    </div>
    <h3 id="ptTitle">Pan & Tilt</h3>
    <div
      id="panTilt"
      class="">
      <button id="Up">
        <font-awesome-icon :icon="['fas', 'caret-up']" />
      </button>
      <button id="Left">
        <font-awesome-icon :icon="['fas', 'caret-left']" />
      </button>
      <button id="Right">
        <font-awesome-icon :icon="['fas', 'caret-right']" />
      </button>
      <button id="Dwn">
        <font-awesome-icon :icon="['fas', 'caret-down']" />
      </button>
    </div>
    <h3 id="zTitle">Zoom</h3>
    <div id="zoom">
      <button>
        <font-awesome-icon :icon="['fas', 'magnifying-glass-plus']" />
      </button>
      <button>
        <font-awesome-icon :icon="['fas', 'magnifying-glass-minus']" />
      </button>
    </div>
    <div
      id="presets"
      class="">
      <h3>Presets</h3>
      <div id="preBtns">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
    </div>
  </section>
</template>

<script setup>
  //
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';
  #Cams {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 2em repeat(6, 1fr) 1.5em;
    @media screen and (max-width: 641px) {
      grid-template-rows: 2em repeat(3, 1fr) 1em 1fr 1fr 0.5em;
    }
    grid-template-columns: repeat(4, 1fr);
  }
  #camSel {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 2/5;
    margin: 2em 0;
    button {
      height: 100%;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &.active {
        background: $PMCC-Grad;
      }
      &:first-child {
        border-top-right-radius: 0.5em;
        border-top-left-radius: 0.5em;
      }
      &:last-child {
        border-bottom-right-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
      }
      @media screen and (max-width: 641px) {
        h3 {
          font-size: 0.75em;
        }
      }
    }
  }
  #ptTitle {
    grid-column: 2/4;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #panTilt {
    grid-row: 2/5;
    grid-column: 2/4;
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100%;

    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(5, 1fr);
    button {
      width: 75%;
      aspect-ratio: 1;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      // @media screen and (min-width: 641px) {
      //   svg {
      //     font-size: 2em;
      //   }
      // }
    }
    #Up {
      grid-column: 3/4;
      grid-row: 1/2;
    }
    #Left {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    #Right {
      grid-column: 4/5;
      grid-row: 2/3;
    }
    #Dwn {
      grid-column: 3/4;
      grid-row: 3/4;
    }
  }
  #zTitle {
    // grid-column: 5/6;
    grid-column: 4/5;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #zoom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // grid-column: 5/6;
    grid-column: 4/5;

    grid-row: 2/5;
    margin: 2em 0;

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
      // @media screen and (min-width: 641px) {
      //   svg {
      //     font-size: 2em;
      //   }
      // }
    }
  }
  #presets {
    grid-column: 2/4;
    grid-row: 6/8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      height: 2em;
    }
    #preBtns {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr 1fr;
      height: 100%;
      width: 100%;
      button {
        text-align: center;
      }
      :first-child {
        border-top-left-radius: 0.5em;
      }
      :nth-child(3) {
        border-top-right-radius: 0.5em;
      }
      :nth-child(4) {
        border-bottom-left-radius: 0.5em;
      }
      :last-child {
        border-bottom-right-radius: 0.5em;
      }
      @media screen and (max-width: 641px) {
        // h3 {
        font-size: 0.75em;
        // }
      }
    }
  }
</style>
