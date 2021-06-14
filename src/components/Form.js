import React, {useContext, useState} from 'react'
import { BooksContext } from '../contexts/BooksContext'

const Form = () => {
    const {addBook} = useContext(BooksContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Book Title" onChange={e => setTitle(e.target.value)} required/>
                <input type="text" value={author} placeholder="Author Name" onChange={e => setAuthor(e.target.value)} required/>
                <input type="submit" value="add book"  />
            </form>
        </div>
    )
}

export default Form
