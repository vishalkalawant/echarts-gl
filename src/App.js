import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Products from './components/Moduls/Products';
import Sing from './components/Pages/Sing';
import LearnHooks from './components/Moduls/LearnHooks';
import Add from './components/Pages/Admin/Category/Add';
import List from './components/Pages/Admin/Category/List';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element= {<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/product" element={<Products/>}/>
            <Route path="/sign" element={<Sing/>}/>

            <Route path="/learnhook" element={<LearnHooks/>}/>
            <Route path="/admin/category/add" element={<Add/>}/>
            <Route path="/admin/category/list" element={<List/>}/>

          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
