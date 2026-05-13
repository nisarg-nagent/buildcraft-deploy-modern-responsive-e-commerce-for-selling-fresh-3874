import { NavLink, Link } from 'react-router-dom'

const NAV = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/products', label: 'Products' },
  { to: '/orders', label: 'Orders' },
  { to: '/profile', label: 'Profile' },
]

export default function Header() {
  return (
    <aside className="flex h-screen w-56 shrink-0 flex-col border-r border-gray-200 bg-white md:w-60">
      <div className="border-b border-gray-200 px-4 py-4">
        <Link to="/" className="text-lg font-bold text-green-600 hover:text-green-700">
          Fresh Mart
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-3" aria-label="Sidebar">
        {NAV.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'flex w-full items-center gap-3 rounded-md px-3.5 py-2.5 text-sm font-bold transition-colors ' +
              (isActive ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50')
            }
          >
            <span className="min-w-0 truncate">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}