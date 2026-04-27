import { ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";

function Navbar() {
  return (
    <div className="w-full bg-slate-800 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg px-4">
        <div className="flex items-center gap-2 text-2xl font-bold uppercase hover:text-slate-300 transition cursor-pointer">
          <img src="https://ik.imagekit.io/o02kjfcyy/produtos_farmacia/logo.webp" alt="Logo" className="w-75 h-22" />
        </div>

        <div className="flex gap-6 items-center">
          <div className="hover:underline cursor-pointer">Produtos</div>
          <div className="hover:underline cursor-pointer">Categorias</div>
          <div className="hover:underline cursor-pointer">Sair</div>
          <UserIcon size={32} weight="bold" />
          <ShoppingCartIcon size={32} weight="bold" className="hover:text-teal-400 transition" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
