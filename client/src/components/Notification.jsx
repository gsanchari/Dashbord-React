import React, { useState, useRef, useEffect } from 'react'
import { Bell, Mail } from 'lucide-react'

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)

  const notifications = [
    {
      id: 1,
      text: 'Lorem Ipsum ist einfach ein',
      time: 'vor 1 Stunde'
    },
    {
      id: 2,
      text: 'Lorem Ipsum ist einfach ein',
      time: 'vor 1 Stunde'
    },
    {
      id: 3,
      text: 'Lorem Ipsum ist einfach ein',
      time: 'vor 1 Stunde'
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
      
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative focus:outline-none"
      >
        <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
          3
        </span>
      </button>

      
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-200"
          style={{ top: 'calc(100% + 8px)' }}
        >
          
          <div className="absolute -top-2 right-8">
            <div className="w-3 h-3 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
          </div>

          
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-800">Bhsoripweurhf</h3>
            <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 font-medium">
              3
            </span>
          </div>

          
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  
                  <div className="mt-0.5 flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-300" />
                  </div>
                  
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 leading-tight">{notification.text}</p>
                    <p className="text-sm text-gray-700 leading-tight">{notification.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Notification

