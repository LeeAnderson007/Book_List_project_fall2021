import React, { useState } from 'react';


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
    //console.log("form submitted");
    // console.log({ firstName, lastName });
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
          />
          {/* //value={lastName} */}
          <p>Description</p>
        <input onChange={(b) => {
            setDescription(b.target.value);
          }}
        />
        <button type="submit">{book ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default BookForm;