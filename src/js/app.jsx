import React from 'react';
import Header from './header';
import Search from './components/search/index';
import Display from './components/display/index';
import History from './components/history/index';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className="row">
          <Search />
        </div>
        <div className="row">
          <div className="col-md-6">
            <Display />
          </div>
          <div className="col-md-6">
            <History />
          </div>
        </div>
      </div>
    );
  }
}
