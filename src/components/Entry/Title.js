import React from 'react';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { getTitle } from '../../utilities/wordpress/wpPost';

const Title = props => {
    const { type, slug, className } = props;

    // Title
    const title = getTitle(props);

    // Class   
    const headingClass = classnames(`${type}__title`, {
        [className]: className !== undefined
    });

    return (
        <h1 className={headingClass}>{props.isSingle ?
            <span dangerouslySetInnerHTML={title}></span> :
            <Link to={`/${type}/${slug}/`} dangerouslySetInnerHTML={title}></Link>
        }</h1>
    );
};

export default withRouter(Title);