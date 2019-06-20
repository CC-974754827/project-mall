<!-- 作为整个项目的核心文件，基于webpack -->
const path = require('path');
const CompressionPluginn = require('compression-webpack-plugin');

module.exports{
<!-- productionSourceMap当不需要生产环境的source.map，将其设置为false，以加速生产环境构建 -->
<!-- 删除map -->
    productionSourceMap:false,
<!-- 运行自动打开文件 -->
    devServe:{
        open: true
    },
    configureWebpack:config=>{
        <!-- 判断当前是生成环境还是开发环境 -->
        if(process.env.NODE_ENV === 'production'){
            <!-- 判断是不是生产环境 -->
            return{
                plugins:[
                    new CompressionPluginn({
                        test: /\.js$|\.html$|\.css$/,
                        <!-- 指文件如果超过10k，就gzip压缩 -->
                        threshold: 10240,
                        <!-- false保留源文件，true删除源文件，只留下gzip文件 -->
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    }
}

