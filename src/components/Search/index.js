import React from 'react';


function Search(props) {
    return (
      <div className="form-search">
        <p>Search by last name to filter returned results</p>
        <form>
          <label htmlFor="search">Search Name:</label>
          <input
            type="text"
            name="search"
            onChange={props.handleInputChange}
            value={props.search}
          />
        </form>
        <br />
      </div>
    );
}


export default Search;