import React, { Component } from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'

export class Wizard extends Component {
    render() {
        return (
            <Router>
                <div className='wizard'>
                    <section className="wizard-head">
                        <h1>Add New Listing</h1>
                       <Link to='/'><button className='cancel-btn'>Cancel</button></Link>
                    </section>
                    <section className="form-section">
                        <form action="">
                            <h3>Property Name</h3>
                            <input type="text"/>
                            <h3>Address</h3>
                            <input type="text"/>
                            <h3>City</h3>
                            <input type="text"/>
                            <h3>State</h3>
                            <input type="text"/>
                            <h3>Zip</h3>
                            <input type="number"/>
                        </form>
                    </section>
                    <section className="wizard-bottom">
                        <button className='complete-btn'>Complete</button>
                    </section>
                </div>
            </Router>
        )
    }
}

export default Wizard
