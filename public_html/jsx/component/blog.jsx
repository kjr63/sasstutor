import React from 'react';

export default class Blog extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <section className="blog" id="blog">
                <div className="blog__image">
                </div>
                <div className="blog__text">
                    <div className="blog__text__item blog__text__item--1">BLOG</div>
                    <div className="blog__text__item blog__text__item--2"><script>document.writeln(new Date())</script></div>
                    <div className="blog__text__item blog__text__item--3">Otsikko</div>
                    <div className="blog__text__item blog__text__item--4">Lorem ipsum</div>
                </div>
            </section>
        );
    }
}
