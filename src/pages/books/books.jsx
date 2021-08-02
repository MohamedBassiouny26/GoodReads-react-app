import React, { useState, useRef, useEffect } from "react";
import Card from "../../componenets/card/card";
import "./books.css";
const axios = require("axios").default;

function Books() {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://iti-good-reads.herokuapp.com/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          <h3 className="text ">Books</h3>
          <hr className="text" />
          {Books.map((book) => (
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
