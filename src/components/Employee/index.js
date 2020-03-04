import React, { Component } from 'react';
import EmployeeList from '../EmployeeList';
import Search from '../Search';
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
        // let url = "https://jsonplaceholder.typicode.com/users";
        let url = "https://randomuser.me/api/?results=5";
        axios.get(url)
            .then(res => {
                // test to see what data we get back
                console.log("Data: ");
                let data = res.data.results;
                console.log(data);
                console.log(typeof data);

                // update state with User data
                this.setState({
                    employees: data
                })
            }).catch(err => {
                if(err) console.log(err);
            })
    }

    handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // ** Testing ** // Log returned values
        console.log(name, value);
 
        this.setState({
          [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        axios.get("https://jsonplaceholder.typicode.com/users?id=5")
            .then(res => {
                console.log("Data: ")
                // console.log(res.data.results.results);
                let data = res.data.results
                console.log(data);
                console.log(typeof data);

                this.setState({
                    employees: data
                })
            }).catch(err => {
                if(err) {
                    console.log(err);
                }
            });
    }

    render() {
        return (
          <div className="employee-container">
            <Search 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />
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