import React from 'react';

export default class History extends React.Component {

    render() {
        console.log(this.props.searchResults);
        return (
                <div className='card mb-3 display-background'>
                    <div className='card-header text-white'>Search History</div>
                    <div className='card-body'>
                        <table className='table table-sm table-hover'>
                            <thead>
                                <tr>
                                    <th>City Searched</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.searchResults.map(item =>
                                    <tr key={item.date + item.time}> 
                                        <td><small>{item.city}</small></td>
                                        <td><p className='mb-0'><small>{item.date}   at   {item.time}</small></p></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
}