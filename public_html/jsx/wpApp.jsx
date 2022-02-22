import React from 'react';
import Navbar from "./component/navbar.jsx";
import Header from "./component/header.jsx";
import Info from "./component/info.jsx";
import Gallery from "./component/gallery.jsx";
import Catalog from "./component/catalog.jsx";
import Blog from "./component/blog.jsx";
import Contact from "./component/contact.jsx";
import Modal from "./component/modal.jsx";
import Dynamic1 from "./component/dynamic1.jsx";
import Dynamic2 from "./component/dynamic2.jsx";

export default class WpApp extends React.Component {
    constructor (props) {
        super(props);
        //console.log("app constructor "+square(4));
        this.sum = this.sum.bind(this); //spread testi
    }
    
    sum(x, y) {
      return x + y;
    }
    
    render () {
        const numbers = [2, 2];
        console.log ( this.sum (...numbers) );
        return (
            <div>
                <Navbar />            
                <main>
                    <Header />
                    <Info />
                    <Gallery />
                    <Catalog />
                    <Blog />
                    <Contact />
                    <Dynamic1 />
                    <Dynamic2 />
                </main>
                <Modal />                
            </div>
        );
    }
}
