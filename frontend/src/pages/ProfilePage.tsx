import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const [name, setName] = useState('Demo User')
  const [email, setEmail] = useState('demo@example.com')
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-4">
        <p className="text-lg font-semibold text-gray-700">Name: {name}</p>
        <p className="text-lg font-semibold text-gray-700">Email: {email}</p>
      </div>
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
        Logout
      </button>
    </div>
  )
}