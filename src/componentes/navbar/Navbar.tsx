import { ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-slate-800 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg px-4">
        <Link to='/home' className="flex items-center gap-2 text-2xl font-bold uppercase hover:text-slate-300 transition">
          <img src="https://ik.imagekit.io/o02kjfcyy/produtos_farmacia/logo.webp" alt="Logo" className="w-75 h-22" /></Link>

        <div className="flex gap-6 items-center">
          <Link to='/produtos' className="hover:underline cursor-pointer">Produtos</Link>
          <Link to='/categorias' className="hover:underline cursor-pointer">Categorias</Link>
          <Link to='/cadastrarCategoria' className="hover:underline cursor-pointer">Nova Categoria</Link>
          <Link to='/cadastrarProduto' className="hover:underline cursor-pointer">Novo Produto</Link>
          <Link to='/home' className="hover:underline cursor-pointer">Sair</Link>
          <UserIcon size={32} weight="bold" />
          <Link to='/carrinho'>
            <ShoppingCartIcon size={32} weight="bold" className="hover:text-teal-400 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
