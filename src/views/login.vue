<template>
  <div class="box">
    <h3 class="item">登陆</h3>

    <el-input v-model="username" placeholder="请输入账户" class="item"/>

    <el-input
      v-model="password"
      type="password"
      placeholder="请输入密码"
      show-password
      class="item"
    />

    <div class="mb-2 flex items-center text-sm item">
      <el-radio-group v-model="userType" class="ml-4">
        <el-radio label="reader" size="large">用户</el-radio>
        <el-radio label="admin" size="large">管理员</el-radio>
      </el-radio-group>
    </div>

    <el-button type="success" @click="login" round>登陆</el-button>
  </div>
</template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import { accountLogin } from '@/api/account';
  import { useRouter } from 'vue-router';

  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const userType = ref('reader'); // 默认选择普通用户
  
  
  let login = () => {
      
    console.log('用户名:', username);
    console.log('密码:', password);
    console.log('用户类型:', userType);

    // accountLogin(
    //   username.value, 
    //   password.value,
    //   userType.value
    // ).then(res => {
    //   console.log(res);
      // if (res.data == 'ok') {
        if (userType.value == 'reader') {
          router.push({ name: "reader", params: { username: username.value } });
        } else {
          router.push({ name: "admin", params: { username: username.value } });
        }
      //} else {
        //alert('用户名或密码错误')
      //}
    // })
  }
</script>
  
<style scoped>
.box {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.item {
  margin: 10px 0;
}

</style>