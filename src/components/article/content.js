import React, { Component } from 'react';

import { getExcerpt, getContent } from './../../functions/functions';

class Content extends Component {

    getClasses() {
        let classes = ['entry__content']; 
        return classes.join(' ');
    }

    getContent() {
        return this.props.isSingle ? getContent(this.props) : getExcerpt(this.props);
    }

    render() {
        return (
            <div className={this.getClasses()} dangerouslySetInnerHTML={this.getContent()} />
        );
    }
}

export default Content;