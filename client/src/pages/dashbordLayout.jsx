import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { 
  LayoutGrid, Users, ChevronLeft, Search, Filter,Plus, Pencil, Trash2, ArrowLeft, ArrowRight
} from 'lucide-react'
import Notification from '../components/Notification'
import Dropdown from '../components/Dropdown'

const DashbordLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  //sidebar Items
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Armaturenbrett',
      icon: LayoutGrid,
      path: '/dashbord/dashboard'
    },
    {
      id: 'customers',
      label: 'Kunden',
      icon: Users,
      path: '/dashbord/kunden'
    },
    {
      id: 'menu2',
      label: 'Menu 2',
      icon: LayoutGrid,
      path: '/dashbord/menu2'
    },
    {
      id: 'menu3',
      label: 'Menu 3',
      icon: LayoutGrid,
      path: '/dashbord/menu3'
    }
  ]

  
  const getActiveSection = () => {
    const currentPath = location.pathname
    const activeItem = menuItems.find(item => currentPath === item.path || currentPath.startsWith(item.path + '/'))
    return activeItem?.id || 'dashboard'
  }

  const activeSection = getActiveSection()

  const handleNavigation = (path) => {
    navigate(path)
  }


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`bg-blue-900 text-white transition-all duration-300 ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="p-6 border-b border-blue-800">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-2 ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">X</span>
              </div>
              {!sidebarCollapsed && (
                <div>
                  <div className="font-bold text-sm">HVD</div>
                  <div className="text-xs text-blue-200">ZENTRALSTELLE</div>
                  <div className="text-xs text-blue-200">PATIENTEN VERFÜGUNG</div>
                </div>
              )}
            </div>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-3 px-6 py-4 transition-colors ${
                  isActive 
                    ? 'bg-blue-500 text-white' 
                    : 'text-white hover:bg-blue-800'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Navbar Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="bg-gray-200 px-8 py-4 flex items-center justify-between border-b border-gray-300">
          <div className="text-gray-700 text-sm">
            Startseite / Kunden
          </div>
          <div className="flex items-center gap-6">
            {/* Notifications */}
            <Notification />
            {/* User Menu */}
            <Dropdown />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashbordLayout
