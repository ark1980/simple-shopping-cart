import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import AppContextProvider from './context/app-context';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
