import { useState, useEffect } from 'react';
import { fetchProducts } from '../lib/api';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to load products', error);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <div className="grid gap-4">
        {filteredProducts.map(product => (
          <div key={product.productId} className="bg-white rounded-xl shadow-sm border p-4 flex justify-between items-center hover:shadow-md transition-shadow">
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.availability ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{product.availability ? 'Available' : 'Unavailable'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
