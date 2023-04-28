<template>
  <div class="home">
    <h1>This is an home child1 page</h1>
    <router-link to="/hch1/hch11">ch11</router-link>
    |
    <router-link to="/hch1/hch22">ch22</router-link>
    |
    <router-link to="/hch1/hch33">ch33</router-link>
    |
    <button @click="pushRoute('hch11')">ch11</button>
    |
    <button @click="pushRoute('hch22')">ch22</button>
    |
    <button @click="pushRoute('hch33')">ch33</button>
    |
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const pushRoute = (path: string) => {
  console.log(route.matched)
  router.push(`${route.matched[route.matched.length - 2].path}/${path}`)
}
</script>
