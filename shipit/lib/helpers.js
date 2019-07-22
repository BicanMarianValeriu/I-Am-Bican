/**
 * Returns an hash from date as `YYYYMMDDHHMMSS`.
 * @returns {string}
 */
const dateHash = () => (new Date()).toISOString().replace(/[\D]+/g, '').substring(0, 14);

/**
 * Add trailing `c` character to `s` if `s` doesn't already end with `c`.
 * @param {string} c - Trailing char
 * @param {string} s - The string
 * @returns {string}
 */
const trailing = (c, s) => s.lastIndexOf(c) === s.length - 1 ? s : `${s}${c}`;

module.exports = { dateHash, trailing }; 