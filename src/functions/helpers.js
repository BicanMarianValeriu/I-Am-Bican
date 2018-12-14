/**
 * Validate Email Field
 * @param   {string}    email
 * @returns {boolean}
 */
const validateEmail = function(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Check fields if empty
 * @param   {HTMLCollection} fields
 * @returns {boolean}
 */
const validateFields = function(fields) {
  for (let i = 0; i < fields.length; i++)
    if (fields[i].hasAttribute("required"))
      if (fields[i].value === "") return false;
  return true;
};

/**
 * Create String as params from formData
 * @param {object} data
 */
const serializeData = function(data) {
  // Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
  var str = "";
  for (var key in data) {
    if (str !== "") str += "&";
    str += encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }
  return str;
};

export { validateEmail, validateFields, serializeData };
