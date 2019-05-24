import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store, { UPDATE_RENT, UPDATE_MORTGAGE, CLEAR_STATE } from '../../store';
export class Wizard3 extends Component {
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

    clearState = () => {
        store.dispatch({type: CLEAR_STATE})
        this.props.history.push('/')
    }

    updateRent = (rent) => {
        store.dispatch({payload: rent, type: UPDATE_RENT})
    }
    
    updateMortgage = (mortgage) => {
        store.dispatch({payload: mortgage, type: UPDATE_MORTGAGE})
    }
    addHouse = () => {
        const {property_name, address, city, state, zip, img_url, mortgage, rent} = this.state.reduxState;
        axios.post('/api/add', {property_name, address, city, state, zip, img_url, mortgage, rent}).then((res) => {
            this.props.history.push('/')
            // this.clearState()
            console.log(this.state.reduxState)
       })

    }
    render() {
        return (
            <div>
                <section className="form-section">
                    <form action="">
                        <h3>Monthly Mortgage</h3>
                        <input type="number" value={this.state.reduxState.mortgage} 
                            onChange={(e) => this.updateMortgage(e.target.value)} />
                        <h3>Monthly Rent</h3>
                        <input type="number" value={this.state.reduxState.rent} 
                            onChange={(e) => this.updateRent(e.target.value)} />                    </form>
                </section>
                <section className="wizard-bottom">
                    <Link to='/wizard/step2'><button className='next-btn'>Previous Step</button></Link>
                    <button className='complete-btn' onClick={() => this.addHouse()}>Complete</button>
                </section>
            </div>
        )
    }
}

export default Wizard3
