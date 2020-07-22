import HttpRequest from './axios'
const baseUrl = 'http://localhost:3000/';
const axios = new HttpRequest(baseUrl)
export const getWebsiteList = (data) => {
    console.log(111111)
    return axios.get({
        url: '/website/getwebsite',
        data
    })

}
export const saveWebsiteCofig = (data) => {
    console.log(111111)
    return axios.post({
        url: '/website/savewebsiteconfig',
        data
    })
}

