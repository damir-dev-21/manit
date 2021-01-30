module.exports = {
    configureWebpack:{
        pwa:{
            name:'Manit',
            iconPaths: {
                favicon32: './assets/image/favicon_1 (1).ico',
                favicon16: '/src/assets/image/favicon_1 (1).ico',
                appleTouchIcon: '/src/assets/image/favicon_1 (1).ico',
                maskIcon: '/src/assets/image/favicon_1 (1).ico',
                msTileImage: '/src/assets/image/favicon_1 (1).ico'
              }
        },
        devServer:{
            proxy:{
                '/admin':{
                    target:'http://localhost:5000',
                }
            }
        }
    }
}