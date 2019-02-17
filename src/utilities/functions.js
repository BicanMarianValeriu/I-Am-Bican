import find from 'lodash/find';

/**
 * Get Post Title
 * @param {WP_Post object} data
 * @returns {string} Rendered post tyle
 */
const getTitle = (data) => {
	if (!data) return;
	return { __html: data.title.rendered };
};

/**
 * Get Post Content
 * @param {WP_Post object} data
 * @returns {string} Rendered post content
 */
const getContent = (data) => {
	if (!data) return;
	if (!data.content.protected) {
		return { __html: data.content.rendered };
	}

	return { __html: '<p>This content is password-protected.</p>' };
};

/**
 * Get Post Excerpt
 * @param {WP_Post object} data
 * @returns {string} Rendered post content
 */
const getExcerpt = (data) => {
	if (!data) return;
	if (!data.excerpt) {
		var content = this.getContent(data).__html.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 250);
		return { __html: '<p>' + content + '</p>' };
	} else {
		if (!data.excerpt.protected) {
			if ('image' === data.format && !data.excerpt.rendered) {
				return { __html: data.content.rendered };
			}
			return { __html: data.excerpt.rendered };
		}

		return { __html: '<p>This content is password-protected.</p>' };
	}
};

/**
 * Get Post Time
 * @param {WP_Post object} data 
 * @param {string} format 
 * @returns formated post time
 */
const getTime = (data, format) => {
	if (!data) return;
	if (!format) format = 'h:mm a';
	let date = new Date(data.date);
	return date(format);
};

/**
 * Get Post Date
 * @param {WP_Post object} data 
 * @param {string} format 
 * @returns formated post time
 */
const getDate = (data, format) => {
	if (!data) return;
	if( data.date_human) return data.date_human;
	if (!format) format = 'MMMM Do, YYYY';
	let date = new Date(data.date_gmt);
	return date(format);
};

/**
 * Get Post Featured Media
 * @param {WP_Post object} data 
 * @returns media
 */
const getFeaturedMedia = ( data ) => {
	if ( ! data._embedded ) {
		return false;
	}
	if ( 'undefined' === typeof data._embedded['wp:featuredmedia'] ) {
		return false;
	}
	let media = find( data._embedded['wp:featuredmedia'], function( item ) {
		return ( 'undefined' !== typeof item.source_url );
	} );
	return media;
};

export { getTitle, getExcerpt, getContent, getTime, getDate, getFeaturedMedia };
