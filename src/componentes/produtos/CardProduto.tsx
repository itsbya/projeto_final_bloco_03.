import { Link } from 'react-router-dom'
import type Produto from '../../models/Produto'
import { ShoppingCart } from '@phosphor-icons/react'
import { toastAlerta } from '../../util/toastAlerta'

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

    function adicionarAoCarrinho() {
        let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]')
        carrinho.push(produto)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
        toastAlerta('Produto adicionado ao carrinho!', 'sucesso')
    }

    return (
        <div className='border-slate-400 border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md hover:shadow-xl transition-shadow'>
            <div>
                <div className="flex w-full bg-slate-800 py-2 px-4 justify-between items-center text-white">
                    <Link to={`/detalhesProduto/${produto.id}`} className='text-lg font-bold uppercase hover:text-teal-400 transition'>{produto.nome}</Link>
                    <p className='text-sm italic'>{produto.categoria?.nome}</p>
                </div>
                <Link to={`/detalhesProduto/${produto.id}`} className='p-4 block'>
                    <img src={produto.foto} className='h-48 w-full object-contain' alt={produto.nome} />
                    <p className='text-2xl font-bold mt-4 text-slate-800'>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}
                    </p>
                </Link>
            </div>
            <div className="flex flex-col">
                <button 
                    onClick={adicionarAoCarrinho}
                    className='w-full text-white bg-teal-500 hover:bg-teal-700 flex items-center justify-center py-2 gap-2 font-bold transition'
                >
                    <ShoppingCart size={24} /> Comprar
                </button>
                <div className='flex'>
                    <Link to={`/editarProduto/${produto.id}`} className='w-full text-slate-100 bg-slate-400 hover:bg-slate-600 flex items-center justify-center py-2 transition'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarProduto/${produto.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center transition'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardProduto
