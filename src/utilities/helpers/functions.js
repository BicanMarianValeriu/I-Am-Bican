/**
 * isServer
 */
const isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * isLocalhost
 */
const isLocalhost = Boolean(!isServer && (
	window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
	window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
	window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
));

/**
 * Get Window Size
 */
const getWinSize = () => ({
	width: !isServer ? window.innerWidth : undefined,
	height: !isServer ? window.innerHeight : undefined
});

/**
 * Get Screen Type
 */
const getScreenType = (value, type = 'min') => {
	let width = null, name = null, condition = false;

	if (!isServer) {
		const style = getComputedStyle(document.body);
		const breakpoints = {
			xs: style.getPropertyValue('--breakpoint-sm'),
			sm: style.getPropertyValue('--breakpoint-md'),
			md: style.getPropertyValue('--breakpoint-md'),
			lg: style.getPropertyValue('--breakpoint-lg'),
			xl: style.getPropertyValue('--breakpoint-xl')
		};


		if (value !== undefined && Number.isInteger(value) && type !== undefined) {
			if (
				(['min', 'max'].includes(type) && window.matchMedia(`(${type}-width: ${value}px)`).matches) ||
				(Number.isInteger(type) && window.matchMedia(`(min-width: ${value}px) and (max-width: ${type}px)`).matches)
			) {
				condition = true;
			}
		} else if (window.matchMedia(`(max-width: ${breakpoints.xs})`).matches) {
			width = toNumber(breakpoints.xs);
			name = 'xs';
		} else if (window.matchMedia(`(max-width: ${breakpoints.sm})`).matches) {
			width = toNumber(breakpoints.sm);
			name = 'sm';
		} else if (window.matchMedia(`(max-width: ${breakpoints.md})`).matches) {
			width = toNumber(breakpoints.md);
			width = 'md';
		} else if (window.matchMedia(`(max-width: ${breakpoints.lg})`).matches) {
			width = toNumber(breakpoints.lg);
			name = 'lg';
		} else {
			width = toNumber(breakpoints.xl);
			name = 'xl';
		}
	}

	return { width, name, condition };
}

/**
 * Convert to digit
 * @param {string} str Number or String to be converted
 */
const toNumber = str => str && str.replace(/\D/g, '');

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
 * ShuffleNumbers
 * @param {array} array 
 */
const shuffleNumbers = (array) => {
	var i = array.length,
		j = 0,
		temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

/**
 * Get random number from array
 */
const getRandomNumber = (uniqueRandoms, numbers) => {
	if (!uniqueRandoms.length) {
		for (var i = 0; i < numbers; i++) {
			uniqueRandoms.push(i);
		}
	}
	var index = Math.floor(Math.random() * uniqueRandoms.length);
	var val = uniqueRandoms[index];
	uniqueRandoms.splice(index, 1);
	return val;
}

/**
 * Randomize between
 * @param {*} min 
 * @param {*} max 
 */
const randomize = (min, max) => (Math.random() * (max - min)) + min;

/**
 * Convert date to human readable string
 * @param {object} param0 
 */
const humanDuration = ({ from, to }) => {
	const dateFrom = new Date(from), dateTo = new Date(to);

	const date1_UTC = new Date(Date.UTC(dateFrom.getUTCFullYear(), dateFrom.getUTCMonth(), dateFrom.getUTCDate()));
	const date2_UTC = new Date(Date.UTC(dateTo.getUTCFullYear(), dateTo.getUTCMonth(), dateTo.getUTCDate()));

	let yAppendix, mAppendix, dAppendix;

	const getDaysInMonths = (date) => {
		const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
		const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
		const monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
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

/**
 * Parse data attrs
 * @param   {object/string} opts
 * @return  {object/string}
 */
const parseData = (opts) => {
	if (typeof (opts) == 'object') {
		return opts;
	} else if (typeof (opts) == 'string') {
		try {
			return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
		} catch (e) {
			return {};
		}
	} else {
		return {};
	}
};

// Exports
export {
	isServer,
	isLocalhost,
	getScreenType,
	getWinSize,
	parseData,
	getFormData,
	serializeData,
	validateEmail,
	validateFields,
	lerp,
	lineEq,
	getMousePos,
	humanDuration,
	randomize,
	toNumber,
	getRandomNumber,
	shuffleArray,
	shuffleNumbers,
};
