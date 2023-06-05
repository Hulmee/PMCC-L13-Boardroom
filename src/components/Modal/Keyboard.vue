<template>
  <div class="modal">
    <div class="modal-card">
      <div class="line line1">
        <button @click="dPulse('142')">
          <font-awesome-icon :icon="['fas', 'square-xmark']" />
        </button>
      </div>
      <div class="line line2">
        <button @click="dPulse('149')">`</button>
        <button @click="dPulse('150')">1</button>
        <button @click="dPulse('151')">2</button>
        <button @click="dPulse('152')">3</button>
        <button @click="dPulse('153')">4</button>
        <button @click="dPulse('154')">5</button>
        <button @click="dPulse('155')">6</button>
        <button @click="dPulse('156')">7</button>
        <button @click="dPulse('157')">8</button>
        <button @click="dPulse('158')">9</button>
        <button @click="dPulse('159')">0</button>
        <button @click="dPulse('160')">-</button>
        <button @click="dPulse('161')">=</button>
        <button @click="dPulse('162')">Backspace</button>
      </div>
      <div class="line line3">
        <button id="tab">TAB</button>
        <button @click="dPulse('163')">q</button>
        <button @click="dPulse('164')">w</button>
        <button @click="dPulse('165')">e</button>
        <button @click="dPulse('166')">r</button>
        <button @click="dPulse('167')">t</button>
        <button @click="dPulse('168')">y</button>
        <button @click="dPulse('169')">u</button>
        <button @click="dPulse('170')">i</button>
        <button @click="dPulse('171')">o</button>
        <button @click="dPulse('172')">p</button>
        <button @click="dPulse('173')">[</button>
        <button @click="dPulse('174')">]</button>
        <button @click="dPulse('175')">\</button>
      </div>
      <div class="line line4">
        <button @click="dPulse('148')">CapsLock</button>
        <button @click="dPulse('176')">a</button>
        <button @click="dPulse('177')">s</button>
        <button @click="dPulse('178')">d</button>
        <button @click="dPulse('179')">f</button>
        <button @click="dPulse('180')">g</button>
        <button @click="dPulse('181')">h</button>
        <button @click="dPulse('182')">j</button>
        <button @click="dPulse('183')">k</button>
        <button @click="dPulse('184')">l</button>
        <button @click="dPulse('185')">;</button>
        <button @click="dPulse('198')">@</button>
        <button @click="dPulse('199')">#</button>
      </div>
      <div class="line line5">
        <button @click="dPulse('147')">Shift</button>
        <button @click="dPulse('187')">z</button>
        <button @click="dPulse('188')">x</button>
        <button @click="dPulse('189')">c</button>
        <button @click="dPulse('190')">v</button>
        <button @click="dPulse('191')">b</button>
        <button @click="dPulse('192')">n</button>
        <button @click="dPulse('193')">m</button>
        <button @click="dPulse('194')">,</button>
        <button @click="dPulse('195')">.</button>
        <button @click="dPulse('196')">/</button>
        <button @click="dPulse('147')">Shift</button>
      </div>
      <div class="line line6">
        <button @click="dPulse('197')"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
  // import and use Crestron functions
  // import { useCrestronFB } from '../../use/useCrestronFB'
  import { useCrestronAct } from '../../use/useCrestronAct'
  const { dPulse } = useCrestronAct()
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';
  .modal {
    background: none;
    top: 45vh;
    height: 55vh;
    .modal-card {
      margin-top: auto;
      margin-bottom: 2em;
      padding: 0.5em;
      height: 50vh;
      // filter: drop-shadow(10px 10px 10px $light);
      .line {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
        button {
          height: 75%;
          aspect-ratio: 1;
        }
      }
      .line1 {
        button {
          margin-left: auto;
          border: none;
          height: 90%;
          aspect-ratio: 1;
          color: $fail;
          svg {
            height: 100%;
          }
          &:active {
            background: none;
          }
        }
      }
      .line2 {
        :last-child {
          aspect-ratio: 3/1;
        }
      }
      .line3 {
        :first-child,
        :last-child {
          aspect-ratio: 1.5/1;
        }
        #tab {
          visibility: hidden;
        }
      }
      .line4 {
        :first-child {
          aspect-ratio: 1.75/1;
        }
      }
      .line5 {
        :first-child,
        :last-child {
          aspect-ratio: 3/1;
        }
      }
      .line6 {
        button {
          aspect-ratio: 9/1;
        }
      }
    }
  }

  .modal {
    z-index: 1;

    .modal-card {
      background: var(--BG-Color);
      color: var(--TX-Color);
      filter: drop-shadow(10px 10px 10px var(--TX-Color));
    }
  }
</style>
