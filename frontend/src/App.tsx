import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import ProductsPage from './pages/ProductsPage'
import OrdersPage from './pages/OrdersPage'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  const isAuthenticated = !!localStorage.getItem('token')

  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full bg-gray-50">
        {isAuthenticated && <Header />}
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
            <Route path="/products" element={isAuthenticated ? <ProductsPage /> : <Navigate to="/login" />} />
            <Route path="/orders" element={isAuthenticated ? <OrdersPage /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}