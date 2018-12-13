const WPCF7 = {
	apiUrl: 'http://working.on/iambican/wordpress/wp-json/contact-form-7/v1',

	setApiUrl: function (url) {
		this.apiUrl = url;
	},

	getApiUrl: function () {
		return this.apiUrl;
	},

	getRoute: function (path) {
		var namespace = 'contact-form-7/v1';

		var url = this.getApiUrl();
		url = url.replace(namespace, namespace + path);

		return url;
	},

	getFormId: function (form) {
		let formEl = document.getElementById(form)
		let formId = formEl.getAttribute('data-wpcf7-form') || formEl.getAttribute('id').split('-').pop()
		return parseInt(formId, 10);
	},

	sendMail: async function (form) {
		var formEl = document.getElementById(form);
		var formData = new FormData(formEl);

		var url = this.getRoute('/contact-forms/' + this.getFormId(form) + '/feedback')

		const response = await fetch(url, {
			method: 'POST',
			body: formData
		}).then((response) => {
			return response.json();
		})

		return response;
	}
};

export default WPCF7;