import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getTitle } from '../../utilities/functions';

const Title = (props) => {
    const { type, slug } = props;

    // Title
    let title = getTitle(props); 

    // Class
    let headingClass = ['entry__title'];

    return (<h1 className={headingClass.join(' ')}>{
        props.isSingle ?
            <span dangerouslySetInnerHTML={title}></span> :
            <Link to={`${type}/${slug}`} dangerouslySetInnerHTML={title}></Link>
    }</h1>);
};

export default withRouter(Title);