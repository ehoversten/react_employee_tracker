import React from 'react';


function EmployeeList(props) {

    return (
        <div className="employee-list">
            <ul className="list-group">
                {props.employees.map(user => (
                    <li key={user.id}>Name: {user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList;
