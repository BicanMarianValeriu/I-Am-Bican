import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { validateFields, validateEmail } from '../../functions/helpers';
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
        var formEl = document.querySelector('.newsletter__form');
        let fields = formEl.elements;
        let email = fields['EMAIL'].value;

        this.setState({ errors: [] });

        if (validateFields(fields) === false) {
            this.setState(errors => ({
                errors: [...errors.errors, { key: 'empty_fields', message: 'Please fill all required fields!' }]
            }))
        }

        if (validateEmail(email) === false) {
            this.setState(errors => ({
                errors: [...errors.errors, { key: 'invalid_email', message: 'Email address appears to be invalid.' }]
            }))
        }
    }

    generateErrors() {
        var messages = document.querySelector('.newsletter__messages');
        messages.classList.add('d-none');
        messages.innerHTML = '';

        if (this.state.errors.length === 0) return;

        const { errors } = this.state;

        errors.map((error) => {
            let errorEl = document.createElement('div');
            errorEl.classList.add('error');
            errorEl.classList.add('error--' + error.key);
            errorEl.innerHTML = error.message.toString();
            return messages.appendChild(errorEl);
        });

        messages.classList.remove('d-none');

        setTimeout(() => {
            messages.innerHTML = '';
            messages.classList.add('d-none');
        }, 5000);
    }

    handleSubmit(e) {
        const { isSubmiting } = this.state;
        if (isSubmiting) return false;

        var formEl = document.querySelector('.newsletter__form');
        var fields = formEl.elements;

        fields[0].addEventListener('keyup', () => {
            this.validate();
            this.generateErrors();
        });

        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate();
            this.generateErrors();
            if (this.state.errors.length === 0) formEl.submit();
        });
    }

    render() {
        return (
            <div className="newsletter newsletter--footer">
                <div className="newsletter__messages alert alert-danger d-none"></div>
                <form className="newsletter__form"
                    action="//wecodeart.us2.list-manage.com/subscribe/post?u=ab68e00b82ffb88387f008ce7&amp;id=abee3454c2"
                    method="POST" noValidate="novalidate" target="_blank">
                    <InputGroup>
                        <Input placeholder="Email Address" name="EMAIL" id="EMAIL" type="email" required="required" />
                        <InputGroupAddon addonType="append">
                            <Button className="newsletter__button btn btn--primary text-color-light" type="submit"
                                onClick={this.handleSubmit.bind(this)}>SUBSCRIBE</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </form>
            </div>
        );
    }
}

export default NewsLetter;