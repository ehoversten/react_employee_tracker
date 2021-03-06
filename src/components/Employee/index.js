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
        let url = "https://randomuser.me/api/?nat=us,gb,de,dk,fr&results=100";
        axios.get(url)
            .then(res => {
                // test to see what data we get back
                // console.log("Data: ");
                let data = res.data.results;
                console.log(data);
                // update state with User API data
                this.setState({ employees: data, filtered: data })
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

    handleClick = (event) => {
        console.log("Clear Clicked")
        this.setState({ search: '', filtered: this.state.employees })
    }


    render() {
        return (
          <div className="container">
            <Search 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                handleClick={this.handleClick}
            />
            <hr />
            <h3>Employee Roster:</h3>
            <h5>Number: {this.state.filtered.length}</h5>
            <hr />

            {/* Conditional Rendering  */}
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
