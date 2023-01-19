<template>
    <div>
        登录一波
    </div>
</template>

<script setup lang="ts">
onBeforeMount(async ()=>{
    console.log(inject('message'))
})
</script>

<style scoped>

</style>