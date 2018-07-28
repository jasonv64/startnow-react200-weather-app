import { connect } from 'react-redux';
import search from './search';

function mapStoretoProps(store) {
    return {
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
        name: store.search.name,
        noResult: store.search.noResult,
        pending: store.search.pending,
    }
}

export default connect(mapStoretoProps)(search);