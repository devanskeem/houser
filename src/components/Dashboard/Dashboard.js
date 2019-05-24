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
    getHouses = async () => {
        await axios.get('/api/houses/').then((res) => {
            this.setState({houses: res.data})
            console.log(res.data)
            this.forceUpdate()
        })
    }
    deleteHouse = (id) => {
        axios.post(`/api/delete/${id}`)
        this.getHouses()
    }
    
    render() {
        const listings = this.state.houses.map(house => {
            return (
                <div className='listing'>
                    <div>
                        {/* <img src={house.imgUrl} alt=""/> */}
                        {house.imgUrl}
                    </div>
                    <div>
                        <button onClick={() => this.deleteHouse(house.id)}>X</button>
                        <h3>{house.property_name}</h3>
                        <h5>Address: {house.address}</h5>
                        <h5>City: {house.city}</h5>
                        <h5>State: {house.state}</h5>
                        <h5>Zip: {house.zip}</h5>
                    </div>
                    <div>
                        <h5>Monthly Mortgage: {house.mortgage}</h5>
                        <h5>Monthly Rent: {house.rent}</h5>
                    </div>
                    
                </div>
                
            )
            
        })
        return (
            <Router>
                <div className='dashboard'>
                    <section className="dashboard-head">
                        <h1>Dashboard</h1>
                        <Link to='/wizard/step1'><button className="add-new-btn">Add New Property</button></Link>
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
