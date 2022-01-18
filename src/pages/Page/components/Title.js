import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { getTitle } from './../../../utilities/wordpress/wpPost';

const Title = props => {
    const { type, slug, className } = props;

    // Title
    const title = getTitle(props);

    // Class   
    const headingClass = classnames('entry__title', {
        [className]: className !== undefined
    });

    return (
        <h1 className={headingClass}>{props.isSingle ?
            <span dangerouslySetInnerHTML={title}></span> :
            <Link to={`/${type}/${slug}/`} dangerouslySetInnerHTML={title} />
        }</h1>
    );
};

export default Title;