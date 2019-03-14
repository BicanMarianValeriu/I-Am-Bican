import React, { Component } from 'react';

export default class GetInTouch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Modal: null
        };
        // Preload the component on mouseover
        this._onMouseOver = this._onMouseOver.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    componentDidMount() {
        var hash = window.location.hash;
        var blockId = hash.split("-").pop();
        if (blockId === "#sendmsg") this._onButtonClick();
    }

    _onMouseOver() {
        if (this.state.Modal !== null) return;
        import(/* webpackChunkName: "swal-contact" */ "./Popups/swal-contact")
            .then(modal => this.setState({ Modal: modal.default }));
    }

    _onButtonClick() {
        if (this.state.Modal === null) {
            import(/* webpackChunkName: "swal-contact" */ "./Popups/swal-contact")
                .then(modal => this.setState({ Modal: modal.default }))
                .then(() => this.state.Modal());
        }
        if (this.state.Modal) this.state.Modal();
    }

    render() {
        let classes = ['btn'];
        if (this.props.className) classes.push([this.props.className]);
        let iconClasses = ['far fa-paper-plane'];
        if (this.props.iconClass) iconClasses.push([this.props.iconClass]);
        return (
            <button className={classes.join(' ')}
                onClick={this._onButtonClick}
                onMouseOver={this._onMouseOver}
                onTouchStart={this._onMouseOver}>
                <i className={iconClasses.join(' ')}></i>
                <span>{this.props.label}</span>
            </button>
        )
    }
}
