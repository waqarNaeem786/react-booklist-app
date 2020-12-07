import React from 'react'
import NewBookForm from './components/BookForm';
import Booklist from './components/BookList';
import Navbar from './components/Navbar';
import BooksContextProvider from './context/BookContext';

function App() {
  
  return (

    <BooksContextProvider>
      <Navbar />
      <Booklist />
      <NewBookForm />
    </BooksContextProvider>
  );
}

export default App;
