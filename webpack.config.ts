import * as path from 'path';
import * as webpack from 'webpack';
import * as nodeExternals from 'webpack-node-externals';

const config:webpack.Configuration = {
    target: 'node',

    externals: [ nodeExternals() ],

    mode: 'development',

    output: {
        filename: '[name].spec.js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },

    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.tsx']
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            include: path.resolve('src'),
            exclude: /node_modules/,
            rules: [{
                exclude: /\.spec\.tsx?$/,
                enforce: 'post',
                loader: 'istanbul-instrumenter-loader',
            },{
                loader: 'ts-loader',
            }]
        }]
    }

};

export default config;