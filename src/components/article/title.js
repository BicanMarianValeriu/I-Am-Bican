import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { getTitle } from './../../utilities/functions';

const Title = (props) => {
    const { type, slug } = props;
    const title = <h1 className="entry__title" dangerouslySetInnerHTML={getTitle(props)} />;
    return (
        <header className="entry__header">
            {props.isSingle ? title : <Link to={`${type}/${slug}`}>{title}</Link>}
        </header>
    );
};

export default withRouter(Title);