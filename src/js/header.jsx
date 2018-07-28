import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='jumbotron' >
                    <h1 className='display-3 text-center'>Origin Weather Application</h1>
                    <p className="lead">Always know if you need an umbrella</p>
                </div>
            </div>
        );
    }
}