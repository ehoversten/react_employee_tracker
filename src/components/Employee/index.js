import React, { Component } from 'react';
import EmployeeList from '../EmployeeList';
import axios from 'axios';


class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            employees: []
        }
    }

    // When this component mounts, search the Placeholder API for User data
    componentDidMount() {
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url)
            .then(res => {
                // test to see what data we get back
                console.log(res.data);
                // update state with User data
                this.setState({
                    employees: res.data
                })
            }).catch(err => {
                if(err) console.log(err);
            })
    }

    render() {
        return (
          <div className="employee-container">
            <hr />
            <h3>Employee Roster:</h3>
            <hr />
            <EmployeeList employees={this.state.employees} />
          </div>
        );
    }

}

export default Employee;



// }
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": { 5 items },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": { 3 items }
// }