<template>
  <section>
    <aside>
      <VCNav />
    </aside>
    <main>main</main>
  </section>
</template>

<script setup>
  import VCNav from './VC_comp/VCNav.vue'
</script>

<style lang="scss" scoped>
  @import '../assets/colors';
  section {
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
    border-right: solid 0.5px ;
    border-color: var(--TX-Color);

    text-align: center;
    display: flex;
    flex-direction: column;
    grid-area: lhs;
  }
  main {
    grid-area: main;
  }
</style>
