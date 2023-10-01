<template>
  <div class="box">
    <span class="item">查询图书：</span>
    <el-input v-model="input" placeholder="请输入图书名称" class="item" />
    <el-button type="primary" @click="searchBook" class="item">
      确定
    </el-button>
  </div>
  
  <el-table :data="reactiveBooks.data" style="width: 100%">
    <el-table-column prop="bookId" label="图书编号" width="90" />
    <el-table-column prop="bookName" label="图书名称" width="90" />
    <el-table-column prop="author" label="作者" width="90" />
    <el-table-column prop="publish" label="出版社" width="180" />
    <el-table-column prop="price" label="价格" width="90" />
    <el-table-column prop="stock" label="库存" width="90" />
    <el-table-column prop="category" label="分类" width="90" />
    <el-table-column fixed="right" label="操作" width="180">
      <template #default="scope">
        <el-button line size="small" :icon="Check" @click.prevent="borrowWindow(scope.$index)"
          >借阅
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="borrow" title="借阅图书" style="text-align: center;width: 300px;" draggable>
    <el-form :model="variable">
      <el-form-item label="借阅数量" :label-width="labelWidth">
        <el-input type="number" v-model="variable.borrowNum" autocomplete="off" style="width: 180px;"/>
      </el-form-item>
      <el-form-item label="借阅天数" :label-width="labelWidth">
        <el-input type="number" v-model="variable.borrowDays" autocomplete="off" style="width: 180px;"/>
      </el-form-item>
      
      <span class="dialog-footer">
        <el-button @click="borrow = false">取消</el-button>
        <el-button type="primary" @click="borrowBooks">
          确定
        </el-button>
      </span>
    
    </el-form>
  </el-dialog>
</template>
  
<script setup lang="ts">
  import { reactive,ref } from 'vue'
  import { getBook,borrowBook } from '@/api/book'
  import { Check } from '@element-plus/icons-vue'
  import { ElMessage } from 'element-plus'
  import useAccountStore from '@/store/modules/account';
  const accountStore = useAccountStore();
  let books = [{
    bookId: '',
    bookName: '',
    author: '',
    publish: '',
    price: '',
    stock: '',
    category: ''
  }]
  let reactiveBooks = reactive({data: [{
    bookId: '',
    bookName: '',
    author: '',
    publish: '',
    price: '',
    stock: '',
    category: ''
  }]})

  const input = ref('')
  const searchBook = () => {

    reactiveBooks.data = reactive(books.filter(item => {
      if (input.value == '') {
        return item
      }
      return item.bookName.indexOf(input.value) != -1
    }))
    // input.value = ''
  }
  const update = async () => {
    try {
      books = (await getBook()).data
      reactiveBooks.data = books
      searchBook()
    } catch(err) {
      console.log(err)
    }
  }
  update()

  const labelWidth = '70px'
  const borrow = ref(false)
  const borrowId = ref('')
  const variable = reactive({
    borrowNum: '',
    borrowDays: ''
  })
  const borrowWindow = (index: number) => {
    borrowId.value = reactiveBooks.data[index].bookId
    borrow.value = true
  }
  const borrowBooks = () => {
    if (variable.borrowNum == '' || variable.borrowDays == '') {
      ElMessage.error('请填写借阅数量和借阅天数')
      return
    }
    borrowBook(accountStore.username, 
      Number(borrowId.value), 
      Number(variable.borrowNum), 
      Number(variable.borrowDays)
    ).then(res => {
      if (res.data == 'ok'){
        ElMessage.success('借阅成功')
        update()
      } else {
        ElMessage.error('借阅失败,库存不足')
      }
    }).catch(err => {
      ElMessage.error('网络原因,借阅失败')
    })
    variable.borrowNum = ''
    variable.borrowDays = ''
    borrow.value = false
  }
  
</script>
  
<style scoped>
.box {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}

.item {
  margin-left: 10px;
  margin-right: 10px;
  height: 30px;
  max-width: 200px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>