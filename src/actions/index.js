import CONST from '../utilities/constants'
import axios from 'axios';


export function fetchWeather(city) {
    const url = `${CONST.ROOT_URL}${CONST.API_KEY}&q=${city},us`;
    const data = axios.get(url);
    return {
        type: CONST.FETCH_WEATHER,
        payload: data
    }
}