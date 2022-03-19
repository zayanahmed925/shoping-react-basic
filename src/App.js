import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/menubar/menubar';
import Allproduct from './components/allproduct/allproduct';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const cartAdd = () => setCount(count + 1);
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Allproduct cartAdd={cartAdd}></Allproduct>
    </div>
  );
}

export default App;
