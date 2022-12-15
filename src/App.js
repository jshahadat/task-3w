import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';

export const AuthContext = createContext();

function App() {
  const [data, setData] = useState('');
  const authInfo = [
    data,
    setData
  ]

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
