import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import HomePage from "./components/HomePage.jsx";
import Error from "./components/Error.jsx";
import AddBook from "./components/AddBook.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import BookDetail from "./components/BookDetailView.jsx";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/browse-books",
        element: <BrowseBooks />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetail />,
      },
    ],
    errorElement: <Error />,
  },
];

const appRouter = createBrowserRouter(routers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    {/* <App /> */}
  </StrictMode>
);
