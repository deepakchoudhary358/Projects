import React from "react";

class Employee extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render () {
        console.log(this.props);
        return  (
            <div className="card">
                <div className="card-body">
                    
                <h2>Employee Name : {this.props.name} </h2>
                <h2> Age : {this.props.age} years</h2>
                </div>
            </div>
        );
    }
}


export default Employee;