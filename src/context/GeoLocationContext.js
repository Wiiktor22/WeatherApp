import React, { createContext } from 'react';
import { geolocated } from "react-geolocated";

export const GeoLocationContext = createContext();

class GeoLocationContextProvider extends React.Component {
    state = {
        lat: '0',
        long: '0'
    }
    getCurrentLocation = () => {
        if (this.props.coords !== null) {
            this.setState({
                lat: this.props.coords.latitude.toString(),
                long: this.props.coords.longitude.toString()
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <GeoLocationContext.Provider value={{...this.state, getLocation: this.getCurrentLocation}}>
                {this.props.children}
            </GeoLocationContext.Provider>
        )
    }
}

export default geolocated()(GeoLocationContextProvider);