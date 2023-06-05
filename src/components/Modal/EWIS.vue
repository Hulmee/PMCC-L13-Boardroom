<template>
  <div class="modal">
    <div class="modal-card">
      <h2>EMERGENCY SYSTEM ACTIVATED</h2>
      <h1>
        FOLLOW INSTRUCTIONS <br />
        FOR EVACUATION
      </h1>
    </div>
  </div>
</template>

<script setup>
  //
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';
  .modal {
    background: $fail;
    z-index: 10;
  }
  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 2em;
  }
</style>
