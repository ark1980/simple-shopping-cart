import Home from './components/Home';
import Cart from './components/Cart';
import AppContextProvider from './context/app-context';


function App() {
  return (
    <AppContextProvider>
      <div>
        <Home />
        <Cart />
      </div>
    </AppContextProvider>
  );
}

export default App;
