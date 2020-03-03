import React from 'react';


function EmployeeList(props) {

    return (
        <div className="employee-list">
            <ul className="list-group">
                {props.employees.map(user => (
                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Company: {user.company.name}</p>
                        <br/>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList;
