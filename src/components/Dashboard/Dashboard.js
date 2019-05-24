import React, { Component } from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import axios from 'axios'
export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             houses: []
        }
    }
    componentDidMount(){
        this.getHouses()
    }
    getHouses = () => {
        axios.get('/api/houses/').then((res) => {
            this.setState({houses: res.data})
            console.log(res.data)
        })
    }
    
    render() {
        const listings = this.state.houses.map(house => {
            return (
                <div className='listing'>
                    <h1>{house.name}</h1>
                    <h3>{house.address}</h3>
                    <h3>{house.price}</h3>
                </div>
            )
            
        })
        return (
            <Router>
                <div className='dashboard'>
                    <section className="dashboard-head">
                        <h1>Dashboard</h1>
                        <Link to='/wizard'><button className="add-new-btn">Add New Property</button></Link>
                        <hr/>
                    </section>
                    <section className="listing-body">
                        <h3>Home Listings</h3>
                        {listings}
                    </section>
                </div>
            </Router>
        )
    }
}

export default Dashboard
