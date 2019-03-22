/**
 * Gets form data - IE Support
 * @param {*} formEl
 */
const getFormData = function (formEl) {
	// Like THIS Because IE/EDGE does not f*king know how to read FormData entries
	return [].reduce.call(formEl.elements, (data, element) => {
		if (element.value !== "") data[element.name] = element.value;
		return data;
	}, {});
};

/**
 * Validate Email Field
 * @param   {string}    email
 * @returns {boolean}
 */
const validateEmail = function (email) {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

/**
 * Check fields if empty
 * @param   {HTMLCollection} fields
 * @returns {boolean}
 */
const validateFields = function (fields) {
	for (let i = 0; i < fields.length; i++)
		if (fields[i].hasAttribute("required"))
			if (fields[i].value === "") return false;
	return true;
};

/**
 * Create String as params from formData
 * @param {object} data
 */
const serializeData = function (data) {
	// Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
	var str = "";
	for (var key in data) {
		if (str !== "") str += "&";
		str += encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
	}
	return str;
};

/**
 * Lerp
 * @param {*} a 
 * @param {*} b 
 * @param {*} n 
 */
const lerp = (a, b, n) => (1 - n) * a + n * b;

/**
 * Get Mouse Position
 * @param {e} JS Event
 */
const getMousePos = (e) => {
	let body = document.body;
	let posx = 0;
	let posy = 0;
	if (!e) e = window.event;
	if (e.pageX || e.pageY) {
		posx = e.pageX;
		posy = e.pageY;
	} else if (e.clientX || e.clientY) {
		posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
		posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
	}
	return { x: posx, y: posy }
}

/**
 * Line EQ
 * @param {*} y2 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} x1 
 * @param {*} currentVal 
 */
const lineEq = (y2, y1, x2, x1, currentVal) => {
	let m = (y2 - y1) / (x2 - x1);
	let b = y1 - m * x1;
	return m * currentVal + b;
};

/**
 * ShuffleArray
 * @param {*} arr 
 */
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

/**
 * Randomize between
 * @param {*} min 
 * @param {*} max 
 */
const randomize = (min, max) => (Math.random() * (max - min)) + min;

const humanDuration = ({ from, to }) => {
	let dateFrom = new Date(from), dateTo = new Date(to);

	let date1_UTC = new Date(Date.UTC(dateFrom.getUTCFullYear(), dateFrom.getUTCMonth(), dateFrom.getUTCDate()));
	let date2_UTC = new Date(Date.UTC(dateTo.getUTCFullYear(), dateTo.getUTCMonth(), dateTo.getUTCDate()));

	let yAppendix, mAppendix, dAppendix;

	const getDaysInMonths = (date) => {
		let monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
		let monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
		let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
		return monthLength;
	}

	let days = date2_UTC.getDate() - date1_UTC.getDate();
	if (days < 0) {
		date2_UTC.setMonth(date2_UTC.getMonth() - 1);
		days += getDaysInMonths(date2_UTC);
	}

	let months = date2_UTC.getMonth() - date1_UTC.getMonth();
	if (months < 0) {
		date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
		months += 12;
	}

	let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
	yAppendix = years > 1 ? " years" : " year";
	mAppendix = months > 1 ? " months" : " month";
	dAppendix = days > 1 ? " days" : " day";

	return (years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);
};

export { getFormData, validateEmail, validateFields, serializeData, lerp, lineEq, getMousePos, shuffleArray, randomize, humanDuration };
