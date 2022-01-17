import React from 'react';
import classnames from 'classnames';

import { getExcerpt, getContent } from './../../../utilities/wordpress/wpPost';

const Content = props => {
    const content = props.isSingle ? getContent(props) : getExcerpt(props);

    return <div className={classnames(['entry__content', {
        [`entry__content--excerpt`]: !props.isSingle,
    }])} dangerouslySetInnerHTML={content} />;
}

export default Content;