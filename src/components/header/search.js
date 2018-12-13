import React, { Component } from 'react';
//import { withRouter } from "react-router-dom";

class Search extends Component {
    componentDidMount() {
        if (this.props.isSearch) {
            this.searchInput.focus();
            const tempValue = this.props.searchTerm;
            this.searchInput.value = '';
            this.searchInput.value = tempValue;
        }
    }

    handleSearch(event) {
        event.preventDefault();
        const searchTerm = event.target.value;
        if (0 < searchTerm.length) {
            this.props.history.push(`/search/${searchTerm}`);
        } else {
            this.props.history.push('/');
        }
    }

    submit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="header__search header-search col col-lg-4">
                <form onSubmit={this.submit} className="search-form">
                    <label className="show-for-sr">Search this website</label>
                    <div className="input-group">
                        <input type="search"
                            value={this.props.searchTerm}
                            ref={(input) => this.searchInput = input}
                            onChange={this.handleSearch.bind(this)}
                            className="input-group-field"
                            placeholder="Enter keyword..." />
                        <div className="input-group-button">
                            <button type="submit" className="button">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

//export default withRouter(Search);
export default Search;