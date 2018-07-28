import React from 'react';
import date from 'date-and-time';

import {
    updateSearch,
    updateSearchResults,
    axiosSearch
} from './searchAction'

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.getTime = this.getTime.bind(this);
        this.getDate = this.getDate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.defaultSearch = this.defaultSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    getTime() {
        let now = new Date();
        let currnetTime = date.format(now, 'HH:mm:ss');
        return(currnetTime);
    }

    getDate() {
        let now = new Date();
        let currnetDate = date.format(now, "YYYY/MM/DD");
        return(currnetDate);
    }

    handleSearchInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSearch(value));
    }

    defaultSearch(e) {
        const { dispatch } = this.props;
        const formatedDate = this.getDate();
        const formatedTime = this.getTime();
        //value depends on button clicked
        dispatch(axiosSearch(e.target.value));
        dispatch(updateSearch(e.target.value));
        dispatch(updateSearchResults(e.target.value, formatedDate, formatedTime));
    }

    handleClick() {
        const{ search, dispatch } = this.props;

        if(search === '') {
            return alert(`Can't search nothing!`)
        } else {
            dispatch(axiosSearch(search));
            dispatch(updateSearchResults(search));
        }
    }

    render() {
        
        const search = this.props.search;
        return (
            <div className='container'>
                <div className="default">
                    <button className="def-button border-dark"
                    value="San Diego"
                    onClick={ this.defaultSearch }
                    >San Diego</button>
                    <button className="def-button border-dark"
                    value="New York"
                    onClick={ this.defaultSearch }
                    >New York</button>
                    <button className="def-button border-dark"
                    value="Los Angeles"
                    onClick={ this.defaultSearch }
                    >Los Angeles</button>
                    <button className="def-button border-dark"
                    value="London"
                    onClick={ this.defaultSearch }
                    >London</button>
                    <button className="def-button border-dark"
                    value="Tokyo"
                    onClick={ this.defaultSearch }
                    >Tokyo</button>
                </div>
                <div className="input">
                    <input className="input-area input-group" type="text" 
                    onChange={this.handleSearchInput} placeholder="search..."></input>
                    <button className="input-group-append"
                    value={search}
                    onClick={this.handleClick}
                    >Go!</button>
                </div>
            </div>
        )
    }
}

