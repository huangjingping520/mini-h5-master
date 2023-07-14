<script setup lang="ts">
import advertisement from '../components/advertisement.vue'
import commodity from '../components/commodity.vue'

</script>

<template>
  <main>
    <advertisement />
    <commodity />
  </main>
</template>
<style scoped>
main {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 32px;
  margin-left: 0 !important;
}
</style>
