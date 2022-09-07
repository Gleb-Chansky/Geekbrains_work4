import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Function/Layout';
import {HomePage} from './pages/HomePage'
import {ProfilePage} from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { NotFoundPage } from './pages/NotFoundPage';
import './style.css';

export const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path={'/chats'} element={<ChatsPage/>} />
        <Route path={'profile'} element={<ProfilePage />} />
      </Route>
      <Route path={'*'} element={<NotFoundPage/>} />
    </Routes>
  )
}

