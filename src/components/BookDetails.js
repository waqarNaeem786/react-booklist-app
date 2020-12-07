import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'
const BooKDetails = ({ book }) => {
       const{ dispatch } = useContext(BookContext)
    return(
        <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
            <div className="title">
                {book.length}
            </div>
    <div className='author'>{book.author}</div> 
        </li>


    )
}
export default BooKDetails