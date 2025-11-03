import React from 'react'
import { Trash2 } from 'lucide-react'

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) 
    return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4"
        // onClick={(e) => e.stopPropagation()}
      >
        
        <div className="p-6">
          
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
          </div>

          
          <h2 className="text-xl font-bold text-gray-800 text-center mb-3">
            Sind Sie sicher?
          </h2>

          
          <p className="text-sm text-gray-600 text-center mb-6">
            Mochten Sie diesen Datensatz wirklich l0schen? dieser Vorgang kann nicht ruckgangig gemacht werden
          </p>

         
          <div className="flex gap-3">
            
            <button
              onClick={onConfirm}
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Loschen
            </button>
            
           
            <button
              onClick={onClose}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal

