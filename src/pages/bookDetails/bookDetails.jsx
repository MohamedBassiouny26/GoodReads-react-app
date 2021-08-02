import axios from "axios";
import React, { useEffect, useState } from "react";
import "./bookDetails.css";

function BookDetails(props) {
  const { id } = props.match.params;
  const [Book, setBook] = useState({});
  const [NewBooks, setNewBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://iti-good-reads.herokuapp.com/books/" + id)
      .then((res) => setBook(res.data.book))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-4 col-lg-3 ">
            <img
              className=" mx-auto d-block  cover shadow p-3 mb-5 "
              src={Book?.cover}
              alt=""
            />
            <p style={{ textAlign: "center", cursor: "pointer" }}>
              By
              {Book?.author?.fname}
              {Book?.author?.lname}
            </p>
          </div>
          <div className="col-md-8 col-lg-9">
            <h1 className="fw-bold text-center">{Book?.name}</h1>
            <h5>{Book?.sumary}</h5>
          </div>
        </div>
        {/* <div className="related-books row d-flex  align-items-center">
    <h3 className="text ">Related Books</h3>
    <hr className="text">
    <a className="bookCover col-lg-2 col-sm-12 col-md-6" *ngFor="let book of relatedBooks | slice:0:6;"
      (click)='navigate(book._id)'>
      <img src="{{book.cover}}" className="bookCoverImg" alt="...">
      <div className="">
        <h5 className="text">{{book?.name}}</h5>
      </div>
    </a>
  </div> */}
        {/* <div *ngFor="let review of books?.reviews" className="par">
    <p className="pra">{{review.user?.fname}} {{review.user?.lname}} </p>
    <p className="rev"> {{review.body}} </p>
  </div> */}
      </div>
    </>
  );
}

export default BookDetails;
