import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import { AuthContext } from "./context";
import Main from "./components/MainComponent";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, []);

  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          isLoading
      }}>
          <BrowserRouter>
              <Main/>
          </BrowserRouter>
      </AuthContext.Provider>
  )
};

export default App;
