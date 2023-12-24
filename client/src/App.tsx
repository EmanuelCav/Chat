import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import Header from './app/components/header/header'

import Index from './app/routes/index.routes'
import Room from './app/routes/room.routes'

import { store } from './app/server/store';

const persistor = persistStore(store)

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Header />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/room' element={<Room />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
