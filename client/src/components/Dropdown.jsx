import React, { useState, useRef, useEffect } from 'react'
import { User, ChevronDown, Settings, HelpCircle, LogOut } from 'lucide-react'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)

  
  const menuItems = [
    {
      id: 'profile',
      label: 'Profil',
      icon: User,
      
    },
    {
      id: 'settings',
      label: 'Einstellungen',
      icon: Settings,
      
    },
    {
      id: 'help',
      label: 'Ilfe-Center',
      icon: HelpCircle,
      
    },
    {
      id: 'logout',
      label: 'Abmeldung',
      icon: LogOut,
      
    }
  ]

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative">
      
      <div
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <span className="text-gray-700 font-medium">Alexandro</span>
        <ChevronDown className="w-4 h-4 text-gray-700" />
      </div>

      
      {isOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50 border border-gray-200"
          style={{ top: 'calc(100% + 8px)' }}
        >
         
          <div className="absolute -top-2 right-6">
            <div className="w-3 h-3 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
          </div>

          
          <div className="py-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                    index === 0 ? 'bg-gray-50' : ''
                  }`}
                >
                  <Icon className="w-5 h-5 text-gray-700 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown

