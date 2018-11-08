import React, {Component} from 'react';

export default class Modal extends Component {
    constructor() {
        super()
        this.state = {
            formStatus: {
                submitted: false,
            }
        }
    }

    render() {
        return(
            <div className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <form onSubmit = { this.props.onFormSubmit }>
                        <input type='email' name='email' id='email' placeholder='example@email.exp' required />
                        <input type='text' name='name' id='name' placeholder='Your Name' required />
                        <input type='submit' value='Submit'/>
                    </form>
                </div>
            </div>
        )
    }
}