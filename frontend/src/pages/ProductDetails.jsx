import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return (
      <div className="p-10 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10">

        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-600 mt-5 text-lg">
            {product.description}
          </p>

          <p className="text-blue-600 text-3xl font-bold mt-6">
            ${product.price}
          </p>

          <p className="mt-4">
            Stock: {product.stock}
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;