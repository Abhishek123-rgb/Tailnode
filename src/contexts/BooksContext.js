import React, {createContext, useState} from 'react'
import uuid from "uuid/dist/v1";
export const BooksContext = createContext();
const BooksContextProvider = (props) => {
    
    const [book, setBook] = useState([
        {title: "Concept Of Physics", author: "Hc Verma", id: 1},
        {title: "Organic Chemistry", author: "Pradeep", id: 2}
    ]);
    const addBook = (title, author) => {
        setBook([...book, {title, author, id: uuid()}])
    }

    const delBook = (id)=>{
        setBook(book.filter(books => books.id !==id));
    }
    return (
        <BooksContext.Provider value={{book, addBook, delBook}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;
