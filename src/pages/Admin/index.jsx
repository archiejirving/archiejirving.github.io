import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from '../../layouts/Nav'
import AdminNav from '../../components/admin/AdminNav'
import Footer from '../../layouts/Footer'

import CreateEquipmentLoss from './CreateEquipmentLoss'
import CreateEquipmentType from './CreateEquipmentType'
import CreateUnit from './CreateUnit'
import CreateBelligerent from './CreateBelligerent'
import CreateConflict from './CreateConflict'
import DashBoard from './Dashboard'

function Admin() {
  return (
    <>
      <Nav />
      <div className="w-[100%] min-h-screen flex justify-center p-[30px]">
        <div className='w-[80%] flex justify-center gap-10'>
          <AdminNav />
          <div className='w-[1000px]'>
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/equipmentLoss" element={<CreateEquipmentLoss />} />
              <Route path="/equipmentType" element={<CreateEquipmentType />} />
              <Route path="/belligerent" element={<CreateBelligerent />} />
              <Route path="/unit" element={<CreateUnit />} />
              <Route path="/conflict" element={<CreateConflict />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Admin
