<template>
    <div>
        搭建起来走一波
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { getList } from './api'
onBeforeMount(async ()=>{
    console.log(await getList())
})
</script>