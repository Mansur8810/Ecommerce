import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Styles/index.css";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import Error from "./pages/Error.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Acoount from "./pages/Acoount.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { CartContextProvider } from "./context/provider.jsx";
import Cart from "./pages/Cart.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/account",
    element: <Acoount />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="container overflow-x-hidden">
      <Toaster position="top-center" />
      <CartContextProvider>
        <Navbar />
        <RouterProvider router={router} />
        <Footer/>
      </CartContextProvider>
    </main>
  </StrictMode>
);
