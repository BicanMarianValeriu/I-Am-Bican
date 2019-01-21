import React, { Component } from 'react';

export default class Calltoaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Modal: null
        };
        // Preload the component on mouseover
        this._onMouseOver = this._onMouseOver.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onMouseOver() {
        if (this.state.Modal !== null) return;
        import(/* webpackChunkName: "swalcontact" */ "./../popups/swal-contact").then(
            modal => this.setState({ Modal: modal.default })
        );
    }

    _onButtonClick() {
        if (this.state.Modal === null) {
            import(/* webpackChunkName: "swalcontact" */ "./../popups/swal-contact")
                .then(modal => this.setState({ Modal: modal.default }))
                .then(() => this.state.Modal.renderModal());
        }
        if (this.state.Modal) this.state.Modal.renderModal();
    } 

    render() {
        return (
            <section id="cta" className="calltoaction">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg text-center text-lg-left calltoaction__text">
                            <h3 className="text text-weight--light">Do you have a design and you want to 
                                <strong className="text-font--cursive">bring it to life</strong>?
                            </h3>
                            <p className="lead">Is simple, drop me a message and let's setup a meeting.</p>
                        </div>
                        <div className="col-12 col-lg-auto text-center text-lg-right calltoaction__buttons">
                            <button className="calltoaction__button btn btn-lg" 
                                onClick={this._onButtonClick}
                                onMouseOver={this._onMouseOver}
                                onTouchStart={this._onMouseOver}>
                                <i className="far fa-paper-plane"></i> Let's Connect
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
