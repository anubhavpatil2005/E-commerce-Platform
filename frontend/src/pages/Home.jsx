function Home() {
  const categories = [
    "Electronics",
    "Fashion",
    "Shoes",
    "Books",
    "Groceries",
    "Accessories",
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "$79",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: "$59",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to ShopSmart
        </h1>
        <p className="text-xl mb-6">
          Find the best products at amazing prices
        </p>

        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-xl px-5 py-3 rounded-lg text-black"
        />
      </section>

      {/* Categories */}
      <section className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-2">{product.price}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;