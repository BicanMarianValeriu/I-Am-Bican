const md5File = require('md5-file');
const path = require('path');

// CSS styles will be imported on load and that complicates matters... ignore those bad boys!
const ignoreStyles = require('ignore-styles');
const register = ignoreStyles.default;

// We also want to ignore all image requests 
const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];

// Override the default style ignorer, also modifying all image requests
register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
    if (!extensions.find(f => filename.endsWith(f))) {
        // If we find a style
        return ignoreStyles.noOp();
    } else {
        // If we find an image
        const hash = md5File.sync(filename).slice(0, 8);
        const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);

        mod.exports = `/static/media/${bn}`;
    }
});

// Set up babel to do its thing... env for the latest toys, react-app for CRA 
require('@babel/register')({
    ignore: [/\/(build|node_modules)\//],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-syntax-dynamic-import', 
        'dynamic-import-node',
        'react-loadable/babel'
    ]
});
require('@babel/polyfill');

// Now that the nonsense is over... load up the server entry point
require('./server');