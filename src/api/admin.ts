import request from "@/utils/request";

//查看管理员信息
export const adminCheck = (adminId: string) => request({
    url: '/admin/check',
    method: 'get',
    params: {
        adminId,
    },
})

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
export const updateBook = (bookOldID: number, bookname: string, author: string, 
        publish: string, price: number, stock: number, category: string) => request({
    url: '/book/update',
    method: 'post',
    data: {
        bookOldID,
        bookname,
        author,
        publish,
        price,
        stock,
        category,
    },
})

//查看所有借阅记录
export const getBorrow = () => request({
    url: '/admin/borrow/get',
    method: 'get',
})

//查看所有预约记录
export const getReserve = () => request({
    url: '/admin/reserve/get',
    method: 'get',
})