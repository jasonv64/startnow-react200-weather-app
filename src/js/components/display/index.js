import { connect } from 'react-redux';
import Display from './display';

function mapStoreToProps(store) {
    return{
        search: store.search.search,
        searchResults: store.search.searchResults,
        lat: store.search.lat,
        long: store.search.long,
        temp: store.search.temp,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        minTemp: store.search.minTemp,
        maxTemp: store.search.maxTemp,
        windSpeed: store.search.windSpeed,
        pending: store.search.pending,
        noResult: store.search.noResult,
        name: store.search.name
    }
}

export default connect(mapStoreToProps)(Display);