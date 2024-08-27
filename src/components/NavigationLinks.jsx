import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <nav className="bg-blue-900 text-white ">
      <ul className="flex space-x-8">
        <li>
          <Link to={`/home`} className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/browse-books`} className="hover:underline">
            Browse Books
          </Link>
        </li>
        <li>
          <Link to={`/add-book`} className="hover:underline">
            Add Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
