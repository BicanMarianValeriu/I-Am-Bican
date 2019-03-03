import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { fetchDispatcher, FETCH_MEDIA_FULFILLED } from '../../api/actions/actions';
import { find } from "lodash";
import DownloadLoader from '../download-loader';
import placeholder from '../../static/images/placeholder-bold.png';

// Server Side Stuff
const frontload = async props => await props.fetchDispatcher('wp/v2/media/' + props.mediaId, {}, {
    success: FETCH_MEDIA_FULFILLED
});

class FeaturedMedia extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.fetchedMedia === undefined) {
            this.props.fetchDispatcher('wp/v2/media/' + this.props.mediaId, {}, { success: FETCH_MEDIA_FULFILLED });
        }
    }

    shouldComponentUpdate(nextProps) {
        // When we have finished fetching the Media
        return (nextProps.fetchedMedia !== undefined);
    }

    getMediaImage(fetchedMedia) {
        const { large } = fetchedMedia.media_details.sizes;
        let imageUrl = large ? large.source_url : placeholder;
        return imageUrl;
    }

    getClasses() {
        let classes = ['entry__media'];
        const { fetchedMedia } = this.props;
        const { large } = fetchedMedia ? fetchedMedia.media_details.sizes : {};
        let imageUrl = large ? large.source_url : placeholder;
        if (imageUrl === placeholder) classes.push(['entry__media--placeholder']);
        if (this.props.isMain) classes.push(['entry__media--main']);
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