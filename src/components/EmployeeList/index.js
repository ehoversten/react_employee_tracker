import React from 'react';


function EmployeeList(props) {

    return (
        <div className="employee-list">
            <ul className="list-group">
                {props.employees.map(user => (
                    <div key={user.id.value}>
                        <p>Name: {user.name.first} {user.name.last}</p>
                        <p>Email: {user.email}</p>
                        <p>Country: {user.location.country}</p>
                        <br/>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList;
