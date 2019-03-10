import React from 'react';

import { getExcerpt, getContent } from '../../utilities/functions';


const Content = props => {
    const { type } = props;

    let wrapperClass = [`${type}__content`];

    let content = props.isSingle ? getContent(props) : getExcerpt(props);

    return <div className={wrapperClass.join(' ')} dangerouslySetInnerHTML={content} />;
}

export default Content;