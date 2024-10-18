import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar o gerenciador de tarefas
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBarra from "./components/NavBarra.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Cadastro from "./pages/Cadastro.jsx"

function App() {
  return (
    <div className="App" style={{backgroundColor: "lightgreen", minHeight:"100vh"}} >
<BrowserRouter>
<NavBarra></NavBarra>
<Routes>
<Route path='/navbarra' element={<NavBarra/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/cadastro' element={<Cadastro/>}/>
<Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
