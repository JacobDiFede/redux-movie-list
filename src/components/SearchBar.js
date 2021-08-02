import { useState } from "react";
import Button from "react-bootstrap/Button";

const SearchBar = ({ onSearch }) => {
    const [title, setTitle] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSearch(title);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="title">Welcome!</label>
                <input
                    type="text"
                    placeholder="Search for a movie!"
                    onChange={(e) => setTitle(e.target.value)}    
                />
                <Button type="submit">Search</Button>
            </div>
        </form>
    )
}

export default SearchBar;