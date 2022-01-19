const path = require('path');
// const md5File = require('md5-file');

// CSS styles will be imported on load and that complicates matters... ignore those bad boys!
const ignoreStyles = require('ignore-styles');
const register = ignoreStyles.default;

const manifest = require('./../build/asset-manifest.json');
// We also want to ignore all image requests 
const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];

// Override the default style ignorer, also modifying all image requests
register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
    if (!extensions.find(f => filename.endsWith(f))) {
        // If we find a style
        return ignoreStyles.noOp();
    } else {
        // If we find an image
        // const hash = md5File.sync(filename).slice(0, 20);
        // const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);

        /**
         * If you are on dev, content is served as root with proxy
         * but when the app is deployed this is served from /build/ directory
         * @info For Heroku and development, the app is working out of the box.
         * @see add `homepage` to package.json if deploying on Apache {
         * - Apache homepage: `https://www.iambican.com/build/`
         * }
         * @see prepend `/build/` to the export bellow if on Apache {
         * - Apache exports: `build/static/media/${bn}`
         * }
         */
        mod.exports = manifest.files[`static/media/${path.basename(filename)}`];
    }
});

// Set up babel to do its thing... env for the latest toys, react-app for CRA 
require('@babel/register')({
    ignore: [/\/(build|node_modules)\//],
    presets: [
        '@babel/preset-env', 
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-block-scoping',
        '@babel/plugin-proposal-class-properties',
        'dynamic-import-node',
        'react-loadable/babel'
    ]
});

// After Babel to avoid Buffer issue
require('@babel/polyfill'); 

// Now that the nonsense is over... load up the server entry point
require('./server');