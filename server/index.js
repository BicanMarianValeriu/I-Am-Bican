const path = require('path');

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
        /**
         * If you are on dev, content is served as root with proxy
         * but when the app is deployed this is served from /build/ directory
         * @info For Heroku and development, the app is working out of the box.
         * @see add `/build/` to package.json homepage if deploying on Apache, eg: {
         * - homepage: `https://www.iambican.com/build/`
         * }
         */
        mod.exports = manifest.files[`static/media/${path.basename(filename)}`];
    }
});

// Set up babel to do its thing... env for the latest toys, react-app for CRA
require('@babel/polyfill');
require('@babel/register')({
    ignore: [/\/(build|node_modules)\//],
    presets: [
        '@babel/preset-env', 
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        'dynamic-import-node',
        'react-loadable/babel'
    ]
});

// Now that the nonsense is over... load up the server entry point
require('./server');