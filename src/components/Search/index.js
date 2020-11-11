import React from 'react';


function Search(props) {
    return (
      <div className="form-search">
        <div className="row justify-content-center">
          <div className="col-3">
            <h4>Filter Results:</h4>
            <form>
              <div className="form-group">
                <label htmlFor="search">Search by Last Name:</label>
                <input
                  type="text"
                  name="search"
                  onChange={props.handleInputChange}
                  value={props.search}
                  className="form-control"
                />
              </div>
            </form>
            <button className="btn btn-primary">Clear Form</button>
          </div>
        </div>

        <br />
      </div>
    );
}


export default Search;