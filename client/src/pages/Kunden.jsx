import React, { useState } from 'react'
import { Search, Filter, Plus, Pencil, Trash2, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react'
import DeleteModal from '../components/delete'
import NewAddModal from '../components/NewAdd'
import EditModal from '../components/Edit'

const Kunden = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(3)
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, customer: null })
  const [newAddModal, setNewAddModal] = useState(false)
  const [editModal, setEditModal] = useState({ isOpen: false, customer: null })
  
  const customers = [
    { id: 1, name: 'Russell Crowe', customerId: 'ZPV587469', email: 'russellcrowe@left4code.com', phone: '+3 809 291 4525', status: 'HVD-PV', statusColor: 'green' },
    { id: 2, name: 'Hugh Jackman', customerId: 'ZPV587469', email: 'hughjackman@left4code.com', phone: '+3 809 291 4525', status: 'HVD-PV', statusColor: 'green' },
    { id: 3, name: 'Angelina Jolie', customerId: 'ZPV587469', email: 'angelinajolie@left4code.com', phone: '+3 809 291 4525', status: 'PV-ALT', statusColor: 'red' },
    { id: 4, name: 'Al Pacino', customerId: 'ZPV587469', email: 'alpacino@left4code.com', phone: '+3 809 291 4525', status: 'HVD-PV', statusColor: 'green' },
    { id: 5, name: 'Russell Crowe', customerId: 'ZPV587469', email: 'russellcrowe@left4code.com', phone: '+3 809 291 4525', status: 'HVD-PV', statusColor: 'green' },
    { id: 6, name: 'Hugh Jackman', customerId: 'ZPV587469', email: 'hughjackman@left4code.com', phone: '+3 809 291 4525', status: 'HVD-PV', statusColor: 'green' },
    { id: 7, name: 'Angelina Jolie', customerId: 'ZPV587469', email: 'angelinajolie@left4code.com', phone: '+3 809 291 4525', status: 'PV-ALT', statusColor: 'red' },
    { id: 8, name: 'Al Pacino', customerId: 'ZPV587469', email: 'alpacino@left4code.com', phone: '+3 809 291 4525', status: 'HVD-PV', statusColor: 'green' },
    { id: 9, name: 'Russell Crowe', customerId: 'ZPV587469', email: 'russellcrowe@left4code.com', phone: '+3 809 291 4525', status: 'HVD-PV', statusColor: 'green' },
  ]


  const getStatusColor = (color) => {
    return color === 'green' 
      ? 'bg-green-500 text-white' 
      : 'bg-red-500 text-white'
  }

  const handleDeleteClick = (customer) => {
    setDeleteModal({ isOpen: true, customer })
  }

  const handleDeleteConfirm = () => {
    
    console.log('Deleting customer:', deleteModal.customer)
  
    setDeleteModal({ isOpen: false, customer: null })
  }

  const handleDeleteCancel = () => {
    setDeleteModal({ isOpen: false, customer: null })
  }

  const handleAddCustomerClick = () => {
    setNewAddModal(true)
  }

  const handleNewCustomerSave = (customerData) => {

    console.log('Saving new customer:', customerData)
    
  }

  const handleNewCustomerClose = () => {
    setNewAddModal(false)
  }

  const handleEditClick = (customer) => {
    setEditModal({ isOpen: true, customer })
  }

  const handleEditSave = (updatedData) => {
    console.log('Updating customer:', updatedData)
  
    setEditModal({ isOpen: false, customer: null })
  }

  const handleEditClose = () => {
    setEditModal({ isOpen: false, customer: null })
  }

  return (
    <div className="p-8">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Kunden-Listen</h1>

      <div className="flex items-center gap-4 mb-6">
        
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Ihre Suche eingeben"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600" />
        </div>

        
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>

        <button 
          onClick={handleAddCustomerClick}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Neuen Kunden anlegen</span>
        </button>
      </div>

      {/* Customer Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">NAME DES KUNDEN</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">KUNDEN-ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">E-MAIL</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">TELEFON</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">STATUS</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">AKTION</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{customer.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{customer.customerId}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{customer.email}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{customer.phone}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.statusColor)}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleEditClick(customer)}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <Pencil className="w-4 h-4" />
                      <span>Bearbeiten</span>
                    </button>
                    <button 
                      onClick={() => handleDeleteClick(customer)}
                      className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Loschen</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        
        <button 
          className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Vorherige</span>
        </button>

        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(1)}
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            1
          </button>
          <button 
            onClick={() => setCurrentPage(2)}
            className={`px-3 py-1 rounded ${currentPage === 2 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            2
          </button>
          <button 
            onClick={() => setCurrentPage(3)}
            className={`px-3 py-1 rounded ${currentPage === 3 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            3
          </button>
          <button 
            onClick={() => setCurrentPage(4)}
            className={`px-3 py-1 rounded ${currentPage === 4 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            4
          </button>
          <button 
            onClick={() => setCurrentPage(5)}
            className={`px-3 py-1 rounded ${currentPage === 5 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            5
          </button>
          <button 
            onClick={() => setCurrentPage(6)}
            className={`px-3 py-1 rounded ${currentPage === 6 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            6
          </button>
          <button 
            onClick={() => setCurrentPage(7)}
            className={`px-3 py-1 rounded ${currentPage === 7 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            7
          </button>
          <span className="px-2 text-gray-700">...</span>
          <button 
            onClick={() => setCurrentPage(20)}
            className={`px-3 py-1 rounded ${currentPage === 20 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            20
          </button>
        </div>

        
        <button 
          className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <span>Weiter</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">10 pro Seite</span>
          <ChevronDown className="w-4 h-4 text-gray-700" />
        </div>
      </div>

      
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        customerName={deleteModal.customer?.name}
      />

     
      <NewAddModal
        isOpen={newAddModal}
        onClose={handleNewCustomerClose}
        onSave={handleNewCustomerSave}
      />

      <EditModal
        isOpen={editModal.isOpen}
        onClose={handleEditClose}
        onSave={handleEditSave}
        customer={editModal.customer}
      />
    </div>
  )
}

export default Kunden

