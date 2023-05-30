<template>
  <section id="wrapper">
    <div id="mode">
      <VCMain />
    </div>

    <aside id="rhs">
      <button @click="volUp">
        <font-awesome-icon icon="fa-solid fa-volume-high" />
      </button>
      <progress
        :value="volFb"
        max="100"></progress>
      <button @click="volDwn">
        <font-awesome-icon icon="fa-solid fa-volume-low" />
      </button>
      <button
        @click="isMuted = !isMuted"
        :class="{ mute: isMuted }">
        <font-awesome-icon icon="fa-solid fa-volume-xmark" />
      </button>
    </aside>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  import VCMain from './VCMain.vue'

  const props = defineProps({
      mode: Number,
    }),
    volFb = ref(50),
    isMuted = ref(true),
    volUp = () => {
      volFb.value++
      isMuted.value = false
    },
    volDwn = () => {
      volFb.value--
      isMuted.value = false
    }
</script>

<style lang="scss" scoped>
  @import '../assets/colors';

  #wrapper {
    grid-area: sec;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: ' main rhs';
    @media screen and (max-width: 641px) {
      grid-template-columns: 1fr 9.5em;
    }
    grid-template-columns: 1fr 16.5em;

    #rhs {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    #rhs {
      border-left: solid 0.5px $light;
      border-color: var(--TX-Color);
      padding: 1em;

      progress {
        border-radius: 7px;
        width: 100%;
        height: 10%;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        transform: rotate(270deg);
        margin: auto;
        @media screen and (max-width: 641px) {
          width: 5em;
        }
      }
      progress::-webkit-progress-bar {
        border-radius: 7px;
      }
      progress::-webkit-progress-value {
        background: $PMCC-Grad;

        border-radius: 7px;
      }
      button {
        height: 5em;
        width: 10em;
        margin: 0.25em auto;
        border: solid 1px;
        border-color: var(--TX-Color);
        border-radius: 0.5em;
        @media screen and (max-width: 641px) {
          height: 2.5em;
          width: 2.5em;
        }
      }
    }
  }
  .mute {
    background: $fail;
  }
</style>
