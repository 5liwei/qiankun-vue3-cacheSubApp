<script setup lang="ts">
import { onMounted, ref, onActivated, onDeactivated } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { loadMicroApp } from 'qiankun'

const microApp = ref()
let app: any = null
onMounted(async () => {
  app = loadMicroApp({
    name: 'micro-app',
    container: microApp.value,
    entry: 'http://localhost:8081/ '
  })
  app.mount()
  await app.mountPromise
})
const mountApp = async () => {
  console.log('Activated')
  app.mount()
  await app.mountPromise
}
const unmountApp = async () => {
  console.log('Deactivated')
  app.unmount()
  await app.unmountPromise
}
</script>

<template>
  <button @click="mountApp">加载</button>
  <button @click="unmountApp">卸载</button>

  <div class="micro-app" ref="microApp"></div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.micro-app {
  width: 100%;
  height: 1080px;
}
</style>
