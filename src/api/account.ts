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
