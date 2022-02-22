import React from 'react';

export default class Contact extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <footer className="contact" id="contact">
                <div className="contact__header">Contact us</div>
                <div className="contact__address">
                    <span>Address:</span><pre> </pre>
                    <span className="contact--color">Fitness Alley 1 00100 Helsinki</span>
                </div>
                <div className="contact__phone">
                    <span>Phone:</span><pre> </pre>
                    <span className="contact--color">050-66677788</span>                    
                </div>
                <div className="contact__email">
                    <span>Email:</span><pre> </pre>
                    <span className="contact--color">fitzone@gmail.com</span>                    
                </div>
            </footer> 
        );
    }
}
