import React from 'react';

export default class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.handleStarted = this.handleStarted.bind();      
    }
    handleStarted () {
        document.getElementById('modal').style.display='block';
    }
    render () {     
        return (
            <nav className="navbar" id="nav">
                <div className="navbar__logos">
                    <div className="navbar__logos__img">
                        <i className="material-icons navbar__logos__img__icon">fitness_center</i>
                    </div>
                    <div className="navbar__logos__text">
                        <div className="navbar__logos__text__top">
                            ELITE GYM
                        </div>
                        <div className="navbar__logos__text__bottom">
                            FITZ<span className="navbar__logos__text__bottom--o">O</span>NE
                        </div>
                    </div>
                </div>
                <div className="navbar__menu">
                    <div><a href="#sonheader" className="navbar__menu__link">HOME</a></div>
                    <div><a href="#sonabout" className="navbar__menu__link">ABOUT</a></div>
                    <div><a href="#gallery" className="navbar__menu__link">GALLERY</a></div>
                    <div className="navbar__menu__dropdown">
                        <div className="navbar__menu__dropdown__title">
                            <span>CATALOG</span>
                            <i className='fa fa-angle-down'></i>
                        </div>
                        <ul className="navbar__menu__dropdown__content list">
                            <li className="list--item"><a href="#catalog1" className="list--link">CATALOG1</a></li>
                            <li className="list--item"><a href="#catalog2" className="list--link">CATALOG2</a></li>
                            <li className="list--item"><a href="#catalog3" className="list--link">CATALOG3</a></li>
                        </ul>
                    </div>
                    <div><a href="#blog" className="navbar__menu__link">BLOG</a></div>                    
                    <div><a href="#contact" className="navbar__menu__link">CONTACT</a></div>
                </div>
                <div className="navbar__action">
                    <div
                        className="btn btn--animated"
                        onClick= {this.handleStarted}>
                        GET STARTED
                    </div>
                </div>                
            </nav>           
        );
    }
}

//export { Navbar };