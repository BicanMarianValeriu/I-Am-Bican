import React, { Component, cloneElement, Children } from 'react';
import { Card, CardBody, CardHeader, Collapse, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Accordion extends Component {
    state = {
        open: this.props.open,
    }

    toggleSection = (index) => () => {
        this.setState(({ open }) => ({
            open: index === open ? undefined : index
        }))
    }

    render() {
        return (
            <div className="accordion">
                {Children.map(this.props.children, (child, index) => {
                    if (child.type !== AccordionItem) return null
                    return cloneElement(child, {
                        isOpen: child.props.open || this.state.open === index,
                        onClick: this.toggleSection(index),
                    })
                })}
            </div>
        )
    }
}

Accordion.propTypes = {
    open: PropTypes.number,
}

const AccordionItem = ({ children, isOpen, onClick }) => (
    <Card>
        {Children.map(children, child => {
            if (child.type === AccordionHeader) {
                return cloneElement(child, { onClick, isOpen })
            }

            if (child.type === AccordionBody) {
                return cloneElement(child, { isOpen })
            }

            return null
        })}
    </Card>
)

const AccordionHeader = ({ children, onClick, isOpen }) => {
    const classes = classNames('p-0', {
        'is-active': isOpen,
    });

    const btnClasses = classNames('py-2', 'px-3', 'text-left', {
        'is-active': isOpen
    });

    return (
        <CardHeader className={classes}>
            <h5 className="mb-0">
                <Button className={btnClasses} color="link" onClick={onClick} block>{children}</Button>
            </h5>
        </CardHeader>
    );
}

const AccordionBody = ({ children, isOpen }) => (
    <Collapse isOpen={isOpen}>
        <CardBody className="px-0 py-3">{children}</CardBody>
    </Collapse>
)

Accordion.Item = AccordionItem
Accordion.Header = AccordionHeader
Accordion.Body = AccordionBody