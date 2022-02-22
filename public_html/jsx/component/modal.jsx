import React from 'react';

export default class Modal extends React.Component {
    constructor (props) {
        super(props);
        this.handleModal = this.handleModal.bind();
    }
    handleModal () {
        document.getElementById('modal').style.display='none';
    }
    render () {     
        return (
            <div id="modal">
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__content__1">
                            <span
                                onClick= {this.handleModal}
                                className="modal__content__1--btn">
                                &times;
                            </span>
                        </div>
                        <p>Some text. Some text. Some text.</p>
                        <p>Some text. Some text. Some text.</p>
                    </div>
                </div>
            </div>
        );
    }
}
