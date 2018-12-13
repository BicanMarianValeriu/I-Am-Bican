import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDispatcher, FETCH_MEDIA_FULFILLED } from '../../actions/actions';
import DownloadLoader from '../download-loader';
import placeholder from '../../assets/images/placeholder-bold.png';
import { find } from "lodash";
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';

// Server Side Stuff
const frontload = async props => await props.fetchDispatcher('wp/v2/media/' + props.mediaId, {}, {
    success: FETCH_MEDIA_FULFILLED
});

class FeaturedMedia extends Component { 

    componentWillReceiveProps(nextProps) { 
        if(nextProps.fetchedMedia === undefined) {
            this.props.fetchDispatcher('wp/v2/media/' + this.props.mediaId, {}, { success: FETCH_MEDIA_FULFILLED }); 
        }
    }

    getMediaImage(fetchedMedia) {
        const { medium_large } = fetchedMedia.media_details.sizes;
        let imageUrl = medium_large ? medium_large.source_url : placeholder;
        return imageUrl;
    }

    getClasses() {
        let classes = ['entry__media', 'box-shadow', 'box-shadow--big'];
        const { fetchedMedia } = this.props;
        const { medium_large } = fetchedMedia ? fetchedMedia.media_details.sizes : {};
        let imageUrl = medium_large ? medium_large.source_url : placeholder;
        if (imageUrl === placeholder) classes.push(['entry__media--placeholder']);
        return classes.join(' ');
    }

    renderImage(fetchedMedia) {
        const imageUrl = this.getMediaImage(fetchedMedia);

        const style = {
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        return (<div className="entry__media-figure__src" style={style} />);
    }

    render() {
        const { fetchedMedia } = this.props;
        return (
            <div className={this.getClasses()}>{fetchedMedia ? this.renderImage(fetchedMedia) : <DownloadLoader />}</div>
        );
    }
}

// Binds Query / Query Result
const mapStateToProps = (store, props) => {
    const { api: { posts } } = store;
    let mediaPost = find(posts, { featured_media: props.mediaId });
    let fetchedMedia = mediaPost.featured_object;
    return ({ fetchedMedia });
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ fetchDispatcher }, dispatch);

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
})(FeaturedMedia));