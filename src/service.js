import axios from 'axios';
import http from 'http';
import https from 'https';

const service = axios.create({
    // baseURL: 'http://127.0.0.1:3000',
    // baseURL: '/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    timeout: 2000,
    validateStatus: (status) => {
        return status >= 200 && status < 300;
    },
    httpAgent: new http.Agent({
        keepAlive: true
    }),
    httpsAgent: new https.Agent({
        keepAlive: true
    }),
})

// const get = (url, data) => {
//     return service({
//         methods: 'get',
//         url,
//         params: data
//     })
// };
// const post = (url, data) => {
//     console.log(url, data);
//     return service({
//         methods: 'POST',
//         url,
//         data
//     })
// };
// const _delete = (url, data) => {
//     return service({
//         methods: 'delete',
//         url,
//         ...data
//     })
// };
// const put = (url, data) => {
//     return service({
//         methods: 'put',
//         url,
//         data
//     })
// };

export default service;