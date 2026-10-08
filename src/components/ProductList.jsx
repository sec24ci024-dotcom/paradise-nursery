import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 25,
      category: "Air Purifying",
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae2c8a?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 30,
      category: "Flowering Plants",
      image:
        "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Aloe Vera",
      price: 20,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Spider Plant",
      price: 22,
      category: "Air Purifying",
      image:
        "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Money Plant",
      price: 18,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Jade Plant",
      price: 28,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1597055181300-d37a9f1f5f02?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Boston Fern",
      price: 24,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Rubber Plant",
      price: 35,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 9,
      name: "ZZ Plant",
      price: 32,
      category: "Air Purifying",
      image:
        "https://images.unsplash.com/photo-1632207691144-6f2f3c2c4b3f?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="product-page">
      <h1>Our Plants</h1>

      {categories.map(category => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;