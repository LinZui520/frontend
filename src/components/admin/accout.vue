<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><User /></el-icon>
          <span>用户</span>
        </span>
      </template>

      <el-table :data="reactiveUsers.data" style="width: 100%">
        <el-table-column prop="userNumber" label="学号" width="90" />
        <el-table-column prop="name" label="姓名" width="90" />
        <el-table-column prop="age" label="年龄" width="90" />
        <el-table-column prop="sex" label="性别" width="90" />
        <el-table-column prop="address" label="居住地址" width="140" />
        <el-table-column prop="phone" label="联系方式" width="90" />
        <el-table-column prop="userName" label="用户名" width="90" />
        <el-table-column prop="id" label="身份证号" width="90" />
        <!-- <el-table-column fixed="right" label="操作" width="180">
          <template #default="scope">
            <el-button line size="small" :icon="Edit" @click.prevent="editWindow(scope.$index)"
              >编辑</el-button>
            <el-button line size="small" :icon="Delete" @click.prevent="removeWindow(scope.$index)"
              >删除</el-button>
          </template>
        </el-table-column> -->
      </el-table>

    </el-tab-pane>

    <el-tab-pane label="管理员">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><UserFilled /></el-icon>
          <span>管理员</span>
        </span>
      </template>

      Config

    </el-tab-pane>
  </el-tabs>
</template>
  
<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { getUser } from '@/api/reader';

  let users = [{
    userNumber: '',
    name: '',
    age: '',
    sex: '',
    address: '',
    phone: '',
    userName: '',
    id: ''
  }]
  let reactiveUsers = reactive({data: users})

  const update = async () => {
    try {
      users = (await getUser()).data
      reactiveUsers.data = users
    } catch(err) {
      console.log(err)
    }
  }

  update()
  
</script>
  
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>