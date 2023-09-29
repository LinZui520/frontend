<template>
  <!-- <bookList></bookList> -->
  <el-col :span="12">
      <h5 class="mb-2">图书管理系统</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        
      >
        <el-menu-item index="1" >
          <el-icon><House /></el-icon>
          <span>主页</span>
        </el-menu-item>
        <el-menu-item index="2" >
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <el-icon><Reading /></el-icon>
          <span>图书管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Notebook /></el-icon>
          <span>图书借阅</span>
        </el-menu-item>
      </el-menu>
    </el-col>
</template>

<script setup lang="ts">
import bookList from '@/components/bookList.vue'

  // const handleOpen = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath)
  // }
  // const handleClose = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath)
  // }

</script>

<style scoped>

</style>