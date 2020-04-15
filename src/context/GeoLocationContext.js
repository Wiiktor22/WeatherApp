import React, { createContext } from 'react';

export const GeoLocationContext = createContext();

class GeoLocationContextProvider extends React.Component {
    state = {
        lat: '52.2296',
        long: '21.0122'
    }
    render() {
        return (
            <GeoLocationContext.Provider value={{...this.state}}>
                {this.props.children}
            </GeoLocationContext.Provider>
        )
    }
}

export default GeoLocationContextProvider;