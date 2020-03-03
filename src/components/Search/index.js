import React from 'react';


function Search(props) {
    return (
        <div className="form-search">
            <form>
                <label htmlFor="search">Search by Last Name:</label>
                <input 
                    type="text" 
                    name="search"
                    onChange={props.handleInputChange}
                    value={props.search}
                />
                <button type="submit" onClick={props.handleFormSubmit}>Search</button>
            </form>
            <br/>
        </div>
    )
}


export default Search;