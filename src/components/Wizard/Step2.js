import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store, { UPDATE_IMG_URL } from '../../store'

export class Wizard2 extends Component {
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

    updateImgUrl = (imgUrl) => {
        store.dispatch({payload: imgUrl, type: UPDATE_IMG_URL})
    }
    
    render() {
        return (
            <div>
                <section className="form-section">
                    <form action="">
                        <h3>Image URL</h3>
                        <input type="text" value={this.state.reduxState.imgUrl} 
                            onChange={(e) => this.updateImgUrl(e.target.value)} />
                    </form>
                </section>
                <section className="wizard-bottom">
                    <Link to='/wizard/step1'><button className='next-btn'>Previous Step</button></Link>
                    <Link to='/wizard/step3'><button className='next-btn'>Next Step</button></Link>
                </section>
            </div>
        )
    }
}

export default Wizard2
