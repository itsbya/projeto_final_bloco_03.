import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import Home from './paginas/home/Home'
import ListaCategorias from './componentes/categorias/ListaCategorias'
import FormCategoria from './componentes/categorias/FormCategoria'
import DeletarCategoria from './componentes/categorias/DeletarCategoria'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
