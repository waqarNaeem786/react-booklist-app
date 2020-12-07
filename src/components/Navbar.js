import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'

const  Navbar = () => {

    const {books} = useContext(BookContext);

    return(
        <div className="navbar">
            <h1>Book List</h1>
    <p>Generally you have {books.length} books to get through</p>
        </div>
    )
}

export default Navbar