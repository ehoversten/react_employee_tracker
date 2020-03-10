import React, { Component } from 'react';
import EmployeeList from '../EmployeeList';
import Search from '../Search';
import axios from 'axios';


class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            employees: [],
            filtered: []
        }
    }

    // When this component mounts, search the Placeholder API for User data
    componentDidMount() {
        let url = "https://randomuser.me/api/?results=100";
        axios.get(url)
            .then(res => {
                // test to see what data we get back
                // console.log("Data: ");
                let data = res.data.results;

                // update state with User data
                this.setState({
                    employees: data,
                    filtered: data
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

        let filteredEmp = this.state.employees.filter(user => {
        //   return user.name.last.indexOf(value.toLowerCase()) !== -1;
          return user.name.last.toLowerCase().indexOf(value.toLowerCase()) === 0;
        });

        this.setState({
          [name]: value,
          filtered: filteredEmp
        });
    }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     console.log("Clicked");
    // }

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
            <h5>Number: {this.state.filtered.length}</h5>
            <hr />
            { this.state.filtered.length > 0 ? 
            <EmployeeList employees={this.state.filtered} />
            :
            <EmployeeList employees={this.state.employees} />
            }
          </div>
        );
    }
}

export default Employee;
