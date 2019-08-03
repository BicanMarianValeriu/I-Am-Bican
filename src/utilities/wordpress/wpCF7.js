import axios from "axios";
import _merge from "lodash/merge";

class WPCF7 {
	/**
	 * Construct Animate instance
	 * @constructor
	 * @param {Element} el
	 * @param {Object} options
	 */
	constructor(el, options) {
		this.el = document.querySelector(el);
		this.el.WPCF7 = this;
		this.options = _merge({}, WPCF7.defaults, options);
	}

	static get defaults() {
		return {
			apiUrl: "http://working.on/iambican/wordpress/wp-json/contact-form-7/v1",
			formId: ""
		};
	}

	getApiUrl() {
		return this.options.apiUrl;
	}

	getRoute(path) {
		const namespace = "contact-form-7/v1";
		const url = this.getApiUrl();
		return url.replace(namespace, namespace + path);
	}

	getFormId() {
		const id = this.options.formId || this.el.getAttribute("data-wpcf7-id") || this.el.getAttribute("id").split("-").pop();
		return parseInt(id, 10);
	}

	async sendMail() {
		const formData = new FormData(this.el);
		const url = this.getRoute("/contact-forms/" + this.getFormId() + "/feedback");
		return await axios({ method: 'post', url, data: formData }).then(result => result.data);
	}
}

export default WPCF7;
