import React, { useState, useEffect } from 'react'
import { Pencil } from 'lucide-react'

const EditModal = ({ isOpen, onClose, onSave, customer }) => {
  
  const parseName = (fullName) => {
    if (!fullName) return { vorname: '', nachname: '' }
    const parts = fullName.trim().split(' ')
    if (parts.length === 1) return { vorname: parts[0], nachname: '' }
    const nachname = parts.pop()
    const vorname = parts.join(' ')
    return { vorname, nachname }
  }

  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    plz: '',
    stadt: '',
    strasse: ''
  })

  
  useEffect(() => {
    if (customer) {
      const { vorname, nachname } = parseName(customer.name)
      setFormData({
        vorname: vorname,
        nachname: nachname,
        email: customer.email || '',
        telefon: customer.phone || '',
        plz: '',
        stadt: '',
        strasse: ''
      })
    }
  }, [customer])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    console.log('Updated customer data:', formData)
    onSave({ ...customer, ...formData })
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="p-6">
          
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Kunden bearbeiten
          </h2>

          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="vorname" className="block text-sm font-medium text-gray-700 mb-1">
                  Vornamen
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="vorname"
                    name="vorname"
                    value={formData.vorname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Pencil className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label htmlFor="nachname" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachname
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="nachname"
                    name="nachname"
                    value={formData.nachname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Pencil className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Pencil className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Pencil className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            

            
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium"
              >
                Stornieren
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Einreichen
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditModal

