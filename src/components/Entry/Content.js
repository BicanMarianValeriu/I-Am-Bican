import React from 'react';
import classNames from 'classnames';

import { getExcerpt, getContent } from '../../utilities/wordpress/wpPost';

const Content = props => {
    const { type } = props;

    let wrapperClass = [`${type}__content`, {
        [`${type}__content--excerpt`]: !props.isSingle,
    }];

    wrapperClass = classNames(wrapperClass);

    const content = props.isSingle ? getContent(props) : getExcerpt(props);

    return <div className={wrapperClass} dangerouslySetInnerHTML={content} />;
}

export default Content;