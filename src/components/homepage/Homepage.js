import React, { Component } from 'react'
import MenuBar from '../MenuBar'
import UserForm from '../UserForm'

export class Homepage extends Component {
    render() {
        return (
            <div>
            <MenuBar title="Bastien Collin"/>
            <UserForm title={this.props.title} theme={this.props.theme}/> 
            </div>
        )
    }
}

export default Homepage
