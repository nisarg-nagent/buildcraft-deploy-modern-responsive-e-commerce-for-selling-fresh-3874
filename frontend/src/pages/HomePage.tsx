import { useState } from 'react'
import { Link } from 'react-router-dom'

const DEMO_PRODUCTS = [
  { id: 1, name: 'Apple', price: 1, availability: true },
  { id: 2, name: 'Banana', price: 2, availability: true },
  { id: 3, name: 'Carrot', price: 3, availability: false }
]

export default function HomePage() {
  const [search, setSearch] = useState('')
  const filtered = DEMO_PRODUCTS.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Homepage</h1>
        <Link to="/products" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">View All Products</Link>
      </div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..." 
        className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <div className="grid gap-4">
        {filtered.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border p-4 flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">${product.price}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.availability ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{product.availability ? 'In stock' : 'Out of stock'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}