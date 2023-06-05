<template>
  <teleport to="body">
    <div
      @click.stop="dPulse('29')"
      class="modal">
      <div class="modal-card container">
        <h1>System Timeout</h1>
        <p>Are you sure you wish to shut the system down?</p>

        <!-- <small>Time Remaining: <span>XXX</span> Seconds</small> -->

        <div class="btns">
          <button
            @click="dPulse('28')"
            id="yesTO">
            <font-awesome-icon :icon="['fas', 'square-check']" />
            <h3>YES</h3>
          </button>
          <button
            @click="dPulse('29')"
            id="noTO">
            <font-awesome-icon :icon="['fas', 'square-xmark']" />
            <h3>NO</h3>
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
  // import Crestron functions
  import { useCrestronFB } from '../../use/useCrestronFB'
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
