import './App.css';
import  Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import{Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import Addproduct from './Pages/Addproduct';
import Productdatails from './Pages/Productdetails';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="products/add" element={<Addproduct/>}/>
        <Route path="products/:productID" element={<Productdatails/>}/>
        
        </Routes>
        
        </div>
      </div>
    </div>
  );
}

export default App;
