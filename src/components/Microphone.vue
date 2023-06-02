<template>
  <section
    id="mics"
    class="">
    <div
      id="handheld"
      class="mic">
      <h3>Handheld Mic</h3>
      <button
        @click="hhUp"
        class="">
        <font-awesome-icon icon="fa-solid fa-volume-high" />
      </button>
      <div class="barcontainer">
        <div
          id="handheldBar"
          class="bar"
          :class="{ muted: hhMute }"></div>
      </div>

      <button @click="hhDwn">
        <font-awesome-icon icon="fa-solid fa-volume-low" />
      </button>
      <button
        @click="hhMute = !hhMute"
        :class="{ muted: hhMute }">
        <font-awesome-icon icon="fa-solid fa-volume-xmark" />
      </button>
    </div>
    <div
      id="Lapel"
      class="mic">
      <h3>Lapel Mic</h3>
      <button
        @click="lpUp"
        class="">
        <font-awesome-icon icon="fa-solid fa-volume-high" />
      </button>
      <div class="barcontainer">
        <div
          id="lapelBar"
          class="bar"
          :class="{ muted: lpMute }"></div>
      </div>

      <button @click="lpDwn">
        <font-awesome-icon icon="fa-solid fa-volume-low" />
      </button>
      <button
        @click="lpMute = !lpMute"
        :class="{ muted: lpMute }">
        <font-awesome-icon icon="fa-solid fa-volume-xmark" />
      </button>
    </div>
  </section>
</template>

<script setup>
  import { computed, ref } from 'vue'

  const handheldVol = ref(20),
    hhMute = ref(true),
    hhUp = () => {
      handheldVol.value++
      hhMute.value = false
    },
    hhDwn = () => {
      handheldVol.value--
      hhMute.value = false
    },
    handVolCSS = computed(() => {
      return `${handheldVol.value}%`
    })

  const lapelVol = ref(75),
    lpMute = ref(false),
    lpUp = () => {
      lapelVol.value++
      lpMute.value = false
    },
    lpDwn = () => {
      lapelVol.value--
      lpMute.value = false
    },
    lapelVolCSS = computed(() => {
      return `${lapelVol.value}%`
    })
</script>


<style lang="scss" scoped>
  @import '../assets/colors';
  #mics {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .mic {
      height: 100%;
      min-width: 150px;
      width: fit-content;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: 1em;
      margin: 2em;
    }
  }
  .barcontainer {
    height: 40%;
    width: 3em;
    margin: 1em auto;
    display: flex;
    border: solid 1px;
    border-color: var(--TX-Color);
    border-radius: 0.5em;

    .bar {
      background: $PMCC-Grad-vert;
      width: 100%;
      border-radius: 0.5em;
      margin-top: auto;
      &.muted {
        background: $fail;
      }
    }
  }
  .muted {
    background: $fail;
  }
  #handheldBar {
    height: v-bind(handVolCSS);
  }
  #lapelBar {
    height: v-bind(lapelVolCSS);
  }
  button {
    height: 5em;
    width: 5em;
    margin: 0.25em auto;
    border-radius: 0.5em;
    @media screen and (max-width: 641px) {
      height: 2.5em;
      width: 2.5em;
    }
  }
</style>
