import { Link } from 'react-router-dom'
import type Categoria from '../../models/Categoria'


interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border-slate-400 border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-slate-800 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
            <p className='p-4 text-xl bg-slate-100'>{categoria.descricao}</p>
            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-slate-400 hover:bg-slate-600 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria
