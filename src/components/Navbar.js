import React, {useContext} from 'react'
import {BooksContext} from '../contexts/BooksContext'
const Navbar = () => {
    const {book} = useContext(BooksContext);
    return (
        <div className="navbar">
            <p>Total No of books available to read {book.length}</p>
        </div>
    )
}

export default Navbar
