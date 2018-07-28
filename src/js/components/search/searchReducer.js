const defaultState = {
    search: '',
    searchResults: [],
    lat: '',
    long: '',
    temp: '',
    pressure: '',
    humidity: '',
    minTemp: '',
    maxTemp: '',
    windSpeed: '',
    noResult: true,
    pending: false
};

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH': {
            return{
                ...state,
                search: payload.search
            };
        }
        case 'UPDATE_SEARCH_RESULTS' : {
            return {
                ...state,
                searchResults: [
                    ...state.searchResults,
                    {
                        city: payload.search,
                        date: payload.formatedDate,
                        time: payload.formatedTime
                    }
                ]
            };
        }
        case 'SEARCH_CLICK_PENDING': {
            return {
                ...state,
                pending: true,
            };
        }
        case 'SEARCH_CLICK_FULFILLED': {
            return {
                ...state,
                //these values are coming from our axios call
                lat: payload.coord.lat,
                long: payload.coord.long,
                temp: payload.main.temp,
                pressure: payload.main.pressure,
                humidity: payload.main.humidity,
                minTemp: payload.main.temp_min,
                maxTemp: payload.main.temp_max,
                windSpeed: payload.wind.speed,
                name: payload.name,
                noResult: false,
                pending: false
            }
        }
        default: {
            return state;
        }
    }
}