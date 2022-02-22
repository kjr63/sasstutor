import React from 'react';

function ListItem (props) {
    return (
        <div className="dynamic2__slist__item">
            <div className="dynamic2__slist__item-1">{props.fname}</div>
            <div className="dynamic2__slist__item-2">{props.lname}</div>
        </div>
    )
}

class StudentList extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="dynamic2__slist">
                <div className="dynamic2__slist__header">
                    <div className="dynamic2__slist__header-1">FirstName</div>
                    <div className="dynamic2__slist__header-2">LastName</div>
                </div>
                {   this.props.sList.map (
                        (item,index) => 
                        <ListItem key = {index} 
                              fname = {item.firstName} 
                              lname = {item.lastName}
                        />
                    )
                } 
            </div>            
        )
    }
}

export default class Dynamic2 extends React.Component {
    constructor (props) {
        super(props);
        this.mockData = this.mockData.bind(this);
    }
    mockData () {
        let arraySize = 4;
        let data = {
            firstName: "Bill",
            lastName: "Jackson"
        }
        let dataArray = [];
        let i;
        for (i=0; i < arraySize; i++) {
            dataArray[i] = data;
        }
        return dataArray;
    }
    render () {     
        return (
            <section className="dynamic2">
                <StudentList sList = {this.mockData()} />                        
            </section>
        );
    }
}
