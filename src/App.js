import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
          <Footer/>
        </BrowserRouter>
      </AuthContext.Provider>
  )

  return (
    <div className="App">

    </div>
  );
}

export default App;
