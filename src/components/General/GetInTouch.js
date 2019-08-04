import React, { useState } from 'react';
import classnames from 'classnames';

export default function GetInTouch({ className = '', iconClass, label }) {
    const [modal, setModal] = useState(null);

    const _onMouseOver = () => {
        if (modal !== null) return;
        import(/* webpackChunkName: "swal-contact" */ "../Popups/swal-contact").then(m => setModal(m));
    }

    const _onButtonClick = () => {
        if (modal === null) {
            import(/* webpackChunkName: "swal-contact" */ "../Popups/swal-contact")
                .then(modal => setModal(modal))
                .then(modal => modal && modal.default());
            return;
        }

        return modal.default();
    }

    const classNames = classnames('btn', className);
    const iconClasses = classnames('far', 'fa-paper-plane', iconClass);

    return (
        <button className={classNames} onClick={_onButtonClick} onMouseOver={_onMouseOver} onTouchStart={_onMouseOver}>
            <i className={iconClasses}></i>
            <span>{label}</span>
        </button>
    )
}
