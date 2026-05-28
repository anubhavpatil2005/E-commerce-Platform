import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition block"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-52 w-full object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-4">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {product.description}
            </p>

            <p className="text-blue-600 text-xl font-bold mt-3">
              ${product.price}
            </p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;