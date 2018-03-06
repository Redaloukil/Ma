import path from 'path'

//Configuration for webpack middleware 
export default {
    entry: path.join(__dirname,'/client/index.js'),
    output:{
        path:'/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include:path.join(__dirname,'client'),
               
                query: {
                    presets: ['babel']
                }
            }
            
        ]
        
    },
    resolve:{
        extenstions : ['' , '.js']
    }
}