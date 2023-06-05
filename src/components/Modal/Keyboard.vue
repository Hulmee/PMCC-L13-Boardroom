<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal-card contsiner">
        <div class="line line1">
          <button>
            <font-awesome-icon :icon="['fas', 'square-xmark']" />
            <!-- <h3>close</h3> -->
          </button>
        </div>
        <div class="line line2">
          <button class="">`</button>
          <button class="">1</button>
          <button class="">2</button>
          <button class="">3</button>
          <button class="">4</button>
          <button class="">5</button>
          <button class="">6</button>
          <button class="">7</button>
          <button class="">8</button>
          <button class="">9</button>
          <button class="">0</button>
          <button class="">-</button>
          <button class="">=</button>
          <button class="">Backspace</button>
        </div>
        <div class="line line3">
          <button id="tab">TAB</button>
          <button>q</button>
          <button>w</button>
          <button>e</button>
          <button>r</button>
          <button>t</button>
          <button>y</button>
          <button>u</button>
          <button>i</button>
          <button>o</button>
          <button>p</button>
          <button>[</button>
          <button>]</button>
          <button>\</button>
        </div>
        <div class="line line4">
          <button>CapsLock</button>
          <button>a</button>
          <button>s</button>
          <button>d</button>
          <button>f</button>
          <button>g</button>
          <button>h</button>
          <button>j</button>
          <button>k</button>
          <button>l</button>
          <button>;</button>
          <button>@</button>
          <button>#</button>
        </div>
        <div class="line line5">
          <button>Shift</button>
          <button>z</button>
          <button>x</button>
          <button>c</button>
          <button>v</button>
          <button>b</button>
          <button>n</button>
          <button>m</button>
          <button>,</button>
          <button>.</button>
          <button>/</button>
          <button>Shift</button>
        </div>
        <div class="line line6">
          <button></button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
  //
</script>

<style lang="scss" scoped>
  @import '../../assets/colors';
  .modal {
    background: none;
    .modal-card {
      margin-top: auto;
      margin-bottom: 2em;
      padding: 0.5em;
      height: 50vh;
      filter: drop-shadow(10px 10px 10px $light);
      .line {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
        button {
          height: 75%;
          aspect-ratio: 1;
        }
      }
      .line1 {
        button {
          margin-left: auto;
          border: none;
          height: 90%;
          aspect-ratio: 1;
          color: $fail;
          svg {
            height: 100%;
          }
        }
      }
      .line2 {
        :last-child {
          // color: $fail;
          aspect-ratio: 3/1;
        }
      }
      .line3 {
        :first-child,
        :last-child {
          aspect-ratio: 1.5/1;
        }
        #tab {
          visibility: hidden;
        }
      }
      .line4 {
        :first-child {
          // color: $fail;
          aspect-ratio: 1.75/1;
        }
      }
      .line5 {
        :first-child,
        :last-child {
          aspect-ratio: 3/1;
        }
      }
      .line6 {
        button {
          aspect-ratio: 9/1;
        }
      }
    }
  }
</style>
