import { Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Product from '../pages/Product'
import History from '../pages/History'
import Graph from '../pages/Graph'

import React from 'react'

const ShareBoxRoutes = () => {
  return (
    <>
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path='/graph' element={<Graph />} />
      </Routes>
    </>
  )
}

export default ShareBoxRoutes
