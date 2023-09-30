import request from "@/utils/request";

//获取用户信息
export const getUser = () => request({
    url: '/user/get',
    method: 'get',
})

//获取用户的总数量
export const getUserNum = () => request({
    url: '/user/sum',
    method: 'get',
})
