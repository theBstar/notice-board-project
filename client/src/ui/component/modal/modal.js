import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './modal.css'

export default class Modal extends Component {

    render() {
        const secondInput = ( this.props.inputDetails.type[1] === 'textArea' ) ? (
            ''
        ) : (
            <input 
                type={ this.props.inputDetails.type[1] } 
                className='modal-input' 
                name={ this.props.inputDetails.type[1] } 
                id={ this.props.inputDetails.type[1] }
                placeholder={ this.props.inputDetails.placeholder[1] } 
                required 
            />
        )
        
        console.log("................", this.props.redirectTo)
        return(
            ( !this.props.canClose ) ? (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={()=>{ window.history.back()}}>&times;</span> 
                        <form onSubmit = { this.props.onFormSubmit }>
                            <input 
                                type={ this.props.inputDetails.type[0] } 
                                className='modal-input' 
                                name={ this.props.inputDetails.type[0] } 
                                id={ this.props.inputDetails.type[0] }
                                placeholder={ this.props.inputDetails.placeholder[0] } 
                                required  
                            />
                            { secondInput }
                            <input type='submit' className='modal-input' id='modal-btn' value={ this.props.btnText } />
                        </form>
                    </div>
                </div>
            ): (
               <Redirect to={ this.props.redirectTo } />
            )
        )
    }
}