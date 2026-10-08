import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <nav className="navbar">
        <h2 onClick={() => setPage("home")}>Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("products")}>Plants</button>
          <button onClick={() => setPage("cart")}>Cart 🛒</button>
        </div>
      </nav>

      {page === "home" && (
        <section className="hero">
          <div className="hero-content">
            <h1>Paradise Nursery</h1>
            <h2>Bring Nature Into Your Home</h2>

            <p>
              Discover beautiful plants and create a peaceful green paradise
              in your home.
            </p>

            <button onClick={() => setPage("products")}>
              Get Started
            </button>
          </div>
        </section>
      )}

      {page === "about" && <AboutUs />}

      {page === "products" && <ProductList />}

      {page === "cart" && <CartItem />}
    </div>
  );
}

export default App;