import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { getTitle } from '../../utilities/functions';

const Title = (props) => {
    const { type, slug } = props;

    let headingClass = []; // No Class if is archive
    if (props.isSingle) headingClass.push(['entry__title']);

    const title = <h1 className={headingClass.join(' ')} dangerouslySetInnerHTML={getTitle(props)} />;

    return (props.isSingle ? title : <Link className="entry__title" to={`${type}/${slug}`}>{title}</Link>);
};

export default withRouter(Title);