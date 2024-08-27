import React from "react";
import { Link, useParams } from "react-router-dom";
import { books } from "../utils/Books";

const BookDetail = () => {
  const id = useParams().id;
  const book = books.filter((book) => book.id == id)[0];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{book.title}</h2>
      <p className="text-gray-700 text-lg mt-2">Author: {book.author}</p>
      <p className="text-gray-600 text-md mt-2">Category: {book.category}</p>
      <Link
        to={`/home`}
        className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Back
      </Link>
    </div>
  );
};

export default BookDetail;
