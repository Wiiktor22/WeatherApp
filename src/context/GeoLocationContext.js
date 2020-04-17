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
        return (
            <GeoLocationContext.Provider value={{...this.state, getLocation: this.getCurrentLocation}}>
                {this.props.children}
                {console.log(this.state)}
            </GeoLocationContext.Provider>
        )
    }
}

export default geolocated()(GeoLocationContextProvider);