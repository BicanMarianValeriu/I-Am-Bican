import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { validateFields, validateEmail } from "../../functions/helpers";
import MailChimp from "../../functions/mailchimp";
//import MailChimp from '../../functions/mailchimp';

class NewsLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      isSubmiting: false
    };
  }

  componentDidMount() {
    this.handleSubmit();
  }

  validate() {
    var formEl = document.querySelector(".newsletter__form");
    let fields = formEl.elements;
    let email = fields["email_address"].value;

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
    var formEl = document.querySelector(".newsletter__form");
    var email = formEl.elements["email_address"];
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

    messages.classList.remove("d-none");

    setTimeout(() => {
      messages.innerHTML = "";
      messages.classList.add("d-none");
      email.classList.remove("is-invalid");
    }, 5000);
  }

  handleSubmit() {
    const { isSubmiting } = this.state;
    if (isSubmiting) return false;

    var formEl = document.querySelector(".newsletter__form");
    var email = formEl.elements["email_address"];

    email.addEventListener("keyup", () => {
      this.validate();
      this.generateErrors();
    });

    formEl.addEventListener("submit", e => {
      e.preventDefault();
      this.validate();
      this.generateErrors();
      if (this.state.errors.length === 0) {
        let MC = new MailChimp(formEl, "sadxasa").setData({
          url: "https://usX.api.mailchimp.com/3.0/",
          user: ""
        });

        MC.send("lists/57afe96172/members").then(data => {
          var messages = document.querySelector(".newsletter__messages");
          let msg = document.createElement("div");
          msg.innerHTML = data.message.toString();

          messages.appendChild(msg);
          messages.classList.remove("d-none");

          setTimeout(() => {
            messages.innerHTML = "";
            messages.classList.add("d-none");
          }, 5000);
        });
      }
    });
  }

  render() {
    return (
      <div className="newsletter newsletter--footer">
        <div className="newsletter__messages alert alert-danger d-none" />
        <form
          className="newsletter__form"
          action="//wecodeart.us2.list-manage.com/subscribe/post?u=ab68e00b82ffb88387f008ce7&amp;id=abee3454c2"
          method="POST"
          noValidate="novalidate"
          target="_blank"
        >
          <InputGroup>
            <Input
              placeholder="Email Address"
              name="email_address"
              type="email"
              required="required"
            />
            <InputGroupAddon addonType="append">
              <Button
                className="newsletter__button btn btn--primary text-color-light"
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              >
                SUBSCRIBE
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default NewsLetter;
