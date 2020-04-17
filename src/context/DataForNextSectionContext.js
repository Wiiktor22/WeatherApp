import React, { createContext, Component } from 'react';

export const DataForNextSectionContext = createContext();

class DataForNextSectionContextProvider extends Component {
    state = { 
        data: ''
    }
    getData = data => {
        this.setState({
            data
        })
    }
    render() {
        return (
            <DataForNextSectionContext.Provider value={{...this.state, getData: this.getData}}>
                {this.props.children}
            </DataForNextSectionContext.Provider>
        )
    }
}

export default DataForNextSectionContextProvider;