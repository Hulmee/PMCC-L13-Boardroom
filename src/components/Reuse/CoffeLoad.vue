<template>
  <div class="">
    <div class="coffee">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/colors';
  /**
    * Coffee
    *
    * @author jh3y - jheytompkins.com
  */

  $size: 140px;
  $color: var(--TX-Color);
  // $color: #fff;
  $no-of-fume: 3;

  @keyframes coffee {
    100% {
      opacity: 0;
      transform: translateY(-200%);
    }
  }

  .coffee {
    background: $color;
    display: grid;
    border-radius: ($size * 0.1);
    grid-template-columns: repeat($no-of-fume, 1fr);
    grid-template-rows: 1fr;
    height: $size;
    position: relative;
    width: $size;
    padding: 2px;
    justify-items: center;
    transform-style: preserve-3d;

    &:before {
      box-sizing: border-box;
      content: '';
      height: ($size * 0.65);
      width: ($size / 2);
      border: ($size * 0.1) solid $color;
      position: absolute;
      top: 50%;
      margin-top: -(($size * 0.65) / 2);
      margin-left: -($size / 4);
      left: 100%;
      border-radius: ($size * 0.1);
    }

    div {
      height: ($size / 2);
      width: ($size / 5);
      background: $color;
      opacity: 0.3;
      animation: coffee 2s infinite;
      border-radius: 75%;
      transform: translateZ(-10px);
      &:first-child {
        border-radius: 25% 75%;
        background: $PMCC1;
      }
      &:nth-child(2) {
        background: $PMCC2;
      }
      &:last-child {
        border-radius: 75% 25%;
        background: $PMCC3;
      }
    }

    @for $fume from 1 through $no-of-fume {
      $margin: 2px;
      $left: ($size / 10) + $margin;
      div:nth-child(#{$fume}) {
        animation-delay: random(10) * 0.1s;
      }
    }
  }
</style>
