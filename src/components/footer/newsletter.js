import React, { Component } from "react";
import jsonp from "jsonp";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import {
	validateFields,
	validateEmail,
	getFormData,
	serializeData
} from "../../utilities/helpers";
import NewsletterElement from "./../../static/images/spam-free.png";

class NewsLetter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: [],
			isSubmiting: false
		};
	}

	componentDidMount() {
		var formEl = document.querySelector(".newsletter__form");
		var email = formEl.elements[0];

		email.addEventListener("keyup", () => {
			this.validate();
			this.generateErrors();
		});

		formEl.addEventListener("submit", e => {
			e.preventDefault();
			this.validate();
			this.generateErrors();
			if (this.state.errors.length === 0) this.onSubmit();
		});
	}

	onSubmit() {
		const { isSubmiting } = this.state;

		if (isSubmiting) return;

		this.setState({ isSubmiting: true });

		var formEl = document.querySelector(".newsletter__form");
		let path = "//wecodeart.us2.list-manage.com/subscribe/post?u=ab68e00b82ffb88387f008ce7&amp;id=abee3454c2";
		let url = `${path}&${serializeData(getFormData(formEl))}`;
		let fullUrl = url.replace("/post?", "/post-json?");

		jsonp(fullUrl, { param: "c" }, (err, data) => {
			this.setState({ isSubmiting: false });
			var messages = document.querySelector(".newsletter__messages");

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
			formEl.elements[0].value = "";

			setTimeout(() => {
				messages.innerHTML = "";
				messages.classList.add("d-none");
			}, 5000);
		});
	}

	validate() {
		var formEl = document.querySelector(".newsletter__form");
		let fields = formEl.elements;
		let email = fields[0].value;

		this.setState({ errors: [] });

		if (validateFields(fields) === false) {
			this.setState(errors => ({
				errors: [
					...errors.errors,
					{ key: "empty_fields", message: "Please fill all required fields!" }
				]
			}));
		} else {
			if (validateEmail(email) === false) {
				this.setState(errors => ({
					errors: [
						...errors.errors,
						{
							key: "invalid_email",
							message: "Email address appears to be invalid."
						}
					]
				}));
			}
		}
	}

	generateErrors() {
		var email = document.querySelector(".newsletter__form").elements["EMAIL"];
		var messages = document.querySelector(".newsletter__messages");

		messages.classList.add("d-none");
		messages.innerHTML = "";
		email.classList.remove("is-invalid");

		if (this.state.errors.length === 0) return;

		const { errors } = this.state;

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

		setTimeout(() => {
			messages.innerHTML = "";
			messages.classList.add("d-none");
			email.classList.remove("is-invalid");
		}, 5000);
	}

	render() {
		const { isSubmiting } = this.state;
		let text = isSubmiting ? "LOADING..." : "SUBSCRIBE";
		return (
			<div className="newsletter newsletter--footer">
				<div className="newsletter__messages alert alert-danger d-none" />
				<form className="newsletter__form" noValidate>
					<InputGroup>
						<Input
							placeholder="Email Address"
							name="EMAIL"
							type="email"
							required="required"
						/>
						<InputGroupAddon addonType="append">
							<Button
								type="submit"
								className="newsletter__button btn btn--primary text-color-light"
							>
								{text}
							</Button>
						</InputGroupAddon>
					</InputGroup>
				</form>
				<div className="newsletter__element">
					<img className="newsletter__element-img" src={NewsletterElement} alt="Spam Free" />
				</div>
			</div>
		);
	}
}

export default NewsLetter;
