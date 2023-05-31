<template>
  <section id="VCMain">
    <aside>
      <VCNav ref="nav" />
    </aside>
    <main>
      <VCDial v-if="nav.activeNav == 1" />
      <VCCameras v-if="nav.activeNav == 3" />
      <VCContent v-if="nav.activeNav == 4" />
      <VCPreview v-if="nav.activeNav == 5" />
    </main>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  import VCNav from './VC_comp/VCNav.vue'
  import VCDial from './VC_comp/VCDial.vue'
  import VCCameras from './VC_comp/VCCameras.vue'
  import VCContent from './VC_comp/VCContent.vue'
  import VCPreview from './VC_comp/VCPreview.vue'

  const nav = ref(0)
</script>

<style lang="scss" scoped>
  @import '../assets/colors';
  #VCMain {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: 'lhs main';
    @media screen and (max-width: 641px) {
      grid-template-columns: 9.5em 1fr;
    }
    grid-template-columns: 16.5em 1fr;
  }
  aside {
    border-right: solid 0.5px;
    border-color: var(--TX-Color);

    text-align: center;
    display: flex;
    flex-direction: column;
    grid-area: lhs;
  }
  main {
    grid-area: main;
    padding: 0 1em;
  }
</style>
