import axios from 'axios';
//axios calls
export function updateSearch(search) {
    return {
        type: 'UPDATE_SEARCH',
        payload: { search }
    };
}

export function updateSearchResults(search) {
    return {
        type: 'UPDATE_SEARCH_RESULTS',
        payload: { search }
    }
}


export function axiosSearch(search) {

    return {
    type: 'SEARCH_CLICK',
    payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + search + '&appid=f7c0b10be6c00cf494c2a8637a102aa7')
            .then((res) => res.data)
    }
}