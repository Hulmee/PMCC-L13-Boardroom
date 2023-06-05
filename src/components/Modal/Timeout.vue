<template>
  <!-- <teleport to="body"> -->
  <div
    @click.self="dPulse('19')"
    class="modal">
    <div class="modal-card">
      <h1>System Timeout</h1>
      <pre>
          The System is about to shutdown due to inactivity. 
          
          Press NO to Cancel the shutdow & YES to shutdown now.
        </pre
      >

      <small>Time Remaining: <span>XXX</span> Seconds</small>

      <div class="btns">
        <button
          @click="dPulse('28')"
          id="yesTO">
          <font-awesome-icon :icon="['fas', 'square-check']" />
          <h3>YES</h3>
        </button>
        <button
          @click="dPulse('19')"
          id="noTO">
          <font-awesome-icon :icon="['fas', 'square-xmark']" />
          <h3>NO</h3>
        </button>
      </div>
    </div>
  </div>
  <!-- </teleport> -->
</template>

<script setup>
  // import and use Crestron functions
  // import { useCrestronFB } from '../../use/useCrestronFB'
  import { useCrestronAct } from '../../use/useCrestronAct'
  const { dPulse } = useCrestronAct()
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';

  .btns {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    button {
      width: 50%;
      aspect-ratio: 16/9;
      display: flex;
      align-items: center;
      justify-content: center;
      &:first-child {
        border-top-left-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
      }
      &:last-child {
        border-top-right-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
      }
    }
  }
  #yesTO {
    color: $success;
    &:active {
      background: $success;
      svg,
      h3 {
        color: $light;
      }
    }
  }
  #noTO {
    color: $fail;
    &:active {
      background: $fail;
      svg,
      h3 {
        color: $light;
      }
    }
  }
</style>
