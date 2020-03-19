import React from 'react'
import Header from './Header'

class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state= {
            topText:"",
            bottomText:"",
        }
    }

    componentDidMount(event) {
        const {name, value}= event 
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div>
                <Header />
                <label>
                    <input onChange={this.handlechange} type=text name="topText" placeHolder="Top Text" value={this.state.topText}/>
                    <input onChange={this.handlechange} type=text name="bottomText" placeHolder="Bottom Text" value={this.state.bottomText}/>
                    
                </label>
            </div>
        )
    }
}

export default MemeGenerator