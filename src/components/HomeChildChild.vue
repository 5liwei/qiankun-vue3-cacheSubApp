<template>
  <div class="home">
    <h1>This is an home child{{ route.fullPath }} page</h1>
  </div>
</template>
<script lang="ts">
export default {
  name: 'home-child-child'
}
</script>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
onMounted(() => {
  console.log('onMounted', route.fullPath)
})
</script>
