import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class OtherPage extends Component {
    render() {
        return (
            <div>
                some othe rpage
                <Link to="/">Go back home</Link>
            </div>
        )
    }
}
