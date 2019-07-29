import React, { useState, useEffect, useRef } from "react";
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

	// Handle cMD, cDU
	const ref = useRef(false);

	// Vars
	const { values: { EMAIL }, errors } = formState;

	// Helper
	const clearErrors = ({ formEl, messageEl }) => {
		formEl.classList.remove('was-validated');
		formEl.classList.remove('was-received');
		messageEl.innerHTML = '';
		const elems = formEl.querySelectorAll('div[class*="-feedback"');
		for (let el of elems) el.innerHTML = '';
	}

	const validate = ({ formEl, messageEl }) => {

		const { EMAIL: emailError = '' } = errors;

		if (emailError !== '') messageEl.innerHTML = '';

		formEl.classList.add('was-validated');
		const errorEl = document.createElement('span');
		errorEl.innerText = emailError.toString();
		messageEl.appendChild(errorEl);

		return emailError !== '' ? false : null;
	}

	const onSubmit = ({ formEl, messageEl }) => {
		if (pending === true) return;

		clearTimeout(showTimeout);

		if (EMAIL === '' && validate({ formEl, messageEl }) === null) {
			validate({ formEl, messageEl });
			setShowTimeout(setTimeout(() => clearErrors({ formEl, messageEl }), 5000));
			return;
		}

		setPending(true);

		const path = "//wecodeart.us2.list-manage.com/subscribe/post-json?u=ab68e00b82ffb88387f008ce7&amp;id=abee3454c2";
		const url = `${path}&${serializeData(getFormData(formEl))}`;

		jsonp(url, { param: "c" }, (err, data) => {
			const { result, msg: message } = data;
			setPending(false);

			const msg = document.createElement('span');
			msg.innerHTML = message;

			let container = result === 'success' ? '.valid-feedback' : '.invalid-feedback';
			container = formEl.querySelector(container);
			container.appendChild(msg);

			formEl.classList.add('was-received');
			setShowTimeout(setTimeout(() => clearErrors({ formEl, messageEl }), 5000));
		});
	}

	const handleSubmit = e => {
		e.preventDefault();
		const formEl = document.forms.newsletter;
		const messageEl = formEl.querySelector('.invalid-tooltip');
		if (JSON.stringify(errors) === '{}') onSubmit({ formEl, messageEl });
		else validate({ formEl, messageEl });
	};

	useEffect(() => {
		const formEl = document.forms.newsletter;
		const messageEl = formEl.querySelector('.invalid-tooltip');

		clearTimeout(showTimeout);

		// Render the errors created above
		if (ref.current) {
			validate({ formEl, messageEl });
		}

		ref.current = true;

		// ...then clear the errors timeout on input value change and clear validaton if no errors
		return () => {
			setShowTimeout(setTimeout(() => clearErrors({ formEl, messageEl }), 5000));
		};
		// eslint-disable-next-line
	}, [EMAIL]);

	return (
		<div className="newsletter newsletter--footer">
			<form className="newsletter__form" name="newsletter" noValidate onSubmit={handleSubmit}>
				<InputGroup>
					<Input placeholder="Email Address" name="EMAIL" type="email" {...email('EMAIL')} required />
					<div className="invalid-tooltip">Please fill out this field.</div>
					<div className="valid-tooltip">Everything looks fine!</div>
					<InputGroupAddon addonType="append">
						<Button type="submit" className="newsletter__button btn btn--primary text-color-light">
							{pending ? 'LOADING...' : 'SUBSCRIBE'}
						</Button>
					</InputGroupAddon>
					<div className="valid-feedback"></div>
					<div className="invalid-feedback"></div>
				</InputGroup>
			</form>
		</div>
	);
};

export default NewsLetter;
