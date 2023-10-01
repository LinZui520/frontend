<template>
<el-container class="layout-container-demo">
    <el-container class="box">

    <el-col :span="3" class="item" style="height: 100%">
        <h3 class="mb-2" style="text-align: center;">图书借阅系统</h3>
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        >
        <el-menu-item index="1" @click="router.push('/' + accountStore.username + '/home')" >
            <el-icon><House /></el-icon>
            <span>主页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="router.push('/' + accountStore.username + '/adminlist')">
            <el-icon><User /></el-icon>
            <span>查看管理员</span>
        </el-menu-item>
        <el-menu-item index="3" @click="router.push('/' + accountStore.username + '/borrow')">
            <el-icon><Reading /></el-icon>
            <span>借阅书籍</span>
        </el-menu-item>
        <el-menu-item index="4" @click="router.push('/' + accountStore.username + '/booking')">
            <el-icon><Notebook /></el-icon>
            <span>查看借阅</span>
        </el-menu-item>
        </el-menu>
    </el-col>
    
    
    
    <el-scrollbar class="item" style="height: 612px;width: 100%">
        <router-view></router-view>
    </el-scrollbar>  
    
    </el-container>
</el-container>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import useAccountStore from '@/store/modules/account'

    const accountStore = useAccountStore()
    const router = useRouter();
    router.push('/' + accountStore.username + '/home')

</script>

<style scoped>
.box {
display: flex;
margin-top: 30px;
margin-bottom: 30px;
}
.item {
margin-left: 30px;
margin-right: 30px;
border: 1px solid #eee;
border-radius: 5px;
}
</style>