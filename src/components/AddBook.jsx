import { categories } from "../utils/Books";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schema";

const AddBook = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      cover: "",
      popular: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center">Add a New Book</h2>
      <p className="text-center text-gray-600 mt-4">
        Use the form below to add a new book to our collection.
      </p>
      <div className="max-w-md mx-auto mt-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Book Title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <Controller
              name="author"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Author Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
            {errors.author && (
              <p className="text-red-500">{errors.author.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="genre"
            >
              Genre
            </label>
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  id="genre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Genre</option>
                  {categories.map(
                    (category, index) =>
                      category !== "All" && (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      )
                  )}
                </select>
              )}
            />
            {errors.genre && (
              <p className="text-red-500">{errors.genre.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cover"
            >
              Book Cover URL
            </label>
            <Controller
              name="cover"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Cover Image URL"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
            {errors.cover && (
              <p className="text-red-500">{errors.cover.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Popularity
            </label>
            <Controller
              name="popular"
              control={control}
              render={({ field }) => (
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...field}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Mark as popular</span>
                </label>
              )}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
