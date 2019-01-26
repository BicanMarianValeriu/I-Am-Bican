import axios from "axios";
import { merge } from "lodash";

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
		this.options = merge({}, WPCF7.defaults, options);
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
		let namespace = "contact-form-7/v1";
		let url = this.getApiUrl();
		return url.replace(namespace, namespace + path);
	}

	getFormId() {
		let id = this.options.formId || this.el.getAttribute("data-wpcf7-id") || this.el.getAttribute("id").split("-").pop();
		return parseInt(id, 10);
	}

	async sendMail() {
		let formData = new FormData(this.el);
		let url = this.getRoute("/contact-forms/" + this.getFormId() + "/feedback");
		return await axios.post(url, { data: formData }).then(result => result.data);
	}
}

export default WPCF7;
