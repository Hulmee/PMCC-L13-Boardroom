<template>
  <section id="wrapper">
    <div id="mode">
      <VCMain />
    </div>

    <aside id="rhs">
      <button
        @click="volUp"
        class="bdr">
        <font-awesome-icon icon="fa-solid fa-volume-high" />
      </button>
      <div class="barcontainer">
        <div
          class="bar"
          :class="{ muted: isMuted }"></div>
      </div>

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
  import { computed, ref } from 'vue'

  import VCMain from './VCMain.vue'

  const props = defineProps({
      mode: Number,
    }),
    volFb = ref(50),
    volCSS = computed(() => {
      // return isMuted.value ? '0' : `${volFb.value}%`
      return `${volFb.value}%`
    }),
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
      grid-template-columns: 1fr 5em;
    }

    grid-template-columns: 1fr 10em;

    #rhs {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    #rhs {
      border-left: solid 0.5px $light;
      border-color: var(--TX-Color);
      padding: 1em;

      button {
        height: 5em;
        width: 5em;
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

  .barcontainer {
    height: 50%;
    width: 3em;
    margin: 1em auto;
    display: flex;
    border: solid 1px;
    border-color: var(--TX-Color);
    border-radius: 0.5em;
  }

  .bar {
    background: $PMCC-Grad-vert;
    width: 100%;
    height: v-bind(volCSS);
    border-radius: 0.5em;
    margin-top: auto;
    // border: solid 1px;
    // border-color: var(--TX-Color);
    // border-radius: 0.5em;
    &.muted {
      background: $fail;
    }
  }
</style>
