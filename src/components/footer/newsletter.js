import React, { useState, useEffect } from "react";
import jsonp from "jsonp";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { validateFields, validateEmail, getFormData, serializeData } from "../../utilities/helpers";
import NewsletterElement from "./../../static/images/spam-free.png";
import { useFormInput } from "../../hooks";

const NewsLetter = () => {
	// Handle Errors
	const [errors, setErrors] = useState([]);
	// Handle Submit State
	const [pending, setPending] = useState(false);
	// Handle Error Message Timeout
	const [showTimeout, setShowTimeout] = useState(false);
	// Handle Input Change
	const emailInput = useFormInput('');

	const validate = ({ fields }) => {
		setErrors([]);
		if (validateFields(fields) === false) {
			setErrors([{ key: 'empty', message: "Please fill all required fields!" }]);
		} else {
			if (validateEmail(emailInput.value) === false) {
				setErrors([{ key: 'invalid', message: "Email address appears to be invalid!" }]);
			}
		}
	};

	const renderErrors = ({ email, messages }) => {
		if (errors.length === 0) return;

		messages.classList.add("d-none");
		messages.innerHTML = "";

		email.classList.remove("is-invalid");
		email.classList.add("is-invalid");

		errors.map(error => {
			let errorEl = document.createElement("div");
			errorEl.classList.add("error");
			errorEl.classList.add("error--" + error.key);
			errorEl.innerHTML = error.message.toString();
			return messages.appendChild(errorEl);
		});

		messages.classList.remove("alert-success");
		messages.classList.add("alert-danger");
		messages.classList.remove("d-none");
	}

	const clearErrors = ({ email, messages }) => {
		messages.innerHTML = "";
		messages.classList.add("d-none");
		email.classList.remove("is-invalid");
	}

	const onSubmit = () => {
		if (pending) return;

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

			setTimeout(() => clearErrors({ email: formEl.elements['email'], messages }), 5000);
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const formEl = document.forms.newsletter;
		const fields = formEl.elements, email = fields['EMAIL'];
		const messages = document.querySelector('.newsletter__messages');

		validate({ fields });

		if (errors.length === 0) onSubmit();
		else renderErrors({ email, messages });
	};

	// Handle cMD, cDU
	useEffect(() => {
		const formEl = document.forms.newsletter;
		const fields = formEl.elements, email = fields['EMAIL'];
		const messages = document.querySelector('.newsletter__messages');

		// Validate and create errors
		validate({ fields });

		// Render the errors created above
		renderErrors({ email, messages });

		// ...and show them for 5 seconds
		setShowTimeout(setTimeout(() => clearErrors({ email, messages }), 5000));
		
		// ...then clear the errors timeout on input value change and clear validaton if no errors
		return () => {
			if (errors.length) clearErrors({ email, messages });
			clearTimeout(showTimeout);
		};

	}, [emailInput.value]);

	return (
		<div className="newsletter newsletter--footer">
			<div className="newsletter__messages alert alert-danger d-none" />
			<form className="newsletter__form" name="newsletter" noValidate onSubmit={handleSubmit}>
				<InputGroup>
					<Input placeholder="Email Address" name="EMAIL" type="email" required="required" {...emailInput} />
					<InputGroupAddon addonType="append">
						<Button type="submit" className="newsletter__button btn btn--primary text-color-light">
							{pending ? 'LOADING...' : 'SUBSCRIBE'}
						</Button>
					</InputGroupAddon>
				</InputGroup>
			</form>
			<div className="newsletter__element">
				<img className="newsletter__element-img" src={NewsletterElement} alt="Spam Free" />
			</div>
		</div>
	);
};

export default NewsLetter;