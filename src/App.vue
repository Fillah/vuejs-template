<template>
  <div id="app">
    <loading-bar></loading-bar>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
    @import './scss/main';

    .fade-enter-active, .fade-leave-active {
      transition-property: opacity;
      transition-duration: .25s;
    }

    .fade-enter-active {
      transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
