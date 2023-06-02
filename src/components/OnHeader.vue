<template>
  <section
    id="onHead"
    class="">
    <nav class="">
      <button v-if="false">
        <font-awesome-icon :icon="['fas', 'users']" />
        <h3>Conference</h3>
      </button>
      <button>
        <font-awesome-icon :icon="['fas', 'person-chalkboard']" />
        <h3>Presentation</h3>
      </button>
      <button>
        <font-awesome-icon :icon="['fas', 'microphone']" />
        <h3>Microphones</h3>
      </button>
      <button>
        <font-awesome-icon
          :icon="['fas', 'sliders']"
          rotation="90" />
        <h3>Room</h3>
      </button>
    </nav>
    <button id="pwr">
      <font-awesome-icon :icon="['fas', 'power-off']" />
      <h3>power</h3>
    </button>
  </section>
</template>

<style lang="scss" scoped>
  @import '../assets/colors';

  #onHead {
    display: flex;
    color: $dark;
    width: 100%;

    nav {
      width: 100%;
      margin: 0 1em;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        height: 100%;
        width: 100%;
        border: solid 1px var(--BG-Color);
        color: var(--BG-Color);
        &:first-child {
          border-top-left-radius: 0.5em;
          border-bottom-left-radius: 0.5em;
        }
        &:last-child {
          border-top-right-radius: 0.5em;
          border-bottom-right-radius: 0.5em;
        }
        &:active {
          color: $light;
        }
      }
    }
    #pwr {
      width: 25%;
      padding: 0.25em 0.5em;
      color: $fail;
      border: solid 1px $fail;
      margin-left: auto;
      margin-right: 1em;
      border-radius: 0.5em;
      &:active {
        background: $fail;
        color: $light;
      }
    }
  }
</style>
