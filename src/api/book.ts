import request from "@/utils/request";

//添加图书
export const addBook = (bookName: string, author: string, 
    publish: string, price: number, stock: number, category: string) => request({
    url: '/book/add',
    method: 'post',
    data: {
        bookName,
        author,
        publish,
        price,
        stock,
        category,
    },
})

//删除图书
export const deleteBook = (bookId: number) => request({
    url: '/book/delete',
    method: 'post',
    data: {
        bookId,
    },
})

//修改图书
export const updateBook = (bookID: number, bookname: string, author: string, 
        publish: string, price: number, stock: number, category: string) => request({
    url: '/book/update',
    method: 'post',
    data: {
        bookID,
        bookname,
        author,
        publish,
        price,
        stock,
        category,
    },
})

//查看图书列表
export const getBook = () => request({
    url: '/book/get',
    method: 'get',
})

//获取图书的总数量
export const getBookNum = () => request({
    url: '/book/sum',
    method: 'get',
})