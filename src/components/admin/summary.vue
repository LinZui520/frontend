<template>
  <el-row>
    <el-col :span="8" class="item">
      <el-statistic title="用户总数" :value="userNum" />
    </el-col>

    <el-col :span="8" class="item">
      <el-statistic title="图书总数" :value="bookNum" />
    </el-col>

    <el-col :span="8" class="item">
      <el-statistic title="预约信息" :value="reservationNum">
        <template #suffix>
          <el-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </el-icon>
        </template>
      </el-statistic>
    </el-col>
  </el-row>
    
</template>
  
<script setup lang="ts">
  import { ChatLineRound } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import { getBookNum,getReservationNum } from '@/api/book'
  import { getUserNum } from '@/api/reader';


  const userNum = ref(0)
  const bookNum = ref(0)
  const reservationNum = ref(0)

  getUserNum().then(res => {
    userNum.value = res.data
  }).catch(err => {
    console.log(err)
  })

  getBookNum().then(res => {
    bookNum.value = res.data
  }).catch(err => {
    console.log(err)
  })

  getReservationNum().then(res => {
    reservationNum.value = res.data
  }).catch(err => {
    console.log(err)
  })


</script>
  
<style scoped>

.item {
  text-align: center;
  margin-top: 30px;
}
</style>