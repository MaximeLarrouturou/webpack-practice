# Practice Webpack

## Generated a package.json
* Using `npm init -y` and file `package.json` will be created.

## Installed package webpack and webpack-cli
* Using `npm install webpack webpack-cli --save-dev`

## Zero configuration (webpack)
* Created a folder `src` and create files html, js, css… or placed files existing
* Launch `npm run build`
* A folder dist will be created, a file .js is created for `npm run build`.
 
 ## Decompress a file .js 
 * In file `package.json`, at the level object "scripts" add `"build": "webpack --mode development"`
 * Add a callback file .js in html `<script src="../dist/file.js"></script>`

## Installed a server webpack
* Usin `npm install webpack-dev-server --save-dev`.
* In file `package.json`, at the level object "scripts" again add `"dev": "webpack-dev-server --mode development --watch"`.

## Customize a configuration webpack
* Created file a root folder `webpack.config.js`
`const path = require('path');`
```module.exports = {
    entry: './src/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        ]
    }
```
* Add modules (webpack.config.js)
```module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
```
* Rename callback a file.js

## Babel
* Installed babel loader, use `npm install -D babel-loader @babel/core @babel/preset-env`
* Create file at the level root `.babelrc`
* Add  ```{
    "presets": [
        "@babel/preset-env"
    ]
}```

## css-loader & style-loader
* Add a new rules (webpack.config.js)
```{
                test:/\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
```
* Installed `npm install --save-dev css-loader` more `npm install style-loader --save-dev`
* If used SASS install `npm install sass-loader node-sass --save-dev`
* Add rules (webpack.config.js)
```{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
```
## Used Plugin Webpack
* Add variable (webpack.config.js)
1. `const webpack = require('webpack');`
2. `const HtmlWebpackPlugin = require('html-webpack-plugin');`

* Add object plugins (webpack.config.js)
```plugins:[
        new webpack.ProgressPlugin(handler)
        })
    ]
```
* Add function 
```const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    console.info(percentage, message, ...args);
 };
```
* Customize handler 
```const handler = (percentage, message, ...args) => {
    const percent = (percentage * 100).toFixed(2);
    const msg = message.toUpperCase();
    const argsOrDefault = (args.length === 0) ? "" : args.join(' | ');
    console.info(`${percent}%`, msg, argsOrDefault);
  };
  ```
## Using import pluging
* First step install HTML Webpack Plugin `npm install --save-dev html-webpack-plugin`
* Call plugin (webpack.config.js), `const HtmlWebpackPlugin = require('html-webpack-plugin');`
* Rewrite object plugins
```plugins:[
        new webpack.ProgressPlugin(handler),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'webpack 4 :)',
            template: './src/index.html'
        })
    ]
```
* Change `<title>` index.html at the level src `<%= htmlWebpackPlugin.options.title %>`

## Generate a hash title if necesary
* At the level webpack.config.js, change a filename, `[chunkhash.js]`
* A bundle.js auto update file .js
