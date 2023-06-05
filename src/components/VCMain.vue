<template>
  <section id="VCMain">
    <aside>
      <VCNav ref="nav" />
    </aside>
    <main>
      <VCDial v-if="vcDailFB" />
      <VCCameras v-if="vcCamsFB" />
      <VCContent v-if="vcContentFB" />
      <VCPreview v-if="vcPreFB" />
    </main>
  </section>
</template>

<script setup>
  // vue imports
  import { ref } from 'vue'

  // import componets/pages
  import VCNav from './VC_comp/VCNav.vue'
  import VCDial from './VC_comp/VCDial.vue'
  import VCCameras from './VC_comp/VCCameras.vue'
  import VCContent from './VC_comp/VCContent.vue'
  import VCPreview from './VC_comp/VCPreview.vue'

  // import Crestron functions
  import { useCrestronFB } from '../use/useCrestronFB'

  // register Crestron feedback
  const { digFB: vcDailFB } = useCrestronFB('34'),
    { digFB: vcContentFB } = useCrestronFB('37'),
    { digFB: vcCamsFB } = useCrestronFB('36'),
    { digFB: vcPreFB } = useCrestronFB('39')

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
