module.exports = {
    // devServer: {
    //     proxy: {
    //         '/users': {
    //             target: 'http://127.0.0.1:3000',
    //             // changeOrigin: true, //允许跨域
    //             // ws: true
    //         },
    //         '/articles': {
    //             target: 'http://127.0.0.1:3000',
    //         },
    //         '/imgs': {
    //             target: 'http://127.0.0.1:3000',
    //         }
    //     }
    // }
    devServer: {
        proxy: 'http://localhost:3000'
    }
}