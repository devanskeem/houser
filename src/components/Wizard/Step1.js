import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store, { UPDATE_PROPERTY_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP } from '../../store'
export class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
           reduxState: store.getState()
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState()
            })
        })
    }

    updatePropertyName = (propertyName) => {
        store.dispatch({payload: propertyName, type: UPDATE_PROPERTY_NAME})
    }
    updateAddress = (address) => {
        store.dispatch({payload: address, type: UPDATE_ADDRESS})
    }
    updateCity = (city) => {
        store.dispatch({payload: city, type: UPDATE_CITY})
    }
    updateState = (state) => {
        store.dispatch({payload: state, type: UPDATE_STATE})
    }
    updateZip = (zip) => {
        store.dispatch({payload: zip, type: UPDATE_ZIP})
    }
    render() {
        return (
            <div>
                <section className="form-section">
                    <form action="">
                        <h3>Property Name</h3>
                        <input type="text" value={this.state.reduxState.property_name} 
                            onChange={(e) => this.updatePropertyName(e.target.value)} />
                        <h3>Address</h3>
                        <input type="text" value={this.state.reduxState.address} 
                            onChange={(e) => this.updateAddress(e.target.value)} />
                        <h3>City</h3>
                        <input type="text" value={this.state.reduxState.city} 
                            onChange={(e) => this.updateCity(e.target.value)} />                       
                        <h3>State</h3>
                        <input type="text" value={this.state.reduxState.state} 
                            onChange={(e) => this.updateState(e.target.value)} />                        
                        <h3>Zip</h3>
                        <input type="text" value={this.state.reduxState.zip} 
                            onChange={(e) => this.updateZip(e.target.value)} />                    </form>
                </section>
                <section className="wizard-bottom">
                    <Link to='/wizard/step2'><button className='next-btn' >Next Step</button></Link>
                </section>
            </div>
        )
    }
}

export default Step1
//


