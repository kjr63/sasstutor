import React from 'react';

class ListItem extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <tr>              
                <td>{this.props.fname}</td>
                <td>{this.props.lname}</td>
            </tr>
        )
    }    
}

class StudentList extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="w3-panel">
                <table className="w3-table-all">
                    <thead>
                        <tr className="w3-red">
                            <th>FirstName</th>
                            <th>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.sList.map((item,index) => 
                            <ListItem key = {index} 
                                  fname = {item.firstName} 
                                  lname = {item.lastName}
                            />
                         )
                     }
                    </tbody>
                </table>
            </div>            
        )
    }
}

export default class Dynamic1 extends React.Component {
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
            <section className="dynamic1">
                <StudentList sList = {this.mockData()} />                        
            </section>
        );
    }
}
