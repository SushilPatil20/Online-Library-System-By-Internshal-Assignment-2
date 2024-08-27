import { useState } from "react";
import { books } from "../utils/Books";
import { Link } from "react-router-dom";

// Sample data for categories and books
const categories = [
  "All",
  "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "Fantasy",
  "Mystery",
];

const BrowseBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter books based on the selected category
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div id="browse-books">
      <div
        className="bg-cover bg-center flex items-center justify-center h-64"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAevn2o1ilMjUTaO9rY1I_kd8qFlVbTaNaBw&s')",
        }}
      >
        <section className="text-center">
          <h1 className="text-5xl font-bold text-white">Browse Books</h1>
          <p className="text-center text-white mt-4">
            Explore our extensive collection of books across various genres.
          </p>
        </section>
      </div>
      {/* Category Filter */}
      <div className="my-8 text-right w-">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-white border border-gray-300 rounded p-2 w-full md:w-2/5 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* Display filtered books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded overflow-hidden transform hover:scale-105 transition-transform"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-gray-500 text-sm">{book.category}</p>
              <Link
                to={`/book-details/${book.id}`}
                className="mt-4 block w-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
