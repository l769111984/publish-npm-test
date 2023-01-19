<template>
  <div>
    登录一波
    <hello-world />
  </div>
</template>

<script setup lang="ts">
onBeforeMount(() => {
    console.log(inject('message')) 
})
</script>

<style scoped>

</style>