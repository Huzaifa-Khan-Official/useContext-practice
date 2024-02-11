import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import App from '../App'
import Navbar from '../component/Navbar'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar><Page1 /></Navbar>} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}