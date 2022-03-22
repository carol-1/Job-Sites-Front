import axios from "axios"
import {Message} from "element-ui"
//创建axios实例
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:9999/Recruitment",
    timeout: 15000,
})
//配置请求拦截器
axiosInstance.interceptors.request.use(function (config) {
    //在发送请求之前做什么
    return config;
},function (error){
    //对请求的错误做什么
    return Promise.reject(error);
});
//配置响应拦截器
axiosInstance.interceptors.response.use(function(response){
    //对响应数据做点什么
    const res = response.data;
    if(response.status == 200){
        if(res.code == 200){
            return res;
        }else   if(res.code == 401){
           // return res;
        }else   if(res.code == 402){
           // return res;
        }else   if(res.code == 500){
            Message.error(res.msg)
            return null;
        }
    }else{
        Message.error(res.msg)
    }
    return response;
},function (error){
    //对响应错误做点什么
    return Promise.reject(error);
});

export default axiosInstance