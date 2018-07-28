import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
    return {
        searchResults: store.search.searchResults,
    };
}

export default connect(mapStoreToProps)(History);