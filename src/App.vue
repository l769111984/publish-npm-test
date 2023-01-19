<template>
  <div>
    搭建起来走一波
  </div>
  <router-link to="/login">登录页 |</router-link>
  <router-link to="/home"> 主页 |</router-link>
  <router-link to="/detail"> 详情页</router-link>
  <router-view />
</template>

<script setup lang="ts">
import { getList } from './api'
onBeforeMount(async() => {
    console.log(await getList())
})
</script>