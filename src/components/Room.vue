<template>
  <section class="wrapper">
    <div class="con">
      <Blinds />
    </div>
    <div>
      <Lights />
    </div>
  </section>
</template>

<script setup>
  import Lights from './Reuse/Lights.vue'
  import Blinds from './Reuse/Blinds.vue'
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    margin-left: auto;
    justify-content: space-around;
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 30%;
      padding: 1em 0;
    }
  }
</style>
