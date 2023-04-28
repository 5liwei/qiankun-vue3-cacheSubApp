<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'AboutView',
  components: {},
  setup() {
    console.log('111', getCurrentInstance())
    onMounted(() => {
      console.log('about onmount')
    })
  }
})
</script>
