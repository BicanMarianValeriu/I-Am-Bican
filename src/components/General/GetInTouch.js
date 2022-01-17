import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import classnames from 'classnames';

export default function GetInTouch({ iconClass, label, ...props }) {
    const [modal, setModal] = useState(null);

    const onMouseOver = () => {
        if (modal !== null) return;
        import(/* webpackChunkName: "SwalContact" */ "../Popups/Contact").then(m => setModal(m));
    }

    const onClick = () => {
        if (modal === null) {
            import(/* webpackChunkName: "SwalContact" */ "../Popups/Contact")
                .then(m => setModal(m)).then(m => m && m.default());
            return;
        }

        return modal.default();
    }

    const iconClasses = classnames(iconClass ? iconClass : ['fal', 'fa-paper-plane']);

    return (
        <Button {...{
            color: 'primary',
            ...props,
            onClick,
            onMouseOver,
            onTouchStart: onMouseOver
        }}>
            <i className={iconClasses}></i>
            <span>{label}</span>
        </Button>
    )
}
