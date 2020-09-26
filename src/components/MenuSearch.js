import React, { Component } from 'react'

export class MenuButton extends Component {
    render() {
        return (
            <div>
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder={this.props.text}></input>
                        <i class="search link icon"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuButton
