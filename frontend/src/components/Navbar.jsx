import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">ShopSmart</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/products" className="hover:text-gray-200">Products</Link>
        <Link to="/cart" className="hover:text-gray-200">Cart</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;