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
            import(/* webpackChunkName: "swal-contact" */ "../Popups/swal-contact").then(m => setModal(m)).then(m => m && m.default());
            return;
        }

        return modal.default();
    }

    const classNames = classnames('btn', className);
    const iconClasses = classnames(iconClass ? iconClass : ['fal', 'fa-paper-plane']);

    return (
        <button className={classNames} onClick={_onButtonClick} onMouseOver={_onMouseOver} onTouchStart={_onMouseOver}>
            <i className={iconClasses}></i>
            <span>{label}</span>
        </button>
    )
}
