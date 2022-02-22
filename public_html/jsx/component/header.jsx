import React from 'react';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <header className="sonheader" id="sonheader">
                <div className="sonheader__empty1"></div>
                <div className="sonheader__content">
                    <div className="sonheader__content__empty"></div>
                    <div className="sonheader__content__text">
                        <div className="sonheader__content__text__top">
                            <span className="sonheader__content__text__top--colored">JOIN</span>
                            <span className="sonheader__content__text__top--white">NOW</span>
                        </div>
                        <div className="sonheader__content__text__bottom">
                            GET IN SHAPE TODAY
                        </div>
                    </div>
                </div>
                <div className="sonheader__empty2"></div>
            </header>
        );
    }
}
