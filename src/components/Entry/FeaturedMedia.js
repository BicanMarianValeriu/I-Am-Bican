import React, { Component } from 'react';
import { connect } from 'react-redux';
import Img from 'react-image';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { getMedia } from '../../redux/actions/media';
import _find from "lodash/find";
import DownloadLoader from '../General/download-loader';
import placeholder from '../../static/images/placeholder-bold.png';

class FeaturedMedia extends Component {
    componentDidMount() {
        const { getMedia, mediaId } = this.props;
        getMedia({ include: mediaId });
    }

    getMediaImages() {
        const { mediaObj = {} } = this.props;

        const { media_details: {
            sizes: {
                thumbnail: { source_url: lowRes = '' } = {},
                medium_large: { source_url: highRes = '' } = {}
            } = {}
        } = {} } = mediaObj;

        return [highRes, lowRes];
    }

    getClasses() {
        const { mediaObj = {} } = this.props;
        return classNames('entry__media', {
            'entry__media--loading': mediaObj === false
        });
    }

    renderImage() {
        return (
            <Img src={this.getMediaImages()}
                className="entry__media-src"
                container={children => <div className="entry__media-wrapper">{children}</div>}
                unloader={<img className="entry__media-src" alt="IAmBican Placeholder" src={placeholder} />}
                loader={<DownloadLoader />}
            />
        );
    }

    render() {
        return (
            <div className={this.getClasses()}>{this.renderImage()}</div>
        );
    }
}

// Binds Query / Query Result
const mapStateToProps = (store, props) => {
    const { media } = store;
    const mediaObj = _find(media, { id: props.mediaId }) || false;

    return ({ mediaObj });
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ getMedia }, dispatch);

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMedia);