import React, { Component } from 'react'

export class MenuButton extends Component {
    render() {
        return (
                <a class="ui item">
                    {this.props.text}
                </a>
        )
    }
}

export default MenuButton
