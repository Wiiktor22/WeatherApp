import clearDay from './../../assets/icons/clear-day.svg';
import clearNight from './../../assets/icons/clear-night.svg';
import cloudy from './../../assets/icons/cloudy.svg';
import fog from './../../assets/icons/fog.svg';
import hail from './../../assets/icons/hail.svg';
import partlyCloudyDay from './../../assets/icons/partly-cloudy-day.svg';
import partlyCloudyNight from './../../assets/icons/partly-cloudy-night.svg';
import rain from './../../assets/icons/rain.svg';
import sleet from './../../assets/icons/sleet.svg';
import snow from './../../assets/icons/snow.svg';
import thunderstorm from './../../assets/icons/thunderstorm.svg';
import wind from './../../assets/icons/wind.svg';

export const getIcon = category => {
    switch (category) {
        case 'clear-day':
            return clearDay
        case 'clear-night':
            return clearNight
        case 'cloudy':
            return cloudy
        case 'fog':
            return fog
        case 'hail':
            return hail
        case 'partly-cloudy-day':
            return partlyCloudyDay
        case 'partly-cloudy-night':
            return partlyCloudyNight
        case 'rain':
            return rain
        case 'sleet':
            return sleet
        case 'snow':
            return snow
        case 'thunderstorm':
            return thunderstorm
        case 'wind':
            return wind
        default:
            return null
    }
}

export const defineDay = day => {
    switch (day) {
        case 0:
            return 'niedziela'
        case 1:
            return 'poniedziałek'
        case 2:
            return 'wtorek'
        case 3:
            return 'środa'
        case 4:
            return 'czwartek'
        case 5:
            return 'piątek'
        case 6:
            return 'sobota'
        default:
            return 'błąd'
    }
}

export const defineMonth = month => {
    switch (month) {
        case 0:
            return 'Sty'
        case 1:
            return 'Lut'
        case 2: 
            return 'Mar'
        case 3: 
            return 'Kwi'
        case 4:
            return 'Maj'
        case 5:
            return 'Cze'
        case 6:
            return 'Lip'
        case 7:
            return 'Sie'
        case 8:
            return 'Wrz'
        case 9:
            return 'Paź'
        case 10: 
            return 'Lis'
        case 11: 
            return 'Gru'
        default:
            return 'Błąd'
    }
}

export const defineWindDirection = direction => {
    if (direction >= 22 && direction < 67) {
        return 'NE'
    } else if (direction >= 67 && direction < 112) {
        return 'E'
    } else if (direction >= 112 && direction < 157) {
        return 'SE'
    } else if (direction >= 157 && direction < 202) {
        return 'S'
    } else if (direction >= 202 && direction < 247) {
        return 'SW'
    } else if (direction >= 247 && direction < 292) {
        return 'W'
    } else if (direction >= 292 && direction < 337) {
        return 'NW'
    } else {
        return 'N'
    }
}