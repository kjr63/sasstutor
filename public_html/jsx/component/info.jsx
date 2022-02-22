import React from 'react';

export default class Info extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <section className="sonabout" id="sonabout">
                <div>
                    <div className="sonabout__header">Why you join with us</div>
                    <div className="sonabout__textbox">
                        <div className="sonabout__textbox__1">
                            <div className="sonabout__textbox__1__icon">
                                <svg className="sonabout__textbox__1__icon__svg">
                                    <use href="img/sprite.svg#icon-network"></use>
                                </svg>
                            </div>
                            <div className="sonabout__txtbox__1__content">Lorem ipsum</div>
                        </div>
                        <div className="sonabout__textbox__2">
                            <div className="sonabout__textbox__2__icon">
                                <svg className="sonabout__textbox__2__icon__svg">
                                    <use href="img/sprite.svg#icon-station"></use>
                                </svg>                                
                            </div>
                            <div className="sonabout__textbox__2__content">Lorem ipsum</div>                        
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
