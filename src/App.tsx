import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import Home from './paginas/home/Home'
import ListaCategorias from './componentes/categorias/ListaCategorias'
import FormCategoria from './componentes/categorias/FormCategoria'
import DeletarCategoria from './componentes/categorias/DeletarCategoria'
import ListaProdutos from './componentes/produtos/ListaProdutos'
import FormProduto from './componentes/produtos/FormProduto'
import DeletarProduto from './componentes/produtos/DeletarProduto'
import Carrinho from './paginas/carrinho/Carrinho'
import DetalhesProduto from './paginas/produtos/DetalhesProduto'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div className='min-h-[80vh] bg-slate-50'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/cadastrarProduto" element={<FormProduto />} />
          <Route path="/editarProduto/:id" element={<FormProduto />} />
          <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
          <Route path="/detalhesProduto/:id" element={<DetalhesProduto />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
