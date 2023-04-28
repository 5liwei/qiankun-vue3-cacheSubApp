<template>
  <div class="home">
    <h1>This is an home page</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    onMounted(() => {
      console.log('home onmount')
    })
  }
})
</script>
