const filterScripts = (a, b) => {
    return Object.keys(a).filter(asset => b.indexOf(asset.replace('.js', '')) > -1).map(k => a[k]);
}

const formatScripts = (a, b) => {
    return filterScripts(a, b).map(c => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`);
}

const injectHTML = (data, { html, title, meta, body, scripts, state }) => {
    data = data.replace('<html>', `<html ${html}>`);
    data = data.replace(/<title>.*?<\/title>/g, title);
    data = data.replace('</head>', `${meta}</head>`);
    data = data.replace(
        '<div id="wecodeartReact"></div>',
        `<div id="wecodeartReact">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
    );
    data = data.replace('</body>', scripts.join('') + '</body>');
    return data;
};

export { filterScripts, formatScripts, injectHTML };