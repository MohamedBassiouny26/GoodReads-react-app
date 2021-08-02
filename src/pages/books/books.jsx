import React, { useState, useRef, useEffect } from "react";
import Card from "../../componenets/card/card";
import "./books.css";
const axios = require("axios").default;

function Books() {
  const [Books, setBooks] = useState([]);
  const [NewBooks, setNewBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://iti-good-reads.herokuapp.com/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  function clicked() {
    console.log("clicked");
  }
  return (
    <>
      <section className="header">
        <div className="headerText">
          <h2>Explore Our Books</h2>
          <p>There's something for everybody</p>
        </div>
      </section>
      <section className="container ">
        <div className="all-books row d-flex  align-items-center">
          <h3 className="text">Books</h3>
          <hr className="text" />
          {Books.map((book) => (
            <Card
              id={book._id}
              clicked={clicked}
              className="mt-2 col-lg-2 col-sm-12 col-md-6"
              cover={book.cover}
              bookName={book.name}
              key={book._id}
            />
          ))}
        </div>
        <div className="all-books row d-flex  align-items-center">
          <h3 className="text ">New Books</h3>
          <p className="text alert alert-danger">
            Alert This Books weren't added to database it will be removed after
            reload
          </p>
          <hr className="text" />
          {NewBooks.length === 0 && <h1 className="text">Add Books First</h1>}
          {NewBooks.map((book) => (
            <Card
              className="mt-2 col-lg-2 col-sm-12 col-md-6"
              cover={book.cover}
              bookName={book.name}
              key={book._id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Books;
