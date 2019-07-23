import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getMedia } from '../../redux/actions/media';
import _find from "lodash/find";
import DownloadLoader from '../General/download-loader';
import placeholder from '../../static/images/placeholder-bold.png';

class FeaturedMedia extends Component {

    componentDidMount() {
        this.props.getMedia({ include: this.props.mediaId });
    }

    getMediaImage(media) {
        const { large } = media.media_details.sizes;
        const imageUrl = large ? large.source_url : placeholder;
        return imageUrl;
    }

    getClasses() {
        let classes = ['entry__media'];
        const { mediaObj } = this.props;
        const { large } = mediaObj ? mediaObj.media_details.sizes : {};
        const imageUrl = large ? large.source_url : placeholder;
        if (imageUrl === placeholder) classes.push(['entry__media--placeholder']);
        if (this.props.isMain) classes.push(['entry__media--main']);
        return classes.join(' ');
    }

    renderImage(mediaObj) {
        const imageUrl = this.getMediaImage(mediaObj);

        const style = {
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        return (<div className="entry__media-figure__src" style={style} />);
    }

    render() {
        const { mediaObj } = this.props;
        return (
            <div className={this.getClasses()}>{mediaObj ? this.renderImage(mediaObj) : <DownloadLoader />}</div>
        );
    }
}

// Binds Query / Query Result
const mapStateToProps = (store, props) => {
    const { media } = store;
    const mediaObj = _find(media, { id: props.mediaId }); 

    return ({ mediaObj });
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ getMedia }, dispatch); 

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMedia);