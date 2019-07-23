import React, { useState, useEffect } from "react";
import jsonp from "jsonp";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { getFormData, serializeData } from "../../utilities/helpers";
import { useFormState } from 'react-use-form-state';

const NewsLetter = () => {
	const [formState, { email }] = useFormState();

	// Handle Submit State
	const [pending, setPending] = useState(false);

	// Handle Error Message Timeout
	const [showTimeout, setShowTimeout] = useState(false);

	// Vars
	const { errors = { none: 'none' }, values } = formState;

	// Helper
	const clearErrors = ({ email, messages }) => {
		messages.innerHTML = "";
		messages.classList.add("d-none");
		email.classList.remove("is-invalid");
	}

	const renderErrors = ({ email, messages, errors }) => {

		if (JSON.stringify(errors) === '{}') return;

		messages.classList.add("d-none");
		messages.innerHTML = "";

		email.classList.remove("is-invalid");
		email.classList.add("is-invalid");

		let errorEl = document.createElement("div");
		errorEl.classList.add("error");
		errorEl.innerHTML = errors.EMAIL.toString();
		messages.appendChild(errorEl);

		messages.classList.remove("alert-success");
		messages.classList.add("alert-danger");
		messages.classList.remove("d-none");
	}

	const onSubmit = () => {
		if (pending === true) return;

		setPending(true);

		const formEl = document.forms.newsletter;
		const messages = document.querySelector(".newsletter__messages");

		let path = "//wecodeart.us2.list-manage.com/subscribe/post?u=ab68e00b82ffb88387f008ce7&amp;id=abee3454c2";
		let url = `${path}&${serializeData(getFormData(formEl))}`;
		url = url.replace("/post?", "/post-json?");

		jsonp(url, { param: "c" }, (err, data) => {

			setPending(false);

			let msgClass;
			if (data.result === "success") {
				msgClass = "alert-success";
				messages.classList.remove("alert-danger");
			}

			if (data.result === "error") {
				msgClass = "alert-danger";
				messages.classList.remove("alert-success");
			}

			let msg = document.createElement("div");
			msg.innerHTML = data.msg;

			messages.appendChild(msg);
			messages.classList.add(msgClass);
			messages.classList.remove("d-none");
			formEl.elements['EMAIL'].value = '';

			setTimeout(() => clearErrors({ email: formEl.elements['EMAIL'], messages }), 5000);
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (errors === false) return;

		const formEl = document.forms.newsletter;
		const fields = formEl.elements, email = fields['EMAIL'];
		const messages = document.querySelector('.newsletter__messages');

		if (email.value !== '' && JSON.stringify(errors) === '{}') onSubmit();
		else renderErrors({ email, messages, errors });
	};

	// Handle cMD, cDU
	useEffect(() => {
		const formEl = document.forms.newsletter;
		const fields = formEl.elements, email = fields['EMAIL'];
		const messages = document.querySelector('.newsletter__messages');

		// Render the errors created above
		renderErrors({ email, messages, errors });

		// ...and show them for 5 seconds
		setShowTimeout(setTimeout(() => clearErrors({ email, messages }), 5000));

		// ...then clear the errors timeout on input value change and clear validaton if no errors
		return () => {
			if (JSON.stringify(errors) === '{}') clearErrors({ email, messages });
			clearTimeout(showTimeout);
		};
		// eslint-disable-next-line
	}, [values.EMAIL]);

	return (
		<div className="newsletter newsletter--footer">
			<div className="newsletter__messages alert alert-danger d-none" />
			<form className="newsletter__form" name="newsletter" noValidate onSubmit={handleSubmit}>
				<InputGroup>
					<Input placeholder="Email Address" name="EMAIL" type="email" {...email('EMAIL')} required />
					<InputGroupAddon addonType="append">
						<Button type="submit" className="newsletter__button btn btn--primary text-color-light">
							{pending ? 'LOADING...' : 'SUBSCRIBE'}
						</Button>
					</InputGroupAddon>
				</InputGroup>
			</form>
		</div>
	);
};

export default NewsLetter;
