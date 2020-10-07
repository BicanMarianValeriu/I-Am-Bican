import React from 'react';
import classnames from 'classnames';

import { getExcerpt, getContent } from '../../utilities/wordpress/wpPost';

const Content = props => {
    const { type } = props;

    const content = props.isSingle ? getContent(props) : getExcerpt(props);

    return <div className={classnames([`${type}__content`, {
        [`${type}__content--excerpt`]: !props.isSingle,
    }])} dangerouslySetInnerHTML={content} />;
}

export default Content;