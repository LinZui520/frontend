<template>
  <el-table :data="reactiveBooks" style="width: 100%">
    <el-table-column prop="bookId" label="书籍编号" width="90" />
    <el-table-column prop="bookName" label="书籍名称" width="90" />
    <el-table-column prop="author" label="作者" width="90" />
    <el-table-column prop="publish" label="出版社" width="180" />
    <el-table-column prop="price" label="价格" width="90" />
    <el-table-column prop="stock" label="库存" width="90" />
    <el-table-column prop="category" label="分类" width="90" />
    <el-table-column fixed="right" label="操作" width="180">
      <template #default="scope">
        <el-button line size="small" @click.prevent="editWindow(scope.$index)"
          >编辑</el-button>
        <el-button line size="small" @click.prevent="removeWindow(scope.$index)"
          >删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="edit" title="修改书籍信息" style="text-align: center;" draggable>
    <el-form :model="variable">
      <el-form-item label="书籍编号" :label-width="labelWidth">
        <el-input v-model="variable.bookId" autocomplete="off" />
      </el-form-item>
      <el-form-item label="书籍名称" :label-width="labelWidth">
        <el-input v-model="variable.bookName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="作者" :label-width="labelWidth">
        <el-input v-model="variable.author" autocomplete="off" />
      </el-form-item>
      <el-form-item label="出版社" :label-width="labelWidth">
        <el-input v-model="variable.publish" autocomplete="off" />
      </el-form-item>
      <el-form-item label="价格" :label-width="labelWidth">
        <el-input v-model="variable.price" autocomplete="off" />
      </el-form-item>
      <el-form-item label="库存" :label-width="labelWidth">
        <el-input v-model="variable.stock" autocomplete="off" />
      </el-form-item>
      <el-form-item label="分类" :label-width="labelWidth">
        <el-input v-model="variable.category" autocomplete="off" />
      </el-form-item>
      
      <span class="dialog-footer">
        <el-button @click="edit = false">取消</el-button>
        <el-button type="primary" @click="editBook">
          确定
        </el-button>
      </span>
    
    </el-form>
  </el-dialog>


  <el-dialog
    v-model="remove"
    title="提示"
    width="30%"
    draggable
  >
    <span>确定删除该书籍的全部信息？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="remove = false">Cancel</el-button>
        <el-button type="primary" @click="removeBook">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
<script setup lang="ts">
  import { ref,reactive } from "vue";

  const books = [
    {bookId: '1', bookName: 'vue', author: '张三', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '2', bookName: 'java', author: '李四', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '3', bookName: 'python', author: '王五', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '4', bookName: 'c++', author: '赵六', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '5', bookName: 'c', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '6', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '7', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '8', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '9', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '10', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '1', bookName: 'vue', author: '张三', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '2', bookName: 'java', author: '李四', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '3', bookName: 'python', author: '王五', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '4', bookName: 'c++', author: '赵六', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '5', bookName: 'c', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '6', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '7', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '8', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '9', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '10', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '1', bookName: 'vue', author: '张三', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '2', bookName: 'java', author: '李四', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '3', bookName: 'python', author: '王五', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '4', bookName: 'c++', author: '赵六', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '5', bookName: 'c', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '6', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '7', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
    {bookId: '8', bookName: 'c#', author: '田七', publish: '清华大学出版社', price: '100', stock: '100', category: '计算机'},
  ];
  const reactiveBooks = reactive(books)

  const variable = reactive({
    bookId: '',
    bookName: '',
    author: '',
    publish: '',
    price: '',
    stock: '',
    category: ''
  })
  const labelWidth = '140px'
  const edit = ref(false)
  const editIndex = ref(-1)

  const editWindow = (index: number) => {
    console.log(reactiveBooks[index].bookId)
    editIndex.value = index
    variable.bookId = reactiveBooks[index].bookId
    variable.bookName = reactiveBooks[index].bookName
    variable.author = reactiveBooks[index].author
    variable.publish = reactiveBooks[index].publish
    variable.price = reactiveBooks[index].price
    variable.stock = reactiveBooks[index].stock
    variable.category = reactiveBooks[index].category
    edit.value = true
  }
  const editBook = () => {
    reactiveBooks[editIndex.value].bookId = variable.bookId
    reactiveBooks[editIndex.value].bookName = variable.bookName
    reactiveBooks[editIndex.value].author = variable.author
    reactiveBooks[editIndex.value].publish = variable.publish
    reactiveBooks[editIndex.value].price = variable.price
    reactiveBooks[editIndex.value].stock = variable.stock
    reactiveBooks[editIndex.value].category = variable.category
    edit.value = false
  }

  const remove = ref(false)
  const removeIndex = ref(-1)
  const removeWindow = (index: number) => {
    console.log(reactiveBooks[index].bookId)
    removeIndex.value = index
    remove.value = true
  }
  const removeBook = () => {
    reactiveBooks.splice(removeIndex.value, 1)
    remove.value = false
  }
  
</script>
    
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>