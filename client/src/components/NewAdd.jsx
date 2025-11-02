import React, { useState } from 'react'

const NewAddModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    plz: '',
    stadt: '',
    stag: ''
  })

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
   
    console.log('New customer data:', formData)
    onSave(formData)
    
    setFormData({
      vorname: '',
      nachname: '',
      email: '',
      telefon: '',
      plz: '',
      stadt: '',
      strasse: ''
    })
    onClose()
  }

  const handleCancel = () => {
   
    setFormData({
      vorname: '',
      nachname: '',
      email: '',
      telefon: '',
      plz: '',
      stadt: '',
      strasse: ''
    })
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
            Neuen Kunden anlegen
          </h2>

          
          <form onSubmit={handleSubmit} className="space-y-4">
           
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="vorname" className="block text-sm font-medium text-gray-700 mb-1">
                  Vornamen
                </label>
                <input
                  type="text"
                  id="vorname"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="nachname" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachname
                </label>
                <input
                  type="text"
                  id="nachname"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

           
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="plz" className="block text-sm font-medium text-gray-700 mb-1">
                  PLZ
                </label>
                <input
                  type="text"
                  id="plz"
                  name="plz"
                  value={formData.plz}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="stadt" className="block text-sm font-medium text-gray-700 mb-1">
                  Stadt
                </label>
                <input
                  type="text"
                  id="stadt"
                  name="stadt"
                  value={formData.stadt}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            
            <div>
              <label htmlFor="strasse" className="block text-sm font-medium text-gray-700 mb-1">
                Stage
              </label>
              <input
                type="text"
                id="strasse"
                name="strasse"
                value={formData.strasse}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

           
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors font-medium"
                onClick={() => console.log('Bearbeiten clicked')}
              >
                Bearbeiten
              </button>
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

export default NewAddModal

