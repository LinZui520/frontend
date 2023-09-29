<template>
  <el-table :data="reactiveBooks" style="width: 80%">
    <el-table-column prop="bookId" label="书籍编号" width="180" />
    <el-table-column prop="bookName" label="书籍名称" width="180" />
    <el-table-column prop="author" label="作者" width="180" />
    <el-table-column prop="publish" label="出版社" width="180" />
    <el-table-column prop="price" label="价格" width="180" />
    <el-table-column prop="stock" label="库存" width="180" />
    <el-table-column prop="category" label="分类" />
  </el-table>
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
  ];
  const reactiveBooks = reactive(books)
  
</script>
  
<style scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>s