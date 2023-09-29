import request from "@/utils/request";

//查看读者信息
export const readerCheck = (readerId: string) => request({
    url: '/reader/check',
    method: 'get',
    params: {
        readerId,
    },
})

//查看个人借阅记录
export const getBorrow = (readerId: string) => request({
    url: '/reader/borrow/get',
    method: 'get',
    params: {
        readerId,
    }
})

//查看个人预约记录
export const getReserve = (readerId: string) => request({
    url: '/reader/reserve/get',
    method: 'get',
    params: {
        readerId,
    }
})