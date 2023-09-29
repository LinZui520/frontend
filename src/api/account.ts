import request from "@/utils/request";

//账户登陆
export const accountLogin = (username: string, password: string, power: string) => request({
    url: '/account/login',
    method: 'post',
    data: {
        username,
        password,
        power,
    },
})

//查看图书
export const bookCheck = (bookId: number) => request({
    url: '/book/check',
    method: 'get',
    params: {
        bookId,
    },
})

//查看图书列表
export const getBook = () => request({
    url: '/book/get',
    method: 'get',
})