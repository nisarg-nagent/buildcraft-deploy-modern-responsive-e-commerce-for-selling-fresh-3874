import { useState } from 'react'

const DEMO_ORDERS = [
  { id: 1, date: '2024-01-01', amount: 100, status: 'completed' },
  { id: 2, date: '2024-01-02', amount: 150, status: 'pending' },
]

export default function DashboardPage() {
  const [filterStatus, setFilterStatus] = useState('')

  const filteredOrders = DEMO_ORDERS.filter(order => 
    filterStatus ? order.status === filterStatus : true
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="flex justify-between items-center mb-4">
        <select onChange={e => setFilterStatus(e.target.value)} className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="grid gap-4">
        {filteredOrders.map(order => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border p-4 flex justify-between items-center hover:shadow-md transition-shadow">
            <div>
              <p className="font-semibold text-gray-900">Order #{order.id}</p>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <p className="text-sm text-gray-900">${order.amount}</p>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{order.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}