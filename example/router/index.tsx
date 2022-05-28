import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Page } from '../pages/Page';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page' element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}