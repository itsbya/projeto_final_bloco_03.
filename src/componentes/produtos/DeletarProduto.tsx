import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../services/Service"
import { toastAlerta } from "../../util/toastAlerta"
import type Produto from "../../models/Produto"

function DeletarProduto() {
    const [produto, setProduto] = useState<Produto>({} as Produto)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            toastAlerta('Produto não encontrado', 'erro')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/produtos")
    }

    async function deletarProduto() {
        try {
            await deletar(`/produtos/${id}`)

            toastAlerta('Produto apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Produto', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-slate-800 text-white font-bold text-2xl'>Produto</header>
                <div className="p-4 bg-slate-200">
                    <p className='text-xl font-bold'>{produto.nome}</p>
                    <img src={produto.foto} alt={produto.nome} className="w-full h-40 object-contain" />
                </div>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-slate-400 hover:bg-slate-600 flex items-center justify-center' onClick={deletarProduto}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto
