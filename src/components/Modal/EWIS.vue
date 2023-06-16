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
    .modal-card {
      filter: drop-shadow(10px 10px 10px var(--TX-Color));
      @media screen and (max-width: 641px) {
        filter: drop-shadow(5px 5px 5px var(--TX-Color));
      }
    }
  }
  @media screen and (min-width: 641px) {
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 2em;
    }
  }
</style>
