module.exports = {
    devServer: {
        proxy: {
            '/users': {
                target: 'http://127.0.0.1:3000',
                // changeOrigin: true, //允许跨域
                // ws: true
            }
        }
    }
}