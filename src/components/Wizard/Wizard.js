import React, { Component } from 'react'
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import store, { CLEAR_STATE } from '../../store'

export class Wizard extends Component {
    clearState = () => {
        store.dispatch({type: CLEAR_STATE})
        this.props.history.push('/')
    }
    render() {
        return (
            <Router>
                <div className='wizard'>
                    <section className="wizard-head">
                        <h1>Add New Listing</h1>
                       <button className='cancel-btn' onClick={() => this.clearState()}>Cancel</button>
                    </section>
                    <Switch>
                        <Route path='/wizard/step1' component={Step1}/>
                        <Route path='/wizard/step2' component={Step2}/>
                        <Route path='/wizard/step3' component={Step3}/>
                    </Switch>
                </div>
                    
            </Router>
        )
    }
}

export default Wizard
