<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/micro-app">MircoApp</router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <keep-alive ref="keep">
      <component :is="Component" :key="$route.name"></component>
    </keep-alive>
  </router-view>
  <!-- <router-view :key="$route.fullPath" /> -->
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const keep = ref()
onMounted(() => {
  console.log('keep', keep)
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
