import React from 'react';


function Search(props) {
    return (
        <div className="form-search">
            <form>
                <label htmlFor="search-term">Search by Last Name:</label>
                <input 
                    type="text" 
                    name="search-term"
                    handleChange={props.handleInputChange}
                />
                <button type="submit" onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    )
}


export default Search;