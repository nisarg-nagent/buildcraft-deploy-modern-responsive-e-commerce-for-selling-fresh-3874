import { useState } from 'react'

const DEMO_ORDERS = [
  { id: 1, customer: 'John Doe', total: 150, date: '2024-02-01', status: 'completed' },
  { id: 2, customer: 'Jane Smith', total: 200, date: '2024-02-02', status: 'pending' },
]

export default function OrdersPage() {
  const [search, setSearch] = useState('')
  const filteredOrders = DEMO_ORDERS.filter(order =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Orders</h1>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search orders..."
        className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <div className="grid gap-4">
        {filteredOrders.map(order => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border p-4 flex justify-between items-center hover:shadow-md transition-shadow">
            <div>
              <p className="font-semibold text-gray-900">{order.customer}</p>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <p className="text-sm text-gray-900">${order.total}</p>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{order.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}