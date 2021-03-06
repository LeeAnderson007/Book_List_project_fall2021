import React, { useState } from 'react';
// import List from "./List";

const BookForm = ({addBook, updateBook, book}) => {
  const [title, setTitle] = useState(
    book ? book.user.title : ""
  );
  const [author, setAuthor] = useState(
    book ? book.author : ""
  );
  const [description, setDescription] = useState(
    book ? book.description : ""
  );

  const handleSubmit = (b) => {
    b.preventDefault();
    console.log("form submitted");
    console.log({ title, author });
    // addUser....

    if (book) {
      updateBook({
        isbn: book.isbn,
        title: title,
        author: author,
        description: description,
      });
    } else {
      addBook({
        isbn: Math.random(),
        title: title,
        author: author,
        description: description,
      });
    }
  };

  return (
    <div>
      {/* <h1>{props.user ? "Edit" : "New"} Form</h1> */}
      <h1>New Book</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          value={title}
          onChange={(b) => {
            setTitle(b.target.value);
          }}
        />
        <p>Author</p>
        <input onChange={(b) => {
            setAuthor(b.target.value);
          }}
          value={author}
          />
          <p>Description</p>
        <input onChange={(b) => {
            setDescription(b.target.value);
          }}
          value={description}
        />
        <button type="submit">{book ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default BookForm;