import React from 'react';

export default class Catalog extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <section className="catalog" id="catalog">
                <div className="catalog__header">
                    CATALOG
                </div>
                <div className="catalog__content">
                    <div className="catalog__content__1" id="catalog1">
                        <div className="catalog__content__1__header"></div>
                        <div className="catalog__content__1__headertext">Catalog 1</div>
                        <ul className="catalog__content__1__content">
                            <li className="c_item--1">item 1</li>
                            <li className="c_item--1">item 2</li>
                            <li className="">item 3</li>
                        </ul>
                    </div>               
                    <div className="catalog__content__2" id="catalog2">
                        <div className="catalog__content__2__header"></div>
                        <div className="catalog__content__2__headertext">Catalog 2</div>
                        <ul className="catalog__content__2__content">
                            <li className="c_item--1">item 1</li>
                            <li className="c_item--1">item 2</li>
                            <li className="">item 3</li>
                        </ul>                        
                    </div>               
                    <div className="catalog__content__3" id="catalog3">
                        <div className="catalog__content__3__header"></div>
                        <div className="catalog__content__3__headertext">Catalog 3</div>
                        <ul className="catalog__content__3__content">
                            <li className="c_item--1">item 1</li>
                            <li className="c_item--1">item 2</li>
                            <li className="">item 3</li>
                        </ul> 
                    </div>
                </div>
            </section> 
        );
    }
}
