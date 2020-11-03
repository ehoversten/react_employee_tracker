import React from 'react';


function EmployeeList(props) {

  return (
    <div className="employee-list">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
            {props.employees.map(user => (
              <tr key={user.login.uuid}>
                  <th scope="row">#</th>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.email}</td>
                  <td>{user.location.city}</td>
                  <td>{user.location.country}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
