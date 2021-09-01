import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";
import BookForm from "./BookForm";

const App = () => {
  const [books, setBooks] = useState([]);
  // first arg is a function that gets called on mount
  // second arg, [] will have this only get on mount
  useEffect(() => {
    console.log("useEffect called");
    // want to get data from api
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      let res = await axios.get("https://fakerapi.it/api/v1/books?_quanity=5");
      console.log(res.data.data);
      setBooks(res.data.data);
    } catch (err) {
      alert("err occured getting user");
      // setUsers(dummyUsers);
      console.log(err);
    }
  };

  const addBook = (book) => {
    // how do I add I user to my array of users.
    let newBooks = [book, ...books];
    setBooks(newBooks);
  };

  const updateBook = (book) => {
    //
    console.log(book);
    //
    let newArray = books.map((b) => (b.isbn == book.isbn ? book : b));
    setBooks(newArray);
  };

  const deleteBook = (isbn) => {
    console.log(isbn);
    let newBooks = books.filter((b) => b.isbn !== isbn);
    setBooks(newBooks);
  };

  const renderBooks = () => {
    if (books.length == 0) {
      return <p>No Books</p>;
    }

    return Books.map((book) => {
      return (
        <div style={styles.container} key={book.isbn}>
          <h1>{`${book.title}`}</h1>
          <img src={user.avatar} />
          <p>{book.isbn}</p>
          <button onClick={() => deleteBook(book.isbn)}>delete</button>
          <UserForm updateBook={updateBook} book={book} />
        </div>
      );
    });
  };

  console.log("rendering");
  return (
    <div>
      <h1>App Component Here!!!!</h1>
      <UserForm x={addBook} />
      {renderBooks()}
      <List />
    </div>
  );
};

const styles = {
  container: {
    // border: "1px solid",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding: "10px",
    margin: "40px",
  },
};

// Lifecycle of a component

// Mounted(intial render) - useEffect hook
// update(setState- rerender)- useState hook
// unMount(remove component from dom)

export default App;