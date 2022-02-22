import React from 'react';

export default class Gallery extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <section className="gallery" id="gallery">
                <div className="gallery__item gallery__item--1"></div>
                <div className="gallery__item gallery__item--2"></div>
                <div className="gallery__item gallery__item--3"></div>
                <div className="gallery__item gallery__item--4"></div>
                <div className="gallery__item gallery__item--5"></div>
                <div className="gallery__item gallery__item--6"></div>
                <div className="gallery__item gallery__item--7"></div>
                <div className="gallery__item gallery__item--8"></div>
                <div className="gallery__item gallery__item--9"></div>
            </section>
        );
    }
}
