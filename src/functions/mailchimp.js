/* fetchJsonP */
const fetchJsonP = function (url, options) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        let callbackName = 'cb' + String(Math.random()).slice(-6);
        url += ~url.indexOf('?') ? '&' : '?';
        url += 'callback=fetchJsonP.cbReg.' + callbackName;
        script.src = url;
        script.onload = function () {
            delete fetchJsonP.cbReg[callbackName];
            script.remove();
        };
        script.onerror = function () {
            delete fetchJsonP.cbReg[callbackName];
            script.remove();
            reject(new Error("o_O"));
        };
        fetchJsonP.cbReg[callbackName] = resolve;
        document.body.appendChild(script);
    });
};

fetchJsonP.cbReg = {};

const MailChimp = {
    getFormData: (formEl) => {
        var elements = formEl.elements;
        var postData = {};
        for (var i = 0; i < elements.length; i++)
            if (elements[i].type !== 'submit')
                postData[elements[i].name] = elements[i].value;
        return postData;
    },

    serializeData(data) {
        var str = '';
        for (var key in data) {
            if (str !== '') {
                str += '&';
            }
            str += key + '=' + encodeURIComponent(data[key]);
        }
        return str;
    },

    submitForm: async function (formSelector) {
        var formEl = document.querySelector(formSelector);
        var formData = this.serializeData(this.getFormData(formEl));
        var formUrl = formEl.getAttribute('action').replace('/post?', '/post-json?').concat('&' + formData)

        /* 
        const response = await fetch(formUrl, {
            mode: 'no-cors',
            cache: 'no-cache',
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
        */
        const response = fetchJsonP(formUrl).then(response => {
            console.log(data)
        }).then( data => {
            console.log(data)
        })

        return response;
    }
};

export default MailChimp;