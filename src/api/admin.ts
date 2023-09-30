import request from "@/utils/request";


//查看所有借阅记录
export const getBorrow = () => request({
    url: '/borrow/get',
    method: 'get',
})

//查看所有预约记录
export const getReserve = () => request({
    url: '/reserve/get',
    method: 'get',
})

